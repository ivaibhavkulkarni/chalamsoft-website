import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Award, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About TechTalent Solutions</h1>
            <p className="text-xl text-gray-600">
              Were on a mission to connect the best IT talent with companies that value innovation and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, TechTalent Solutions began with a simple idea: to create a better way for companies to
                find skilled IT professionals, and for tech talent to find fulfilling work.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small team of recruiters has grown into a comprehensive IT staffing and services
                company, trusted by hundreds of businesses across the country.
              </p>
              <p className="text-gray-600">
                Our deep understanding of the technology landscape and commitment to quality has made us a leader in the
                industry, with a reputation for excellence and reliability.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="https://i2idirectmarketing.com/wp-content/uploads/2020/06/teamwork-quotes.png"
                alt="Our team at work"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To bridge the gap between talented IT professionals and innovative companies, creating meaningful
                connections that drive success for both parties.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted partner in IT staffing and services, known for our expertise, integrity, and
                commitment to excellence in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 inline-flex mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Industry Expertise</h3>
              <p className="text-gray-600">
                Our team has deep knowledge of the IT industry and its evolving needs, allowing us to make perfect
                matches.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 inline-flex mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Focus</h3>
              <p className="text-gray-600">
                We thoroughly vet all candidates and maintain high standards for our IT services to ensure excellence.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 inline-flex mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Responsive Service</h3>
              <p className="text-gray-600">
                We understand that timing is critical, so we work efficiently to meet your staffing and service needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Michael Chen", title: "CEO & Founder", img: "https://factsfive.com/wp-content/uploads/2020/10/Leonardo-DiCaprio-Wiki-Bio-Age-Net-Worth-and-Other-Facts.jpeg" },
              { name: "Sarah Williams", title: "Director of Recruitment", img: "https://factsfive.com/wp-content/uploads/2020/10/Leonardo-DiCaprio-Wiki-Bio-Age-Net-Worth-and-Other-Facts.jpeg" },
              { name: "David Rodriguez", title: "Head of IT Services", img: "https://factsfive.com/wp-content/uploads/2020/10/Leonardo-DiCaprio-Wiki-Bio-Age-Net-Worth-and-Other-Facts.jpeg" },
            ].map((person, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <Image
                    src={person.img}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                  <p className="text-gray-600 mb-4">{person.title}</p>
                  <p className="text-gray-600">
                    With over 15 years of experience in the IT industry, specializing in connecting talent with
                    opportunity.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to work with us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Lets discuss how we can help you find the right talent or provide the IT services your business needs.
          </p>
          <Button size="lg" variant="secondary" className="text-blue-600">
            Contact Us Today
          </Button>
        </div>
      </section>
    </>
  )
}

