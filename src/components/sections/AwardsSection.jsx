import React from 'react'
import PropTypes from 'prop-types'
import { Card, Badge, Container } from '../common'
import SectionHeader from './SectionHeader'
import GridContainer from './GridContainer'
import { FiAward } from 'react-icons/fi'

/**
 * Default awards data
 */
const DEFAULT_AWARDS = [
  {
    id: 1,
    title: 'QS I-GAUGE',
    rating: 'Diamond+',
    description: 'Highest rating for Indian schools in quality assessment framework',
    year: '2024',
    icon: '🏆',
    cardBg: 'bg-gradient-to-br from-amber-50 to-yellow-100 border border-amber-200'
  },
  {
    id: 2,
    title: 'Education World C-Fore',
    rating: '1st Rank',
    description: 'Top CBSE school in Pune following National Curriculum',
    year: '2024',
    icon: '⭐',
    cardBg: 'bg-gradient-to-br from-blue-50 to-cyan-100 border border-cyan-200'
  },
  {
    id: 3,
    title: 'Green School Rankings',
    rating: 'Platinum',
    description: 'Recognition by Climate Project Foundation for sustainability',
    year: '2023',
    icon: '🌱',
    cardBg: 'bg-gradient-to-br from-emerald-50 to-lime-100 border border-emerald-200'
  },
  {
    id: 4,
    title: 'Education World India Rankings',
    rating: '1st in Pune',
    description: '6th in Maharashtra for Day Schools category',
    year: '2024',
    icon: '📚',
    cardBg: 'bg-gradient-to-br from-indigo-50 to-violet-100 border border-indigo-200'
  },
  {
    id: 5,
    title: 'IC3 Institute Accreditation',
    rating: 'Grade A+',
    description: 'Premium accreditation for institutional excellence',
    year: '2023',
    icon: '✓',
    cardBg: 'bg-gradient-to-br from-rose-50 to-orange-100 border border-rose-200'
  }
]

/**
 * AwardsSection Component
 * Displays institutional awards, accreditations, and recognitions
 */
const AwardsSection = ({ awards = DEFAULT_AWARDS, bgColor = 'bg-gray-50' }) => {

  return (
    <section className={`py-16 md:py-24 ${bgColor}`}>
      <Container size="lg">
        {/* Section Header */}
        <SectionHeader
          title="Awards & Accreditations"
          description="Recognized for excellence and innovation in education"
          alignment="center"
        />

        {/* Awards Grid */}
        <GridContainer columns={3} gap={6} className="mt-12">
          {DEFAULT_AWARDS.map((award) => (
            <Card
              key={award.id}
              shadow="md"
              hoverEffect
              className={`group transition-all duration-300 ${award.cardBg}`}
            >
              <Card.Body className="p-6 text-center">
                {/* Award Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {award.icon}
                </div>

                {/* Award Title */}
                <h3 className="text-xl font-bold font-serif text-secondary-900 mb-2">
                  {award.title}
                </h3>

                {/* Rating Badge */}
                <Badge variant="primary" size="md" className="mb-4">
                  {award.rating}
                </Badge>

                {/* Description */}
                <p className="text-secondary-700 text-sm leading-relaxed mb-4">
                  {award.description}
                </p>

                {/* Year */}
                <p className="text-xs text-secondary-600 font-semibold">
                  Awarded in {award.year}
                </p>
              </Card.Body>
            </Card>
          ))}
        </GridContainer>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-secondary-700 text-lg">
            Our continuous commitment to excellence is reflected in these recognitions
          </p>
        </div>
      </Container>
    </section>
  )
}

AwardsSection.propTypes = {
  awards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      cardBg: PropTypes.string,
    })
  ),
  bgColor: PropTypes.string,
}

export default AwardsSection
