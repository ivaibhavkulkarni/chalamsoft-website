import Link from "next/link"
import { Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">TechTalent Solutions</h3>
            <p className="text-gray-600 mb-4">Connecting top IT talent with leading businesses since 2010.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">For Clients</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/employers" className="text-gray-600 hover:text-blue-600">
                  Hire Talent
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600">
                  IT Services
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-600 hover:text-blue-600">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-blue-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-600">
              <p>123 Tech Park</p>
              <p>LA, USA</p>
              <p className="mt-2">Phone: +91 22123-4567</p>
              <p>Email: info@ChalamSoft.com</p>
            </address>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ChalamSoft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

