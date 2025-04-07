import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Search, Award } from "lucide-react"

export default function EmployersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">Find the Perfect IT Talent for Your Business</h1>
              <p className="text-xl text-gray-600 mb-8">
                We connect you with pre-vetted IT professionals who have the skills and experience to help your business
                succeed.
              </p>
              <Button size="lg" className="text-white bg-blue-600 hover:bg-blue-400">Request Talent</Button>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="IT hiring manager with team"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Hiring Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border relative">
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Understand Your Needs</h3>
              <p className="text-gray-600">
                We start by thoroughly understanding your technical requirements, company culture, and specific needs
                for the role.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border relative">
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Match & Vet Candidates</h3>
              <p className="text-gray-600">
                We identify and thoroughly screen candidates with the right skills, experience, and cultural fit for
                your team.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border relative">
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Present & Support</h3>
              <p className="text-gray-600">
                We present only the best matches and support you through the interview, selection, and onboarding
                process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose TechTalent Solutions</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <Search className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Technical Expertise</h3>
                    <p className="text-gray-600">
                      Our recruiters have technical backgrounds and understand the skills you need.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Speed & Efficiency</h3>
                    <p className="text-gray-600">We work quickly to find the right talent when you need it most.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Quality Guarantee</h3>
                    <p className="text-gray-600">We stand behind our placements with a satisfaction guarantee.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="IT professionals in meeting"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
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
                  src="/placeholder.svg?height=100&width=100&text=Client"
                  alt="Client"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <div className="md:w-3/4">
                <blockquote className="text-lg italic mb-4">
                  "TechTalent Solutions understood exactly what we were looking for in a DevOps engineer. They presented
                  candidates who not only had the technical skills but also fit perfectly with our team culture."
                </blockquote>
                <div>
                  <p className="font-bold">Robert Chen</p>
                  <p className="text-gray-600">CTO, CloudScale Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Request IT Talent</h2>
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
                    <label htmlFor="company" className="block mb-2 font-medium">
                      Company Name
                    </label>
                    <Input id="company" placeholder="Acme Inc." />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="(555) 123-4567" />
                  </div>
                </div>
                <div>
                  <label htmlFor="position" className="block mb-2 font-medium">
                    Position You're Hiring For
                  </label>
                  <Input id="position" placeholder="e.g., Senior React Developer" />
                </div>
                <div>
                  <label htmlFor="requirements" className="block mb-2 font-medium">
                    Job Requirements
                  </label>
                  <Textarea
                    id="requirements"
                    placeholder="Please describe the skills, experience, and qualifications needed for this role."
                    rows={4}
                  />
                </div>
                <div>
                  <Button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-400">
                    Submit Request
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
              <h3 className="text-xl font-bold mb-2">How quickly can you find candidates?</h3>
              <p className="text-gray-600">
                For most positions, we can present qualified candidates within 1-2 weeks. For urgent needs or
                specialized roles, we'll work with you to establish a realistic timeline.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold mb-2">What types of IT roles do you fill?</h3>
              <p className="text-gray-600">
                We specialize in a wide range of IT positions, from developers and engineers to project managers and
                executives. Our expertise spans across various technologies and industries.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold mb-2">What is your fee structure?</h3>
              <p className="text-gray-600">
                Our fees vary based on the type of placement (contract vs. permanent) and the complexity of the role.
                We're transparent about our pricing and will provide detailed information during our initial
                consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to find your next IT star?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your hiring needs and how we can help you build a stronger tech team.
          </p>
          <Button size="lg" variant="secondary" className="text-blue-600">
            Get Started Now
          </Button>
        </div>
      </section>
    </>
  )
}

