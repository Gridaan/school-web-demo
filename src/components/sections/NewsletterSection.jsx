import React, { useState } from 'react'
import { Container, Button } from '../common'
import { FormField } from '../forms'
import SectionHeader from './SectionHeader'

/**
 * NewsletterSection Component
 * Email subscription form with validation
 */
const NewsletterSection = ({ bgColor = 'bg-gradient-to-r from-primary-800 to-primary-900' }) => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      if (email && email.includes('@')) {
        setSubmitStatus('success')
        setEmail('')
        // Reset after 3 seconds
        setTimeout(() => setSubmitStatus(null), 3000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus(null), 3000)
      }
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section className={`py-16 md:py-24 ${bgColor}`}>
      <Container size="md">
        {/* Section Header - Light Version */}
        <div className="text-center mb-12" data-aos="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Stay Connected
          </h2>
          <p className="text-lg text-gray-100 mb-2">
            Get the latest news, events, and updates from St. Xavier School
          </p>
          <p className="text-gray-200">
            Join our community of engaged parents and well-wishers
          </p>
        </div>

        {/* Newsletter Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-xl p-8 md:p-12"
          data-aos="fadeInUp"
          data-aos-delay="100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Email Input */}
            <div className="md:col-span-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:outline-none focus:border-primary-800 transition-colors"
                  required
                />
              </div>
              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm mt-2">
                  Please enter a valid email address
                </p>
              )}
            </div>

            {/* Subscribe Button */}
            <div>
              <Button
                type="submit"
                variant="primary"
                size="md"
                isLoading={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
          </div>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <p className="text-green-800 font-semibold">
                ✓ Thank you for subscribing! Check your inbox for confirmation.
              </p>
            </div>
          )}

          {/* Privacy Notice */}
          <div className="mt-6 flex items-start gap-3">
            <input
              type="checkbox"
              id="privacy"
              className="mt-1 w-5 h-5 text-primary-800 rounded cursor-pointer"
              defaultChecked
            />
            <label htmlFor="privacy" className="text-sm text-secondary-700 cursor-pointer">
              I agree to receive emails about school updates, events, and news. I can
              unsubscribe at any time. Privacy policy applies.
            </label>
          </div>
        </form>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: '📰',
              title: 'Weekly Updates',
              description: 'Latest news and announcements'
            },
            {
              icon: '📅',
              title: 'Event Calendar',
              description: 'Upcoming activities and programs'
            },
            {
              icon: '🎓',
              title: 'Academic News',
              description: 'Student achievements and milestones'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 rounded-lg p-6 text-center text-black hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              data-aos="fadeInUp"
              data-aos-delay={`${(idx + 1) * 50}`}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-200">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default NewsletterSection
