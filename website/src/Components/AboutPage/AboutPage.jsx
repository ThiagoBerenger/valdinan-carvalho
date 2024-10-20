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
            <div className="about-img_container">
              <img src={foto} alt="Valdinan Carvalho" />
              <div className="about-img_text">
                <h5>Advogado</h5>
                <h6>OAB: 237.536/RJ</h6>
              </div>
              </div>
            <div className='about-text_container'>
                <h3>Conheça nossa história</h3>
                <h4>Valdinan Carvalho Advocacia & Consultoria Juridica</h4>
                
                <p>Fundado com o objetivo de oferecer serviços jurídicos de excelência, nosso escritório de advocacia alia seriedade, competência, compromisso com prazos, empatia e confiança para atender às necessidades de nossos clientes. Somos guiados pela busca constante por soluções inovadoras e eficazes, valorizando a ética e a transparência em todas as nossas ações. <br />
                Sediado na cidade de Rio de Janeiro desde 2020 e atuando nas cidades de Niterói, São João de Meriti, São Gonçalo, Itaborai, DF e Norte de Minas Gerais, nosso escritório conta com a expertise dos advogados Valdinan Soares e Camila Angélico, que compartilham a visão de um atendimento personalizado, pautado na empatia e na compreensão das particularidades de cada caso.</p>
            </div>
        </motion.div>
    </div>
  )
}

export default AboutPage