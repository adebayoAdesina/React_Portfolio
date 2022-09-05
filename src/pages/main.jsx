import React from 'react'
import Intro from '../components/intro'
import Navbar from '../components/navbar'
import Services from '../components/Services'

const MainPage = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Services/>
    </div>
  )
}

export default MainPage