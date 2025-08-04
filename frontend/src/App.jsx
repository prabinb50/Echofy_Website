import './App.css'
import React from 'react'
import BannerImage from './components/BannerImage'
import AboutUsSection from './components/AboutUsSection'
import ScrollMarquee from './components/ScrollMarquee'
import OurSkills from './components/OurSkills'
import FeatureSection from './components/FeatureSection'
import WorkProcess from './components/WorkProcess'

export default function App() {
  return (
    <div>
      <BannerImage />
      <ScrollMarquee />
      <AboutUsSection />
      <FeatureSection/>
      <OurSkills />
      <WorkProcess/>
      
    </div>
  )
}
