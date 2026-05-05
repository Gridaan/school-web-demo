import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-secondary-900/80 shadow-soft rounded-b-2xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-2xl font-bold text-white font-sans">
            St. Xavier
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="font-sans text-sm md:text-base font-medium text-white hover:text-primary-200 transition">
            About Us
          </a>
          <a href="#academics" className="font-sans text-sm md:text-base font-medium text-white hover:text-primary-200 transition">
            Academics
          </a>
          <a href="#admissions" className="font-sans text-sm md:text-base font-medium text-white hover:text-primary-200 transition">
            Admissions
          </a>
          <a href="#achievements" className="font-sans text-sm md:text-base font-medium text-white hover:text-primary-200 transition">
            Achievements
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition">
            Admissions
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-primary-200"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary-900/80 border-t border-primary-700">
          <div className="px-4 py-4 space-y-4">
            <a href="#about" className="block font-sans text-sm font-medium text-white hover:text-primary-200">
              About Us
            </a>
            <a href="#academics" className="block font-sans text-sm font-medium text-white hover:text-primary-200">
              Academics
            </a>
            <a href="#admissions" className="block font-sans text-sm font-medium text-white hover:text-primary-200">
              Admissions
            </a>
            <a href="#achievements" className="block font-sans text-sm font-medium text-white hover:text-primary-200">
              Achievements
            </a>
            <button className="w-full px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition">
              Admissions
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
