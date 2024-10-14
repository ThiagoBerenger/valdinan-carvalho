import React from 'react'
import './Hero.modules.css'

import heroImage from '../../assets/juiz.jpg'

import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='hero-container'>
      <img src={heroImage} alt="Valdinan Carvalho - Advocacia e Consultoria Jurídica" loading='lazy'/>
        <div className="hero-content">
          <h1>Valdinan Carvalho Advocacia & Consultoria Juridica</h1>
          <h2>Transformando desafios jurídicos complexos em soluções eficazes e personalizadas</h2>
          <button><FaWhatsapp /> Entre em contato</button>
        </div>
    </div>
  )
}

export default Hero