import React from 'react'
import CTOSection from '../Components/Home/CTOSection'
import StatsSection from '../Components/Home/StatsSection'
import FeaturesSection from '../Components/Home/FeaturesSection'
import HeroSection from '../Components/Home/HeroSection'
import TestimonialsSection from '../Components/Home/TestimonialsSection'
function HomePage () {
  return (
    <>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTOSection />
        </>
  )
}

export default HomePage