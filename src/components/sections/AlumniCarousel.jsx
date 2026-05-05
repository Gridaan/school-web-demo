import React from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Card, Badge, Container } from '../common'
import SectionHeader from './SectionHeader'
import { CAROUSEL_SETTINGS } from '../../config/constants'

const FALLBACK_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"%3E%3Cdefs%3E%3ClinearGradient id="g" x1="0" y1="0" x2="1" y2="1"%3E%3Cstop offset="0%25" stop-color="%231a3a52"/%3E%3Cstop offset="100%25" stop-color="%231a7a94"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="600" height="400" fill="url(%23g)"/%3E%3Ccircle cx="300" cy="150" r="62" fill="rgba(255,255,255,0.26)"/%3E%3Crect x="210" y="228" width="180" height="90" rx="45" fill="rgba(255,255,255,0.26)"/%3E%3Ctext x="50%25" y="88%25" text-anchor="middle" fill="white" font-size="24" font-family="Arial, sans-serif" font-weight="700"%3EAlumni Profile%3C/text%3E%3C/svg%3E'

const DEFAULT_ALUMNI = [
  {
    id: 1,
    name: 'Aadhya Sharma',
    year: 2020,
    university: 'IIT Bombay',
    field: 'Computer Science',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    achievement: 'Top Researcher'
  },
  {
    id: 2,
    name: 'Arjun Patel',
    year: 2019,
    university: 'Stanford University',
    field: 'Mechanical Engineering',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    achievement: 'Rhodes Scholar'
  },
  {
    id: 3,
    name: 'Shreya Desai',
    year: 2021,
    university: 'University of Oxford',
    field: 'Medicine',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    achievement: 'Outstanding Merit'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    year: 2018,
    university: 'MIT',
    field: 'Artificial Intelligence',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
    achievement: 'Innovation Leader'
  },
  {
    id: 5,
    name: 'Priya Menon',
    year: 2020,
    university: 'Harvard University',
    field: 'Business Administration',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    achievement: 'Business Excellence'
  },
  {
    id: 6,
    name: 'Rahul Kumar',
    year: 2019,
    university: 'NUS Singapore',
    field: 'Civil Engineering',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    achievement: 'Infrastructure Pioneer'
  }
]

/**
 * AlumniCarousel Component
 * Displays alumni success stories in an auto-playing carousel
 */
const AlumniCarousel = ({ alumni = DEFAULT_ALUMNI, bgColor = 'bg-secondary-50' }) => {
  return (
    <section className={`py-16 md:py-24 ${bgColor}`}>
      <Container size="lg">
        {/* Section Header */}
        <SectionHeader
          title="Guiding Alumni"
          description="Success stories of our distinguished alumni"
          alignment="center"
        />

        {/* Alumni Carousel */}
        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.alumni-next',
              prevEl: '.alumni-prev',
            }}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={24}
            loop={true}
            className="w-full"
          >
            {DEFAULT_ALUMNI.map((alumnus) => (
              <SwiperSlide key={alumnus.id}>
                <Card shadow="md" hoverEffect className="h-full">
                  <Card.Body className="p-6 flex flex-col h-full">
                    {/* Alumni Photo */}
                    <div className="-mx-6 -mt-6 mb-4">
                      <img
                        src={alumnus.image}
                        alt={alumnus.name}
                        onError={(e) => {
                          e.currentTarget.onerror = null
                          e.currentTarget.src = FALLBACK_IMAGE
                        }}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </div>

                    {/* Name & Achievement */}
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-secondary-900 mb-1">
                        {alumnus.name}
                      </h3>
                      <Badge variant="gold" size="sm" className="mb-3">
                        {alumnus.achievement}
                      </Badge>

                      {/* Details */}
                      <div className="space-y-2 text-sm text-black">
                        <p>
                          <span className="font-semibold">Class:</span> {alumnus.year}
                        </p>
                        <p>
                          <span className="font-semibold">University:</span>{' '}
                          {alumnus.university}
                        </p>
                        <p>
                          <span className="font-semibold">Field:</span> {alumnus.field}
                        </p>
                      </div>
                    </div>

                    {/* Profile Link */}
                    <button className="mt-4 text-primary-800 font-semibold hover:text-primary-600 transition-colors flex items-center gap-2 text-sm">
                      <span>View Profile</span>
                      <span>→</span>
                    </button>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              className="alumni-prev bg-primary-800 hover:bg-primary-900 text-black rounded-full p-3 transition-colors"
              aria-label="Previous alumni"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="alumni-next bg-primary-800 hover:bg-primary-900 text-black rounded-full p-3 transition-colors"
              aria-label="Next alumni"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center" data-aos="fadeInUp">
          <p className="text-black text-lg mb-6">
            Join a legacy of excellence and become part of our alumni network
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-primary-800 text-black font-semibold rounded-lg hover:bg-primary-900 transition-colors">
            View Alumni Directory
            <span className="ml-2">→</span>
          </button>
        </div>
      </Container>
    </section>
  )
}

AlumniCarousel.propTypes = {
  alumni: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      university: PropTypes.string.isRequired,
      field: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      achievement: PropTypes.string,
    })
  ),
  bgColor: PropTypes.string,
}

export default AlumniCarousel
