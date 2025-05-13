"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Briefcase, GraduationCap, Users } from "lucide-react"
import { supabase } from "@/lib/supabaseClient"
import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"

interface JobProps {
  id: number
  jobtitle: string
  company: string
  type: string
  location: string
  one_line_description: string
}

export default function JobSeekersPage() {
  const [jobs, setJobs] = useState<JobProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true)
      const {data, error } = await supabase.from("JobOpenings").select("*").order("id",{ascending:false}).limit(4);
      
      if(error) {
        console.log("Error message:",error)
        setLoading(false)
        return
      }

      setJobs(data as JobProps[])
      setLoading(false)
    }

    fetchData()
  },[])

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">Take Your IT Career to the Next Level</h1>
              <p className="text-xl text-gray-600 mb-8">
                We connect talented IT professionals with exciting opportunities at leading companies. Let us help you
                find your perfect role.
              </p>
              <Button size="lg" className="text-white bg-blue-600 hover:bg-blue-400">Submit Your Resume</Button>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="https://makeitfable.com/wp-content/uploads/2020/12/876429_Methods-for-Inclusion-Blog-Image1200x675_103020.jpeg"
                alt="IT professional at work"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Current Job Openings</h2>
    {loading ? (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-48 rounded-lg" />
        ))}
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map(job => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">{job.jobtitle}</h3>
                <p className="text-gray-600">{job.company}</p>
              </div>
              <div className="bg-primary/10 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                {job.type}
              </div>
            </div>
            <p className="flex items-center text-gray-600 mb-2">
              <Briefcase className="h-4 w-4 mr-2" />
              {job.location}
            </p>
            <p className="text-gray-600 mb-4">{job.one_line_description}</p>
            <Button
                  variant="outline"
                  className="text-sm hover:bg-blue-200 w-full"
                  asChild
                  ><Link href={`/job-listings/${job.id}`}>
                    View Details
                </Link>
              </Button>
          </div>
          
        ))}
      </div>
    )}
    <div className="text-center mt-8">
            <Link href="/job-listings">
              <Button variant="outline" className="hover:bg-blue-200">
                View All Job Openings
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
  </div>
</section>

      {/* Current Openings
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Job Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Senior Full Stack Developer",
                company: "TechCorp Inc.",
                location: "San Francisco, CA",
                type: "Full-time",
                description:
                  "Experienced developer needed for a growing team working on cutting-edge web applications.",
              },
              {
                title: "DevOps Engineer",
                company: "CloudScale Solutions",
                location: "Remote",
                type: "Contract",
                description:
                  "Looking for a DevOps specialist to help streamline our deployment processes and infrastructure.",
              },
              {
                title: "IT Project Manager",
                company: "Global Systems",
                location: "Chicago, IL",
                type: "Full-time",
                description: "Experienced PM needed to lead complex technical projects for enterprise clients.",
              },
              {
                title: "Cybersecurity Analyst",
                company: "SecureNet",
                location: "Boston, MA",
                type: "Full-time",
                description: "Join our security team to protect critical infrastructure and respond to threats.",
              },
            ].map((job, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                  <div className="bg-primary/10 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                    {job.type}
                  </div>
                </div>
                <p className="flex items-center text-gray-600 mb-4">
                  <Briefcase className="h-4 w-4 mr-2" />
                  {job.location}
                </p>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <Button variant="outline" className="w-full hover:bg-blue-200">
                  View Details
                </Button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/job-listings">
              <Button variant="outline" className="hover:bg-blue-200">
                View All Job Openings
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section> */}



      {/* Why Work With Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
              <div className="bg-primary/10 rounded-full p-4 inline-flex mb-4">
                <Briefcase className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Access to Top Employers</h3>
              <p className="text-gray-600">
                We partner with leading companies across industries, giving you access to opportunities you will not find
                elsewhere.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
              <div className="bg-primary/10 rounded-full p-4 inline-flex mb-4">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Career Development</h3>
              <p className="text-gray-600">
                We provide resume guidance, interview preparation, and career advice to help you succeed.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
              <div className="bg-primary/10 rounded-full p-4 inline-flex mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Matching</h3>
              <p className="text-gray-600">
                We take the time to understand your skills, goals, and preferences to find the right fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm border">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/4">
                <Image
                  src="https://makeitfable.com/wp-content/uploads/2020/12/876429_Methods-for-Inclusion-Blog-Image1200x675_103020.jpeg"
                  alt="IT Professional"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <div className="md:w-3/4">
                <blockquote className="text-lg italic mb-4">
                  TechTalent Solutions helped me find a role that perfectly matched my skills and career goals. Their
                  team was supportive throughout the entire process, from resume review to interview preparation.
                </blockquote>
                <div>
                  <p className="font-bold">Jennifer Lee</p>
                  <p className="text-gray-600">Software Engineer placed at InnovateTech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Resume */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Submit Your Resume</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Your Name
                    </label>
                    <Input id="name" placeholder="John Smith" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label htmlFor="location" className="block mb-2 font-medium">
                      Current Location
                    </label>
                    <Input id="location" placeholder="City, State" />
                  </div>
                </div>
                <div>
                  <label htmlFor="position" className="block mb-2 font-medium">
                    Desired Position
                  </label>
                  <Input id="position" placeholder="e.g., Senior React Developer" />
                </div>
                <div>
                  <label htmlFor="experience" className="block mb-2 font-medium">
                    Years of Experience
                  </label>
                  <Input id="experience" type="number" placeholder="5" />
                </div>
                <div>
                  <label htmlFor="skills" className="block mb-2 font-medium">
                    Key Skills
                  </label>
                  <Textarea id="skills" placeholder="List your technical skills and expertise" rows={3} />
                </div>
                <div>
                  <label htmlFor="resume" className="block mb-2 font-medium">
                    Upload Resume
                  </label>
                  <Input id="resume" type="file" />
                  <p className="text-sm text-gray-500 mt-1">PDF or Word document (5MB max)</p>
                </div>
                <div>
                  <Button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-400">
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold mb-2">Is there a fee for job seekers?</h3>
              <p className="text-gray-600">
                No, our services are completely free for job seekers. We are paid by the companies that hire through us.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold mb-2">How long does the placement process take?</h3>
              <p className="text-gray-600">
                The timeline varies depending on the position and client needs. Some placements happen within days,
                while others may take a few weeks, especially for senior roles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold mb-2">What happens after I submit my resume?</h3>
              <p className="text-gray-600">
                Our recruiters will review your qualifications and reach out if there is a potential match. We will discuss
                your career goals and preferences before presenting any opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to advance your IT career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Submit your resume today and let our expert recruiters help you find your next great opportunity.
          </p>
          <Button size="lg" variant="secondary" className="text-blue-600">
            Submit Your Resume
          </Button>
        </div>
      </section>
    </>
  )
}

