import React from 'react'
import Experience from '../components/Experience'
import Intro from '../components/intro'
import Navbar from '../components/navbar'
import Services from '../components/Services'

const MainPage = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
    </div>
  )
}

export default MainPage