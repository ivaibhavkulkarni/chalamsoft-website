import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Server, Award, ArrowRight } from "lucide-react"

export default function Home() {

  const clients = [
    { id: 1, src: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png", alt: "Google" },
    { id: 2, src: "https://pngimg.com/uploads/apple_logo/apple_logo_PNG19674.png", alt: "Apple" },
    { id: 3, src: "https://logowik.com/content/uploads/images/hackerrank8164.logowik.com.webp", alt: "HackerRank" },
    { id: 4, src: "https://logos-world.net/wp-content/uploads/2020/10/Tesla-Emblem.png", alt: "Tesla" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Connecting Top IT Talent with Leading Businesses
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We bridge the gap between skilled IT professionals and companies that need them, providing staffing
                solutions and IT services tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link href="/hire-talent">
                <Button size="lg" className="text-white bg-blue-600 hover:bg-blue-400">
                  ChalamSoft Career 
                </Button>
              </Link>
                <Link href="/job-listings">
                <Button size="lg" variant="outline" className="text-base hover:bg-blue-200">
                  Find a Job
                </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="https://makeitfable.com/wp-content/uploads/2020/12/876429_Methods-for-Inclusion-Blog-Image1200x675_103020.jpeg"
                alt="IT professionals working together"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">500+</p>
              <p className="text-gray-600">Professionals Placed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">10+</p>
              <p className="text-gray-600">Years in Business</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">95%</p>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">100+</p>
              <p className="text-gray-600">Partner Companies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive IT staffing and technical services to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="mb-4 text-blue-600">
                <Users size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">IT Staffing</h3>
              <p className="text-gray-600 mb-6">
                We connect businesses with skilled IT professionals for contract, permanent, and temp-to-hire positions.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 h-5 w-5 mt-0.5" />
                  <span>Technical talent assessment and matching</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 h-5 w-5 mt-0.5" />
                  <span>Specialized recruitment for niche skills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 h-5 w-5 mt-0.5" />
                  <span>Flexible staffing solutions</span>
                </li>
              </ul>
              <Link href="/services#staffing">
                <Button variant="outline" className="w-full hover:bg-blue-200">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="mb-4 text-blue-600">
                <Server size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">IT Services</h3>
              <p className="text-gray-600 mb-6">
                We provide technical solutions and consulting to optimize your IT infrastructure and operations.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 h-5 w-5 mt-0.5" />
                  <span>Managed IT services and support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 h-5 w-5 mt-0.5" />
                  <span>Cloud solutions and migration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 h-5 w-5 mt-0.5" />
                  <span>Custom software development</span>
                </li>
              </ul>
              <Link href="/services#it-services">
                <Button variant="outline" className="w-full hover:bg-blue-200">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted By</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clients.map((client) => (
              <div key={client.id} className="flex justify-center">
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 text-blue-600">
              <Award size={40} className="mx-auto" />
            </div>
            <blockquote className="text-xl md:text-2xl italic mb-6">
              TechTalent Solutions helped us find the perfect development team for our project. Their understanding of
              our technical needs and company culture was impressive.
            </blockquote>
            <div>
              <p className="font-bold">Sarah Johnson</p>
              <p className="text-gray-600">CTO, InnovateTech</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to grow your team or find your next opportunity?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether youre looking to hire top IT talent or searching for your next career move, were here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/hire-talent">
            <Button size="lg" variant="secondary" className="text-blue-600">
              ChalamSoft Career 
            </Button>
            </Link>
            <Link href="/job-listings">
            <Button size="lg" variant="secondary" className="text-blue-600 w-full">
              Find a Job
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
