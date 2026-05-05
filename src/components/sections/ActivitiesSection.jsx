import React from 'react'
import PropTypes from 'prop-types'
import { Card, Container, Badge } from '../common'
import SectionHeader from './SectionHeader'
import GridContainer from './GridContainer'
import { FiCalendar, FiMapPin } from 'react-icons/fi'

const FALLBACK_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"%3E%3Cdefs%3E%3ClinearGradient id="g" x1="0" y1="0" x2="1" y2="1"%3E%3Cstop offset="0%25" stop-color="%231a3a52"/%3E%3Cstop offset="100%25" stop-color="%231a7a94"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1200" height="800" fill="url(%23g)"/%3E%3Ctext x="50%25" y="48%25" text-anchor="middle" fill="white" font-size="56" font-family="Arial, sans-serif" font-weight="700"%3ESchool Activity%3C/text%3E%3Ctext x="50%25" y="56%25" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-size="26" font-family="Arial, sans-serif"%3EImage unavailable - placeholder shown%3C/text%3E%3C/svg%3E'

const DEFAULT_ACTIVITIES = [
  {
    id: 1,
    title: "Founder's Day Celebration 2024",
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=350&fit=crop',
    date: '15 Mar 2024',
    category: 'Celebration',
    location: 'Main Auditorium',
    description: 'Annual celebration honoring our founder with cultural performances and awards ceremony'
  },
  {
    id: 4,
    title: 'Annual Debate Championship',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop',
    date: '05 Feb 2024',
    category: 'Competition',
    location: 'Seminar Hall',
    description: 'Regional debate championship with schools from across the region'
  },
  {
    id: 5,
    title: 'Cultural Night & Gala',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=350&fit=crop',
    date: '28 Jan 2024',
    category: 'Cultural',
    location: 'Main Auditorium',
    description: 'Spectacular evening showcasing art, music, dance, and theater performances'
  },
  {
    id: 6,
    title: 'Environmental Awareness Camp',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=350&fit=crop',
    date: '20 Jan 2024',
    category: 'Community',
    location: 'School Grounds',
    description: 'Tree plantation and environmental conservation awareness drive'
  },
  {
    id: 7,
    title: 'Champions Award Ceremony',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=500&h=350&fit=crop',
    date: '18 Jan 2024',
    category: 'Celebration',
    location: 'Main Auditorium',
    description: 'Recognition ceremony celebrating academic and sports excellence throughout the year'
  },
  {
    id: 8,
    title: 'Computer Lab & Coding Workshop',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70504c8a?w=500&h=350&fit=crop',
    date: '12 Jan 2024',
    category: 'Academic',
    location: 'Computer Lab',
    description: 'Hands-on coding workshop with industry experts teaching latest programming skills'
  }
]

/**
 * ActivitiesSection Component
 * Displays recent school activities and events
 */
const ActivitiesSection = ({ activities = DEFAULT_ACTIVITIES, bgColor = 'bg-white' }) => {
  const getCategoryColor = (category) => {
    const colors = {
      Celebration: 'primary',
      Academic: 'secondary',
      Sports: 'success',
      Competition: 'warning',
      Cultural: 'secondary',
      Community: 'success'
    }
    return colors[category] || 'primary'
  }

  return (
    <section className={`py-16 md:py-24 ${bgColor}`}>
      <Container size="lg">
        {/* Section Header */}
        <SectionHeader
          title="Recent Activities & Events"
          description="Stay updated with the latest school happenings"
          alignment="center"
        />

        {/* Activities Grid */}
        <GridContainer columns={3} gap={6} className="mt-12">
          {DEFAULT_ACTIVITIES.map((activity) => (
            <Card
              key={activity.id}
              shadow="md"
              hoverEffect
              className="group h-full overflow-hidden"
            >
              {/* Activity Image */}
              <div className="relative w-full h-48 overflow-hidden bg-secondary-100">
                <img
                  src={activity.image}
                  alt={activity.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = FALLBACK_IMAGE
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Category Badge */}
                <Badge
                  variant={getCategoryColor(activity.category)}
                  className="absolute top-3 right-3 z-10"
                >
                  {activity.category}
                </Badge>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </div>

              <Card.Body className="p-6 flex flex-col h-full">
                {/* Title */}
                <h3 className="text-lg font-bold text-secondary-900 mb-3 line-clamp-2 group-hover:text-primary-800 transition-colors">
                  {activity.title}
                </h3>

                {/* Metadata */}
                <div className="space-y-2 mb-3 text-sm text-black font-body">
                  <div className="flex items-center gap-2">
                    <FiCalendar size={16} className="text-primary-800" />
                    <span>{activity.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin size={16} className="text-primary-800" />
                    <span>{activity.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-black text-sm leading-relaxed mb-4 flex-grow line-clamp-2">
                  {activity.description}
                </p>

                {/* Read More Link */}
                <button className="text-primary-800 font-semibold hover:text-primary-600 transition-colors flex items-center gap-2 text-sm group/link">
                  <span>Read More</span>
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </button>
              </Card.Body>
            </Card>
          ))}
        </GridContainer>

        {/* View All Link */}
        <div className="mt-12 text-center" data-aos="fadeInUp">
          <button className="inline-flex items-center px-8 py-3 border-2 border-primary-800 text-primary-800 font-semibold rounded-lg hover:bg-primary-50 transition-colors">
            View All Events
            <span className="ml-2">→</span>
          </button>
        </div>
      </Container>
    </section>
  )
}

ActivitiesSection.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
  bgColor: PropTypes.string,
}

export default ActivitiesSection
