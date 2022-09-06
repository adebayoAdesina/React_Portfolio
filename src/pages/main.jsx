import React from 'react'
import Experience from '../components/Experience'
import Intro from '../components/intro'
import Navbar from '../components/navbar'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
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
    </div>
  )
}

export default MainPage