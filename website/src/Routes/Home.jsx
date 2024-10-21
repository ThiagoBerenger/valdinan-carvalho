import React from 'react'
import Hero from '../Components/Hero/Hero'
import ServicesComponent from '../Components/ServicesComponent/ServicesComponent'
import AboutCta from '../Components/AboutCta/AboutCta'
import Form from '../Components/Form/Form'
import GoogleReviews from '../Components/GoogleReviews/GoogleReviews'

import { ScrollRestoration } from 'react-router-dom'
import CoverageArea from '../Components/CoverageArea/CoverageArea'

// SEO
import Helmet from 'react-helmet'

const Home = () => {
  return (
    <div>
    {/* SEO */}
    <Helmet>
        <title>Valdinan Carvalho</title>
        <meta name="description" content="Transformando desafios jurídicos complexos em soluções eficazes e personalizadas" />
        <meta name="keywords" content="Advogado, indenização, direito do consumidor" />
        <link rel="canonical" href="https://www.valdinancarvalho.com/home" />
        <link rel="icon" type="image/png" href="/public/favicon.ico" />
      </Helmet>
    {/* Componentes */}
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