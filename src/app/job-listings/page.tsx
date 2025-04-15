"use client"

import { supabase } from "@/lib/supabaseClient"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Clock, Search, Building } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

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
  const [locationFilter, setLocationFilter] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const { data, error } = await supabase.from("JobOpenings").select("*")

      if (error) {
        console.log("Error message:", error)
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
        (locationFilter === "" || job.location.toLowerCase().includes(locationFilter.toLowerCase())),
    )
    setFilteredJobs(results)
  }, [searchTerm, locationFilter, jobs])

  // Format date to relative time (e.g., "2 days ago")
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return "Today"
    if (diffDays === 1) return "Yesterday"
    return `${diffDays} days ago`
  }

  // Extract unique locations for filter dropdown
  const locations = [...new Set(jobs.map((job) => job.location))]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Find Your Next Job</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Job title, keywords, or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Location"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="pl-10"
            />
          </div>

          <Button className="bg-blue-600 hover:bg-blue-400 text-white">Find Jobs</Button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {locations.slice(0, 5).map((location) => (
            <Badge
              key={location}
              variant={locationFilter === location ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setLocationFilter(locationFilter === location ? "" : location)}
            >
              {location}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold mb-4">
          {loading ? "Loading jobs..." : `${filteredJobs.length} Jobs Available`}
        </h2>

        {loading ? (
          // Loading skeletons
          Array(5)
            .fill(0)
            .map((_, i) => (
              <Card key={i} className="mb-4">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Skeleton className="h-12 w-12 rounded-md" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-5 w-2/3" />
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-4 w-1/3" />
                      <Skeleton className="h-20 w-full mt-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
        ) : filteredJobs.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium">No jobs match your search criteria</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your search terms or location filter</p>
          </div>
        ) : (
          filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <div className="relative h-16 w-16 rounded-md overflow-hidden border">
                      {job.company_logo ? (
                        <Image
                          src={job.company_logo || "/placeholder.svg"}
                          alt={job.company}
                          fill
                          className="object-contain p-1"
                          unoptimized
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-gray-100">
                          <Building size={24} className="text-gray-400" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 text-blue-600">{job.jobtitle}</h3>

                    <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Building size={16} className="mr-1" />
                        {job.company}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin size={16} className="mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Briefcase size={16} className="mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock size={16} className="mr-1" />
                        {formatDate(job.created_at)}
                      </div>
                    </div>

                    <p className="text-sm font-medium mb-2">{job.one_line_description}</p>

                    <div className="mt-4 line-clamp-3 text-sm text-gray-600">{job.description}</div>

                    <div className="mt-4 flex justify-between items-center">
                      <Button
                        variant="outline"
                        className="text-sm hover:bg-blue-200"
                        onClick={() => window.open(job.apply_job_link, "_blank")}
                      >
                        View Details
                      </Button>

                      <Button
                        className="bg-blue-600 hover:bg-blue-400 text-white text-sm"
                        onClick={() => window.open(job.apply_job_link, "_blank")}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
