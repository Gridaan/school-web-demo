import React from 'react'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-900 text-black py-16 border-t border-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-primary-100 hover:text-primary-200 transition">Home</a></li>
              <li><a href="#about" className="text-primary-100 hover:text-primary-200 transition">About Us</a></li>
              <li><a href="#academics" className="text-primary-100 hover:text-primary-200 transition">Curriculum</a></li>
              <li><a href="#admissions" className="text-primary-100 hover:text-primary-200 transition">Admissions</a></li>
            </ul>
          </div>

          {/* Column 2: Academic Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Academics</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-100 hover:text-primary-200 transition">Programs</a></li>
              <li><a href="#" className="text-primary-100 hover:text-primary-200 transition">Faculty</a></li>
              <li><a href="#" className="text-primary-100 hover:text-primary-200 transition">Infrastructure</a></li>
              <li><a href="#" className="text-primary-100 hover:text-primary-200 transition">Activities</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-100 hover:text-primary-200 transition">Parent Portal</a></li>
              <li><a href="#" className="text-primary-100 hover:text-primary-200 transition">Student Portal</a></li>
              <li><a href="#" className="text-primary-100 hover:text-primary-200 transition">Alumni</a></li>
              <li><a href="#" className="text-primary-100 hover:text-primary-200 transition">Newsletter</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <FiMapPin className="mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Manjari (Budruk), Pune 412307</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiPhone className="flex-shrink-0" />
                <a href="tel:+918149117666" className="text-gray-300 hover:text-primary-400 text-sm">+91 8149117666</a>
              </li>
              <li className="flex items-center space-x-2">
                <FiMail className="flex-shrink-0" />
                <a href="mailto:info@stxavier.edu" className="text-gray-300 hover:text-primary-400 text-sm">
                  info@stxavier.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-700 pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" aria-label="Facebook" className="text-primary-100 hover:text-primary-200 transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-primary-100 hover:text-primary-200 transition">
                <FaLinkedin size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-primary-100 hover:text-primary-200 transition">
                <FaInstagram size={20} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-primary-100 text-sm">
              &copy; {currentYear} St. Xavier School. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
