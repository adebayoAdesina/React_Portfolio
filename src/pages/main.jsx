import React from 'react'
import Experience from '../components/Experience'
import Intro from '../components/intro'
import Navbar from '../components/navbar'
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
    </div>
  )
}

export default MainPage