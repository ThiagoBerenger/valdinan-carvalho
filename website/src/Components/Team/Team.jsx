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
                
                <p>Advogado com OAB ativa, Pós-Graduado em Direito Digital, Previdenciário e Trabalhista, com ampla experiência em contencioso de massa nas áreas Civil, Trabalhista e Previdenciária. Atua de forma estratégica na condução de litígios e consultoria jurídica, garantindo uma abordagem eficiente e orientada para resultados.</p>
                <p>Diferencia-se por suas habilidades interpessoais bem desenvolvidas, que permitem atendimento próximo e eficaz, assegurando a satisfação e confiança dos clientes em cada etapa do processo.</p>
                <p>Valdinan é membro da Comissão Especial de Direito Bancário da OAB-SP e integra o Comitê de Jovens Arbitralistas (CJA/CBMA), destacando-se também por sua atuação em meios alternativos de solução de conflitos e pela constante busca de atualização e aprimoramento profissional.</p>

            </div>
            
        </motion.div>
    </div>
  )
}

export default Team