import React from 'react'
import { Link } from 'react-router-dom'

import './AboutCta.modules.css'

const AboutCta = () => {
  return (
    <div className='about-cta_container'>
        <h2>CONHEÇA A NOSSA HISTÓRIA</h2>
        <h3>Valdinan Carvalho Advocacia & Consultoria Jurídica</h3>
        <p>Idealizado com o objetivo de oferecer serviços jurídicos de excelência, nosso escritório de advocacia alia seriedade, competência, compromisso com prazos, empatia e confiança para atender às necessidades...</p>
        <Link to='/sobre'>Saiba mais!</Link>
    </div>
  )
}

export default AboutCta