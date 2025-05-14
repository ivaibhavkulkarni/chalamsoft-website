import Link from "next/link"
import { Instagram, Linkedin} from "lucide-react"

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
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
  <span className="sr-only">X</span>
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
                <Link href="/hire-talent " className="text-gray-600 hover:text-blue-600">
                  ChalamSoft Career 
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
              <p>Newmark House Building, Patrika Nagar,</p>
              <p>Near to Medicover Hospital line,</p>
              <p>Hitech City, Hyderabad-500081</p>
              <p>India</p>
              <p className="mt-2">Phone: +91 22123-4567</p>
              <p>Email: info@chalamcoft.com</p>
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

