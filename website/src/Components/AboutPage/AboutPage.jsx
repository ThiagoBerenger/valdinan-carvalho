import React from 'react'
import './AboutPage.modules.css'

import foto from '../../assets/foto.jpeg'

const AboutPage = () => {
  return (
    <div className='about-page_container'>
        <div className="about-page_title">
            <h1>Sobre nós</h1>
            <h2>Transformando desafios jurídicos complexos <br />em soluções eficazes e personalizadas</h2>
        </div>
        
        {/* conteúdo */}
        <div className="about-page_content">
            <img src={foto} alt="Valdinan Carvalho" />
            <div className='about-text_container'>
                <h3>Conheça nossa história</h3>
                <h4>Valdinan Carvalho Advocacia & Consultoria Juridica</h4>
                
                <p>Fundado com o objetivo de oferecer serviços jurídicos de excelência, nosso escritório de advocacia alia seriedade, competência, compromisso com prazos, empatia e confiança para atender às necessidades de nossos clientes. Somos guiados pela busca constante por soluções inovadoras e eficazes, valorizando a ética e a transparência em todas as nossas ações. <br />
                Sediado na cidade de Rio de Janeiro desde 2020 e atuando nas cidades de Niterói, São João de Meriti, São Gonçalo, Itaborai, DF e Norte de Minas Gerais, nosso escritório conta com a expertise dos advogados Valdinan Soares e Camila Angélico, que compartilham a visão de um atendimento personalizado, pautado na empatia e na compreensão das particularidades de cada caso.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutPage