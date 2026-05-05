import React from 'react'
import PropTypes from 'prop-types'
import { Card, Container, Badge } from '../common'
import SectionHeader from './SectionHeader'
import GridContainer from './GridContainer'
import { FiBook, FiAward, FiTrendingUp, FiCode, FiGlobe, FiMusic } from 'react-icons/fi'

/**
 * Default curriculum programs data
 */
const DEFAULT_PROGRAMS = [
  {
    id: 1,
    icon: FiBook,
    title: 'CBSE-Aligned Curriculum',
    description: 'Comprehensive curriculum aligned with CBSE standards, ensuring academic excellence and nationwide recognition.',
    highlights: ['Strong Foundation', 'Conceptual Learning', 'Holistic Development'],
    color: 'from-blue-50 to-blue-100'
  },
  {
    id: 2,
    icon: FiAward,
    title: 'Subject Specializations',
    description: 'Advanced programs in Science, Mathematics, Languages, and Social Studies with experienced faculty guidance.',
    highlights: ['Expert Faculty', 'Lab Facilities', 'Research Focus'],
    color: 'from-purple-50 to-purple-100'
  },
  {
    id: 3,
    icon: FiTrendingUp,
    title: 'Sports & Athletics',
    description: 'Championship programs in cricket, tennis, swimming, basketball, and athletics with professional coaching.',
    highlights: ['Professional Coaches', 'State-of-Art Facilities', 'Tournament Participation'],
    color: 'from-green-50 to-green-100'
  },
  {
    id: 4,
    icon: FiCode,
    title: 'Technology & Innovation',
    description: 'Coding, robotics, and STEM programs preparing students for the digital future.',
    highlights: ['Coding Labs', 'Robotics Club', 'AI/ML Basics'],
    color: 'from-orange-50 to-orange-100'
  },
  {
    id: 5,
    icon: FiMusic,
    title: 'Arts & Creative Pursuits',
    description: 'Music, dance, theater, and visual arts programs fostering creative expression and cultural appreciation.',
    highlights: ['Professional Training', 'Regular Performances', 'Cultural Festivals'],
    color: 'from-pink-50 to-pink-100'
  },
  {
    id: 6,
    icon: FiGlobe,
    title: 'Language Programs',
    description: 'Multilingual curriculum including English, Hindi, Sanskrit, and foreign languages.',
    highlights: ['Native Speakers', 'Conversational Focus', 'Certifications'],
    color: 'from-indigo-50 to-indigo-100'
  }
]

/**
 * CurriculumSection Component
 * Displays academic programs and curriculum offerings
 */
const CurriculumSection = ({ programs = DEFAULT_PROGRAMS, bgColor = 'bg-secondary-50' }) => {

  return (
    <section className={`py-16 md:py-24 ${bgColor}`}>
      <Container size="lg">
        {/* Section Header */}
        <SectionHeader
          title="Curriculum & Academic Offerings"
          description="World-class programs designed for holistic development"
          alignment="center"
        />

        {/* Programs Grid */}
        <GridContainer columns={3} gap={6} className="mt-12">
          {DEFAULT_PROGRAMS.map((program) => {
            const IconComponent = program.icon
            return (
              <Card
                key={program.id}
                shadow="md"
                hoverEffect
                className={`group transition-all duration-300 h-full bg-gradient-to-br ${program.color}`}
              >
                <Card.Body className="p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-4 text-primary-800 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={40} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-secondary-900 mb-2">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-black text-sm leading-relaxed mb-4 flex-grow">
                    {program.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {program.highlights.slice(0, 2).map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" size="sm">
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  {/* More Info Link */}
                  <button className="mt-4 text-primary-800 font-semibold hover:text-primary-600 transition-colors flex items-center gap-2 text-sm group/link">
                    <span>Explore</span>
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </button>
                </Card.Body>
              </Card>
            )
          })}
        </GridContainer>

        {/* Call to Action */}
        <div
          className="mt-16 text-center bg-white rounded-lg p-8 md:p-12 shadow-md"
          data-aos="fadeInUp"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
            Explore Our Full Academic Spectrum
          </h3>
          <p className="text-black mb-6 max-w-2xl mx-auto">
            Our diverse curriculum is designed to nurture each student's unique talents and prepare them for success in higher education and beyond.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-primary-800 text-black font-semibold rounded-lg hover:bg-primary-900 transition-colors">
            View Curriculum Details
            <span className="ml-2">→</span>
          </button>
        </div>
      </Container>
    </section>
  )
}

CurriculumSection.propTypes = {
  programs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      icon: PropTypes.elementType.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      highlights: PropTypes.arrayOf(PropTypes.string),
      color: PropTypes.string,
    })
  ),
  bgColor: PropTypes.string,
}

export default CurriculumSection
