import React from 'react'
import AboutPage from '../Components/AboutPage/AboutPage'
import Values from '../Components/Values/Values'
import Form from '../Components/Form/Form'
import Team from '../Components/Team/Team'

// importando restaurador de scroll
import { ScrollRestoration } from 'react-router-dom'

// SEO
import Helmet from 'react-helmet'

const About = () => {
  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>Sobre Nós | Valdinan Carvalho</title>
        <meta name="description" content="Valdinan Carvalho Advocacia & Consultoria Jurídica foi idealizado para oferecer serviços jurídicos de excelência." />
        <meta name="keywords" content="Advogado, indenização, direito do consumidor" />
        <link rel="canonical" href="https://www.valdinancarvalhoadv.com/sobre" />
        <link rel="icon" type="image/png" href="/public/favicon.ico" />
      </Helmet>
      {/* componentes */}
      <ScrollRestoration/>
      <AboutPage />
      <Values />
      <Team/>
      <Form />
    </div>
  )
}

export default About