import React from 'react'
import Experience from '../components/Experience'
import Intro from '../components/intro'
import Navbar from '../components/navbar'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import Works from '../components/Works'

const MainPage = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
    </div>
  )
}

export default MainPage