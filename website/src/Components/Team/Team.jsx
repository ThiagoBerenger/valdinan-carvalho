import React, { useRef } from 'react'
import './Team.modules.css'

import { motion, useInView } from 'framer-motion'

import foto from '../../assets/foto.jpeg'

const Team = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

  return (
    <div>
        <motion.div className="team-page_content"
          ref={ref}
          initial={{ x: '-20vw', opacity: 0 }} 
          animate={isInView ? { x: 0, opacity: 1} : { x: '-20vw', opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}>

            <div className="team-img_container">
              <img src={foto} alt="Valdinan Carvalho" />
              <div className="team-img_text">
                <h5>Advogado</h5>
                <h6>OAB: 237.536/RJ</h6>
              </div>
              </div>

            <div className='team-text_container'>
                <h3>Sobre mim</h3>
                <h4>Valdinan Soares</h4>
                
                <p>Advogado, Pós-Graduado em Direito Digital, com OAB ativa, com conhecimentos em contencioso de massa nas áreas de direito Civil,Trabalhista,Tributário,Consumidor com experiência prática em litígios e consultoria jurídica.</p>
                <p>Com habilidades interpessoais bem desenvolvidas, o que me permite lidar efetivamente com clientes e colaborar de forma produtiva com uma equipe.</p>
                <p>Membro do Núcleo de Estudos em Arbitragem da Faculdade Presbiteriana Mackenzie Rio (NEAMACK) e do Comitê de Jovens Arbitralistas (CJA/CBMA).</p>
            </div>
            
        </motion.div>
    </div>
  )
}

export default Team