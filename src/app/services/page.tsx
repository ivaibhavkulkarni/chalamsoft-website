import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Server, Code, Database, Cloud, Shield } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600">
              Comprehensive IT staffing and technical services to help your business thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* IT Staffing Section */}
      <section id="staffing" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block text-primary mb-4">
                <Users size={40} />
              </div>
              <h2 className="text-3xl font-bold mb-6">IT Staffing Solutions</h2>
              <p className="text-gray-600 mb-6">
                We connect businesses with skilled IT professionals for contract, permanent, and temp-to-hire positions.
                Our thorough vetting process ensures you get the right talent for your specific needs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-primary mr-3 h-5 w-5 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Contract Staffing</h3>
                    <p className="text-gray-600">
                      Flexible IT professionals for project-based work and temporary needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary mr-3 h-5 w-5 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Permanent Placement</h3>
                    <p className="text-gray-600">
                      Find the perfect full-time addition to your team with our thorough matching process.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary mr-3 h-5 w-5 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Temp-to-Hire</h3>
                    <p className="text-gray-600">Evaluate talent on the job before making a permanent commitment.</p>
                  </div>
                </div>
              </div>
              <Link href="/employers">
                <Button>Hire IT Talent</Button>
              </Link>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="IT staffing services"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Roles We Staff */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Roles We Staff</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: <Code className="h-6 w-6" />, title: "Software Developers" },
              { icon: <Database className="h-6 w-6" />, title: "Database Administrators" },
              { icon: <Cloud className="h-6 w-6" />, title: "Cloud Engineers" },
              { icon: <Shield className="h-6 w-6" />, title: "Cybersecurity Specialists" },
              { icon: <Server className="h-6 w-6" />, title: "System Administrators" },
              { icon: <Users className="h-6 w-6" />, title: "IT Project Managers" },
              { icon: <Code className="h-6 w-6" />, title: "QA Engineers" },
              { icon: <Server className="h-6 w-6" />, title: "Network Engineers" },
            ].map((role, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border flex items-center">
                <div className="text-primary mr-3">{role.icon}</div>
                <h3 className="font-medium">{role.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section id="it-services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[300px] md:h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="IT services"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block text-primary mb-4">
                <Server size={40} />
              </div>
              <h2 className="text-3xl font-bold mb-6">IT Services</h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive technical solutions and consulting to optimize your IT infrastructure and
                operations, helping you stay competitive in today's digital landscape.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-primary mr-3 h-5 w-5 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Managed IT Services</h3>
                    <p className="text-gray-600">
                      Proactive monitoring, maintenance, and support for your entire IT environment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary mr-3 h-5 w-5 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Cloud Solutions</h3>
                    <p className="text-gray-600">
                      Migration, management, and optimization of cloud infrastructure and applications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary mr-3 h-5 w-5 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Custom Software Development</h3>
                    <p className="text-gray-600">
                      Tailored applications designed to meet your specific business requirements.
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/contact">
                <Button>Get IT Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Case Study</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <Image
                  src="/placeholder.svg?height=200&width=200&text=Client+Logo"
                  alt="Client logo"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">FinTech Startup Scales Development Team</h3>
                <p className="text-gray-600 mb-4">
                  A rapidly growing fintech company needed to expand their development team quickly to meet product
                  deadlines. They faced challenges finding qualified developers with specific expertise in their
                  technology stack.
                </p>
                <div className="mb-4">
                  <h4 className="font-bold">Our Solution:</h4>
                  <p className="text-gray-600">
                    We provided a team of 8 specialized developers within 3 weeks, combining contract and permanent
                    placements to meet their immediate and long-term needs.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Results:</h4>
                  <p className="text-gray-600">
                    The client launched their product on schedule, reduced hiring costs by 30%, and retained 100% of the
                    permanent placements after one year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your IT staffing needs or technical service requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-primary">
              Request Talent
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Get IT Services
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

