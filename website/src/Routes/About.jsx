import React from 'react'
import AboutPage from '../Components/AboutPage/AboutPage'
import Values from '../Components/Values/Values'
import Form from '../Components/Form/Form'
import Team from '../Components/Team/Team'

// importando restaurador de scroll
import { ScrollRestoration } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <ScrollRestoration/>
      <AboutPage />
      <Values />
      <Team/>
      <Form />
    </div>
  )
}

export default About