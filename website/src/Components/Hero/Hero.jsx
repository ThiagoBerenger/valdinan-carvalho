import React from 'react'
import './Hero.modules.css'

// animação scroll
import { motion } from "framer-motion"

import heroImage from '../../assets/juiz.png'

import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='hero-container'>
      <img src={heroImage} alt="Valdinan Carvalho - Advocacia e Consultoria Jurídica" />

        <motion.div className="hero-content"
           initial={{ x: '-20vw', opacity: 0 }} 
           animate={{ x: 0, opacity: 1}}
           transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <h1>Valdinan Carvalho Advocacia & Consultoria Juridica</h1>
          <h2>Transformando desafios jurídicos complexos em soluções eficazes e personalizadas</h2>
          <a href='https://api.whatsapp.com/send?phone=5521994634084&text=Ol%C3%A1!%20Preciso%20de%20um%20advogado.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%2C%20por%20favor%3F' target='blank'><FaWhatsapp /> Entre em contato</a>
        </motion.div>
        
    </div>
  )
}

export default Hero