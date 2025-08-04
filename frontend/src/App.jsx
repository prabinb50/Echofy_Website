import './App.css'
import React from 'react'
import BannerImage from './components/BannerImage'
import AboutUsSection from './components/AboutUsSection'
import ScrollMarquee from './components/ScrollMarquee'
import OurSkills from './components/OurSkills'
import FeatureSection from './components/FeatureSection'
import StatsOverview from './components/StatsOverview'
import LatestBlogs from './components/LatestBlogs'

export default function App() {
  return (
    <div>
      <BannerImage />
      <ScrollMarquee />
      <AboutUsSection />
      <FeatureSection />
      <OurSkills />
      <StatsOverview />
      <LatestBlogs />
    </div>
  )
}
