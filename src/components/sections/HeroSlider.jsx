import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Button } from '../common'
import { CAROUSEL_SETTINGS } from '../../config/constants'

/**
 * Default hero slides data
 */
const DEFAULT_SLIDES = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1600',
    headline: 'A Safe and Happy Place to Grow',
    tagline: 'Welcome to St. Xavier',
    subheading: 'Where happiness is at the heart of learning',
    ctaText: 'Explore More'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/8471989/pexels-photo-8471989.jpeg?auto=compress&cs=tinysrgb&w=1600',
    headline: 'Excellence in Education',
    tagline: 'Holistic development for every student',
    subheading: 'Discover our world-class programs',
    ctaText: 'Learn More'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/8423066/pexels-photo-8423066.jpeg?auto=compress&cs=tinysrgb&w=1600',
    headline: 'Building Leaders of Tomorrow',
    tagline: 'Innovation and tradition blend seamlessly',
    subheading: 'Join a community of excellence',
    ctaText: 'Apply Now'
  }
]

/**
 * HeroSlider Component
 * Full-width carousel with auto-playing hero images, overlaid text, and CTAs
 * Features: Auto-play, manual navigation, keyboard support, touch swipe
 */
const HeroSlider = ({ slides = DEFAULT_SLIDES, onExploreClick = () => {} }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Keyboard]}
        autoplay={{
          delay: CAROUSEL_SETTINGS.autoPlayInterval,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: '.hero-next',
          prevEl: '.hero-prev',
        }}
        keyboard={{
          enabled: true,
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundColor: '#0f2f44',
              }}
            >
              {/* Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-3xl px-6 md:px-12 animate-fadeInUp">
                {/* Subheading */}
                <p className="text-sm md:text-base font-sans font-medium text-accent-500 uppercase tracking-[2px] mb-4">
                  {slide.tagline}
                </p>

                {/* Main Headline */}
                <h1 className="font-sans text-5xl md:text-6xl font-bold mb-4 leading-tight">
                  {slide.headline}
                </h1>

                {/* Subheading Description */}
                <p className="font-body text-base md:text-lg font-normal text-gray-100 mb-8 leading-relaxed">
                  {slide.subheading}
                </p>

                {/* CTA Button */}
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onExploreClick}
                  className="mx-auto shadow-lg hover:shadow-xl transition-shadow"
                >
                  {slide.ctaText}
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button
        className="hero-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-black w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        className="hero-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-black w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Custom Pagination Dots Style */}
      <style>{`
        :global(.swiper-pagination-bullet) {
          background-color: rgba(255, 255, 255, 0.6);
          opacity: 1;
          width: 10px;
          height: 10px;
          margin: 0 6px;
        }
        :global(.swiper-pagination-bullet-active) {
          background-color: white;
          width: 30px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  )
}

export default HeroSlider
