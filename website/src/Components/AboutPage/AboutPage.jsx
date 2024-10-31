import React, { useRef } from 'react'
import './AboutPage.modules.css'

import { motion, useInView } from 'framer-motion'

import foto from '../../assets/foto.jpeg'

const AboutPage = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})

  return (
    <div className='about-page_container'>
        <div className="about-page_title">
            <h1>Sobre nós</h1>
            <h2>Transformando desafios jurídicos complexos <br />em soluções eficazes e personalizadas</h2>
        </div>
        
        {/* conteúdo */}
        <motion.div className="about-page_content"
          ref={ref}
          initial={{ x: '-20vw', opacity: 0 }} 
          animate={isInView ? { x: 0, opacity: 1} : { x: '-20vw', opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}>

            <div className='about-text_container'>
                <h3>Conheça nossa história</h3>
                <h4>Valdinan Carvalho Advocacia & Consultoria Juridica</h4>
                
                <p>Valdinan Carvalho Advocacia & Consultoria Jurídica foi idealizado para oferecer serviços jurídicos de excelência, unindo seriedade, competência e compromisso com você cliente. Nosso objetivo é superar expectativas com soluções inovadoras e eficazes, sempre guiados pela ética, transparência e um atendimento personalizado.</p>
                <p>Com sede no Rio de Janeiro desde 2020 e atuação em Niterói, São João de Meriti, São Gonçalo, Itaboraí, Distrito Federal e Norte de Minas Gerais, contamos com a expertise dos advogados Valdinan Soares e Camila Angélico, que se dedicam a compreender as necessidades únicas de cada cliente e entregar resultados sólidos, com empatia e confiança em todas as etapas do processo</p>

            </div>
            
        </motion.div>
    </div>
  )
}

export default AboutPage