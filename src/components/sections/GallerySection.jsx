import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Container, Modal, Button } from '../common'
import SectionHeader from './SectionHeader'
import GridContainer from './GridContainer'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'

const FALLBACK_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"%3E%3Cdefs%3E%3ClinearGradient id="g" x1="0" y1="0" x2="1" y2="1"%3E%3Cstop offset="0%25" stop-color="%231a3a52"/%3E%3Cstop offset="100%25" stop-color="%231a7a94"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1200" height="800" fill="url(%23g)"/%3E%3Ccircle cx="180" cy="140" r="80" fill="rgba(255,255,255,0.12)"/%3E%3Ccircle cx="1020" cy="680" r="120" fill="rgba(255,255,255,0.08)"/%3E%3Ctext x="50%25" y="48%25" text-anchor="middle" fill="white" font-size="56" font-family="Arial, sans-serif" font-weight="700"%3ESchool Life%3C/text%3E%3Ctext x="50%25" y="56%25" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-size="26" font-family="Arial, sans-serif"%3EImage unavailable - placeholder shown%3C/text%3E%3C/svg%3E'

const DEFAULT_IMAGES = [
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop',
    alt: 'Science Labs',
    category: 'Labs',
    title: 'Advanced Science Laboratories',
    description: 'Equipped with modern equipment for hands-on learning'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=400&fit=crop',
    alt: 'Sports Complex',
    category: 'Sports',
    title: 'Olympic-Size Sports Complex',
    description: 'Professional-grade facilities for athletics and sports'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop',
    alt: 'Cafeteria',
    category: 'Dining',
    title: 'Modern Cafeteria',
    description: 'Nutritious meals in a comfortable dining environment'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=400&fit=crop',
    alt: 'Playground',
    category: 'Grounds',
    title: 'Expansive Playground',
    description: 'Safe and well-maintained grounds for outdoor activities'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1511537190424-130c2d54b833?w=500&h=400&fit=crop',
    alt: 'Computer Lab',
    category: 'Labs',
    title: 'Computer & Coding Lab',
    description: 'Latest computers and software for coding and design'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=400&fit=crop',
    alt: 'Science Expo',
    category: 'Events',
    title: 'Annual Science Expo',
    description: 'Student-led experiments and innovative project showcases'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=500&h=400&fit=crop',
    alt: 'Champion Awards',
    category: 'Events',
    title: 'Champions Recognition & Awards',
    description: 'Celebrating excellence and achievements of our students'
  },
]

/**
 * GallerySection Component
 * Displays infrastructure facilities with lightbox/modal support
 */
const GallerySection = ({ images = DEFAULT_IMAGES, bgColor = 'bg-white' }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(DEFAULT_IMAGES.map(img => img.category))]
  const filteredImages = selectedCategory === 'All' 
    ? DEFAULT_IMAGES 
    : DEFAULT_IMAGES.filter(img => img.category === selectedCategory)

  const handlePrevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1
    )
    setSelectedImage(filteredImages[
      currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1
    ])
  }

  const handleNextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === filteredImages.length - 1 ? 0 : currentImageIndex + 1
    )
    setSelectedImage(filteredImages[
      currentImageIndex === filteredImages.length - 1 ? 0 : currentImageIndex + 1
    ])
  }

  return (
    <section className={`py-16 md:py-24 ${bgColor}`}>
      <Container size="lg">
        {/* Section Header */}
        <SectionHeader
          title="Infrastructure & Facilities"
          description="World-class amenities supporting quality education"
          alignment="center"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setCurrentImageIndex(0)
              }}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-800 text-black shadow-lg'
                  : 'bg-secondary-100 text-black hover:bg-secondary-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <GridContainer columns={4} gap={4}>
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => {
                setSelectedImage(image)
                setCurrentImageIndex(idx)
              }}
            >
              {/* Image Container */}
              <div className="relative w-full h-64 overflow-hidden bg-secondary-100">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = FALLBACK_IMAGE
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </div>

                {/* Title Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-black font-semibold text-sm">{image.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </GridContainer>

        {/* Lightbox Modal */}
        {selectedImage && (
          <Modal
            isOpen={true}
            onClose={() => setSelectedImage(null)}
            title=""
            size="2xl"
            showHeader={false}
            className="max-w-4xl"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = FALLBACK_IMAGE
                  }}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Arrows */}
                {filteredImages.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-secondary-900 rounded-full p-2 transition-all"
                      aria-label="Previous image"
                    >
                      <FiChevronLeft size={24} />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-secondary-900 rounded-full p-2 transition-all"
                      aria-label="Next image"
                    >
                      <FiChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white text-secondary-900 rounded-full p-2 transition-all"
                  aria-label="Close"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Image Details */}
              <div className="p-6 bg-secondary-50">
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-black mb-4">
                  {selectedImage.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">
                    {currentImageIndex + 1} of {filteredImages.length}
                  </span>
                  <Button variant="primary" onClick={() => setSelectedImage(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </Container>
    </section>
  )
}

GallerySection.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
  bgColor: PropTypes.string,
}

export default GallerySection
