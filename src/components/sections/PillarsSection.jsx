import React from 'react'
import PropTypes from 'prop-types'
import { Card, Container } from '../common'
import SectionHeader from './SectionHeader'
import GridContainer from './GridContainer'
import { FiTarget, FiEye, FiHeart, FiZap, FiActivity, FiTruck } from 'react-icons/fi'

/**
 * Default pillars data
 */
const DEFAULT_PILLARS = [
  {
    id: 1,
    icon: FiTarget,
    title: 'Our Mission',
    description: 'To provide exceptional education that develops confident, creative, and compassionate individuals who contribute positively to society.',
    color: 'text-blue-600'
  },
  {
    id: 2,
    icon: FiEye,
    title: 'Our Vision',
    description: 'To be a globally recognized school where every student realizes their potential and becomes a responsible global citizen.',
    color: 'text-purple-600'
  },
  {
    id: 3,
    icon: FiHeart,
    title: 'Core Values',
    description: 'Excellence, Integrity, Empathy, Resilience, and Innovation guide our approach to education and community engagement.',
    color: 'text-red-600'
  },
  {
    id: 4,
    icon: FiZap,
    title: 'Environment & Community',
    description: 'We foster environmental consciousness and encourage students to contribute meaningfully to society.',
    color: 'text-green-600'
  },
  {
    id: 5,
    icon: FiActivity,
    title: 'After-School Activities',
    description: 'Diverse programs including sports, arts, STEM clubs, and leadership development to nurture all-round growth.',
    color: 'text-orange-600'
  },
  {
    id: 6,
    icon: FiTruck,
    title: 'Student Support',
    description: 'Safe transportation, counseling services, and student support systems ensure student well-being and success.',
    color: 'text-indigo-600'
  }
]

/**
 * PillarsSection Component
 * Displays mission, vision, core values, and key institutional pillars
 */
const PillarsSection = ({ pillars = DEFAULT_PILLARS }) => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/159740/school-book-learn-class-159740.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-white/90" aria-hidden="true" />

      <Container size="lg" className="relative z-10">
        {/* Section Header */}
        <SectionHeader
          title="Mission, Vision & Core Values"
          description="The foundation of our educational philosophy"
          alignment="center"
        />

        {/* Pillars Grid */}
        <GridContainer columns={3} gap={6} className="mt-12">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon
            const isMissionOrVision = pillar.title === 'Our Mission' || pillar.title === 'Our Vision'
            return (
              <Card
                key={pillar.id}
                shadow="sm"
                hoverEffect
                className="group transition-all duration-300 h-full"
              >
                <Card.Body className="p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`mb-4 group-hover:scale-110 transition-transform duration-300 ${pillar.color}`}
                  >
                    <IconComponent size={48} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-bold text-secondary-900 mb-3 ${
                      isMissionOrVision ? 'font-serif tracking-tight' : 'font-sans'
                    }`}
                  >
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-black leading-relaxed flex-grow">
                    {pillar.description}
                  </p>

                  {/* Read More Link */}
                  <button className="mt-4 text-primary-700 font-semibold hover:text-primary-600 transition-colors flex items-center gap-2 group/link">
                    <span>Learn More</span>
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </button>
                </Card.Body>
              </Card>
            )
          })}
        </GridContainer>

        {/* Closing Statement */}
        <div
          className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-8 md:p-12 text-center"
          data-aos="fadeIn"
        >
          <p className="text-lg md:text-xl text-secondary-900 font-semibold mb-3">
            Building a community rooted in excellence and human values
          </p>
          <p className="text-secondary-700 max-w-2xl mx-auto">
            These pillars guide every decision we make and every interaction we have with our students, parents, and community partners.
          </p>
        </div>
      </Container>
    </section>
  )
}

PillarsSection.propTypes = {
  pillars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      icon: PropTypes.elementType.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      color: PropTypes.string,
    })
  ),
}

export default PillarsSection
