import React from 'react'
import Hero from '../Components/Hero/Hero'
import ServicesComponent from '../Components/ServicesComponent/ServicesComponent'
import AboutCta from '../Components/AboutCTA/AboutCTA'
import Form from '../Components/Form/Form'

const Home = () => {
  return (
    <div>
        <Hero />
        <ServicesComponent/>
        <AboutCta/>
        <Form/>
    </div>
  )
}

export default Home