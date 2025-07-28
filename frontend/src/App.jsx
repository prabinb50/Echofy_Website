import './App.css'
import React from 'react'
import BannerImage from './components/BannerImage'
import AboutImage from './components/AboutImage'
import Scroll from './components/Scroll'

export default function App() {
  return (
    <div>
      <BannerImage />
      <Scroll />
      <AboutImage />
    </div>
  )
}
