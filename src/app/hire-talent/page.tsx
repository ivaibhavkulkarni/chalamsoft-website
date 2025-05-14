"use client"

import { supabase } from "@/lib/supabaseClient"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase, MapPin, Clock, Search, Building } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"

interface JobProps {
  id: number
  created_at: string
  jobtitle: string
  company: string
  location: string
  type: string
  description: string
  one_line_description: string
  company_logo: string
  apply_job_link: string
}

export default function JobListings() {
  const [jobs, setJobs] = useState<JobProps[]>([])
  const [filteredJobs, setFilteredJobs] = useState<JobProps[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const { data, error } = await supabase.from("JobOpeningsForChalamSoft").select("*")

      if (error) {
        console.error("Error fetching jobs:", error)
        setLoading(false)
        return
      }

      setJobs(data as JobProps[])
      setFilteredJobs(data as JobProps[])
      setLoading(false)
    }

    fetchData()
  }, [])

  useEffect(() => {
    const results = jobs.filter(
      (job) =>
        (job.jobtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (locationFilter === "all" || job.location.toLowerCase() === locationFilter.toLowerCase()) &&
        (typeFilter === "all" || job.type.toLowerCase() === typeFilter.toLowerCase()),
    )
    setFilteredJobs(results)
  }, [searchTerm, locationFilter, typeFilter, jobs])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const locations = ["all", ...new Set(jobs.map((job) => job.location))]
  const jobTypes = ["all", ...new Set(jobs.map((job) => job.type))]

  return (
    <div className="container mx-auto px-6 py-10 max-w-7xl">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Explore Job Opportunities</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8 bg-gray-50 p-6 rounded-xl shadow-sm">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <Input
              placeholder="Search jobs, companies, or keywords"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-3 border-gray-300 rounded-lg"
            />
          </div>

          <Select onValueChange={setLocationFilter} value={locationFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location === "all" ? "All Locations" : location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={setTypeFilter} value={typeFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Select Job Type" />
            </SelectTrigger>
            <SelectContent>
              {jobTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type === "all" ? "All Types" : type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
            Search Jobs
          </Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          {loading ? "Loading jobs..." : `${filteredJobs.length} Jobs Found`}
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <Card key={i} className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <Skeleton className="h-16 w-16 rounded-full" />
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-4 w-1/3" />
                      <Skeleton className="h-16 w-full" />
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-xl">
            <h3 className="text-xl font-medium text-gray-800">No jobs found</h3>
            <p className="text-gray-500 mt-3">Try different search terms or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden border border-gray-200">
                        {job.company_logo ? (
                          <Image
                            src={job.company_logo}
                            alt={job.company}
                            fill
                            className="object-contain p-1"
                            unoptimized
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center bg-gray-100">
                            <Building size={20} className="text-gray-400" />
                          </div>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-blue-600">{job.jobtitle}</h3>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Building size={16} className="mr-2" />
                        {job.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase size={16} className="mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {formatDate(job.created_at)}
                      </div>
                    </div>

                    <p className="text-sm font-medium text-gray-700">{job.one_line_description}</p>

                    <div className="line-clamp-2 text-sm text-gray-500">{job.description}</div>

                    <div className="flex justify-between items-center mt-4">
                      <Button
                        variant="outline"
                        className="text-sm border-blue-600 text-blue-600 hover:bg-blue-50"
                        asChild
                      >
                        <Link href={`/hire-talent/${job.id}`}>
                          View Job
                        </Link>
                      </Button>

                      <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm"
                        onClick={() => window.open(job.apply_job_link, "_blank")}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}