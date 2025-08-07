import './App.css'
import React from 'react'
import BannerImage from './components/BannerImage'
import AboutUsSection from './components/AboutUsSection'
import ScrollMarquee from './components/ScrollMarquee'
import OurSkills from './components/OurSkills'
import FeatureSection from './components/FeatureSection'
import WorkProcess from './components/WorkProcess'
import StatsOverview from './components/StatsOverview'
import LatestBlogs from './components/LatestBlogs'
import Testimonials from './components/Testimonials'
import Partners from './components/Partners'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <BannerImage />
      <ScrollMarquee />
      <AboutUsSection />
      <FeatureSection />
      <OurSkills />
      <StatsOverview />
      <WorkProcess />
      <Testimonials />
      <Partners />
      <LatestBlogs />
      <Footer/>
    </div>
  )
}
