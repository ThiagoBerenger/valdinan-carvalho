import React from 'react'
import Hero from '../Components/Hero/Hero'
import ServicesComponent from '../Components/ServicesComponent/ServicesComponent'
import AboutCta from '../Components/AboutCTA/AboutCTA'
import Form from '../Components/Form/Form'
import GoogleReviews from '../Components/GoogleReviews/GoogleReviews'

import { ScrollRestoration } from 'react-router-dom'
import CoverageArea from '../Components/CoverageArea/CoverageArea'

const Home = () => {
  return (
    <div>
      <ScrollRestoration/>
        <Hero />
        <ServicesComponent/>
        <CoverageArea/>
        <AboutCta/>
        <GoogleReviews/>
        <Form/>
    </div>
  )
}

export default Home