import './App.css'
import React from 'react'
import BannerImage from './components/BannerImage'
import AboutUsSection from './components/AboutUsSection'
import ScrollMarquee from './components/ScrollMarquee'
import OurSkills from './components/OurSkills'

export default function App() {
  return (
    <div>
      <BannerImage />
      <ScrollMarquee />
      <AboutUsSection />
      <OurSkills />
    </div>
  )
}
