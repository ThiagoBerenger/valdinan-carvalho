import React from 'react'
import Hero from '../Components/Hero/Hero'
import ServicesComponent from '../Components/ServicesComponent/ServicesComponent'
import AboutCta from '../Components/AboutCTA/AboutCTA'

const Home = () => {
  return (
    <div>
        <Hero />
        <ServicesComponent/>
        <AboutCta/>
    </div>
  )
}

export default Home