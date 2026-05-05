import React from 'react'
import { Container, Button } from '../common'
import { FiPhone, FiMail, FiArrowRight } from 'react-icons/fi'

/**
 * AdmissionsCtaSection Component
 * Call-to-action section for admissions inquiries
 */
const AdmissionsCtaSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundColor: '#d9eef5',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-100/95 via-primary-50/90 to-white/90" aria-hidden="true" />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32" />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div data-aos="fadeInLeft">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-lg text-secondary-700 mb-6">
              Take the first step towards excellence in education. Learn about our admissions process, requirements, and timelines.
            </p>

            {/* Quick Facts */}
            <div className="space-y-3 mb-8">
              {[
                { icon: '✓', text: 'Rolling admissions throughout the year' },
                { icon: '✓', text: 'Comprehensive entrance assessment' },
                { icon: '✓', text: 'Personal interview with parents' },
                { icon: '✓', text: 'Transparent and fair selection process' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-secondary-900">
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                className="group"
                onClick={() => {
                  // Scroll to enquiry form or open modal
                  document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Admissions Enquiry
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="border-2 border-primary-800 text-primary-800 hover:bg-primary-50"
              >
                View Requirements
              </Button>
            </div>
          </div>

          {/* Right Content - Contact & Timeline */}
          <div
            className="bg-white rounded-lg p-8 border border-gray-100"
            data-aos="fadeInRight"
          >
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">Quick Contact</h3>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <FiPhone className="w-6 h-6 text-primary-800 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-secondary-700">Call for Information</p>
                  <p className="text-lg font-semibold text-secondary-900">+91 9876 543 210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FiMail className="w-6 h-6 text-primary-800 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-secondary-700">Email Us</p>
                  <p className="text-lg font-semibold text-secondary-900">admissions@stxavier.edu</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="border-t border-white/20 pt-6">
              <h4 className="font-bold text-secondary-900 mb-4">Admissions Timeline</h4>
              <div className="space-y-3">
                {[
                  { month: 'Jan - Mar', label: 'Application Period' },
                  { month: 'Apr - May', label: 'Entrance Tests' },
                  { month: 'Jun', label: 'Results & Interviews' },
                  { month: 'Jul', label: 'Final Confirmation' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="text-secondary-700">{item.label}</span>
                    <span className="font-semibold text-secondary-900">{item.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div
          className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-6 justify-center"
          data-aos="fadeInUp"
        >
          {[
            { label: 'Curriculum Overview', href: '#curriculum' },
            { label: 'Facilities Tour', href: '#gallery' },
            { label: 'Parent Portal', href: '#portal' },
            { label: 'FAQs', href: '#faqs' }
          ].map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-primary-800 hover:text-accent-500 font-semibold transition-colors flex items-center gap-2 group"
            >
              {link.label}
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default AdmissionsCtaSection
