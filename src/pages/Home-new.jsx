import React from 'react'
import {
  HeroSlider,
  AwardsSection,
  PillarsSection,
  CurriculumSection,
  NewsletterSection,
  AdmissionsCtaSection
} from '../components/sections'

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Section 1: Hero Slider */}
        <HeroSlider />

        {/* Section 2: Awards & Accreditations */}
        <AwardsSection />

        {/* Section 3: Mission, Vision & Core Values */}
        <PillarsSection />

        {/* Section 4: Curriculum Overview */}
        <CurriculumSection />

        {/* Section 8: Admissions CTA */}
        <AdmissionsCtaSection />

        {/* Section 9: Newsletter Signup */}
        <NewsletterSection />
      </main>
    </div>
  )
}

export default Home
