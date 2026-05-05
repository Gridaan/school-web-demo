import React from 'react'
import {
  HeroSlider,
  PartnershipsSection,
  AwardsSection,
  PillarsSection,
  GallerySection,
  AlumniCarousel,
  ActivitiesSection,
  CurriculumSection,
} from '../components/sections'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSlider />
        <PartnershipsSection />
        <ActivitiesSection />
        <PillarsSection />
        <GallerySection />
        <AlumniCarousel />
        <AwardsSection />
        <CurriculumSection />
      </main>
      <Footer />
    </div>
  )
}

export default Home
