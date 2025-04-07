import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Quote } from "lucide-react"

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Client & Candidate Success Stories</h1>
            <p className="text-xl text-gray-600">
              Hear what our clients and placed professionals have to say about their experience working with TechTalent
              Solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Johnson",
                title: "CTO, InnovateTech",
                quote:
                  "TechTalent Solutions helped us find the perfect development team for our project. Their understanding of our technical needs and company culture was impressive.",
                image: "1",
              },
              {
                name: "Michael Rodriguez",
                title: "VP of Engineering, CloudScale",
                quote:
                  "We've worked with several staffing firms, but TechTalent Solutions stands out for their technical expertise and quality of candidates. They've become our go-to partner for IT hiring.",
                image: "2",
              },
              {
                name: "Jennifer Lee",
                title: "Director of IT, Global Systems",
                quote:
                  "When we needed to scale our team quickly for a major project, TechTalent Solutions delivered exceptional candidates within our tight timeline. Their service was outstanding.",
                image: "3",
              },
              {
                name: "Robert Chen",
                title: "CTO, CloudScale Technologies",
                quote:
                  "TechTalent Solutions understood exactly what we were looking for in a DevOps engineer. They presented candidates who not only had the technical skills but also fit perfectly with our team culture.",
                image: "4",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/4">
                    <Image
                      src={`/placeholder.svg?height=100&width=100&text=${testimonial.name}`}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                  </div>
                  <div className="md:w-3/4">
                    <div className="text-primary mb-4">
                      <Quote size={24} />
                    </div>
                    <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Candidate Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "David Park",
                title: "Senior Software Engineer",
                quote:
                  "TechTalent Solutions found me a role that perfectly matched my skills and career goals. Their team was supportive throughout the entire process, from resume review to interview preparation.",
                image: "5",
              },
              {
                name: "Aisha Patel",
                title: "DevOps Specialist",
                quote:
                  "I was looking for a remote position with a company that valued work-life balance. TechTalent Solutions not only found me that perfect match but also negotiated a better compensation package than I expected.",
                image: "6",
              },
              {
                name: "Marcus Johnson",
                title: "IT Project Manager",
                quote:
                  "After being laid off, I was worried about finding a new position quickly. TechTalent Solutions connected me with three great opportunities within a week, and I started my new job just two weeks later.",
                image: "7",
              },
              {
                name: "Sophia Garcia",
                title: "UX/UI Designer",
                quote:
                  "What impressed me most was how TechTalent Solutions took the time to understand my career goals and the type of company culture I was looking for. They didn't just find me a job—they found me the right job.",
                image: "8",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/4">
                    <Image
                      src={`/placeholder.svg?height=100&width=100&text=${testimonial.name}`}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                  </div>
                  <div className="md:w-3/4">
                    <div className="text-primary mb-4">
                      <Quote size={24} />
                    </div>
                    <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Video Testimonial</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative h-0 pb-[56.25%] bg-gray-100 rounded-lg shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">Video Testimonial Placeholder</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold">Tech Innovation Partners</h3>
              <p className="text-gray-600">How TechTalent Solutions helped build their engineering team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Companies We've Worked With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex justify-center">
                <Image
                  src={`/placeholder.svg?height=60&width=120&text=Client+${i}`}
                  alt={`Client ${i}`}
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to experience the TechTalent difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're looking to hire top IT talent or find your next career opportunity, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-primary">
              Hire Talent
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Find a Job
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

