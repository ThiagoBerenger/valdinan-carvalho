import React from 'react'
import './CompliancePage.modules.css'

// images
import complianceImg from '../../assets/compliance.png'

const CompliancePage = () => {
  return (
    <div className='compliance-container'>
        <div className="compliance-title">
            <h2>Segurança e Transparência</h2>
            <h1>Compliance e LGPD</h1>
        </div>
        <div className="compliance-content_container">

            <img src={complianceImg} alt="Compliance e LGPD" loading='lazy' />
            
            <div className="compliance-content">
                <h2>O que é a Política de Compliance?</h2>
                <p>A palavra compliance traduzida do inglês significa “conformidade”. A Política de Compliance se refere a um conjunto de regras claras, garantindo o cumprimento destas medidas a fim de alcançar aderência às leis e aos padrões éticos.</p>
                <p>Resumidamente, definimos que um negócio que segue esse tipo de política deve ser neutro e transparente em todas as relações existentes.</p>
                <p>Com uma sociedade que visa empresas cada vez mais éticas, aplicar a Política de Compliance é essencial para garantir a confiança e a longevidade dos negócios</p>
            </div>
        </div>
        <div className="lgpd-content_container">
            <h2>Lei Geral de Proteção de Dados (LGPD)</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis, impedit expedita dignissimos omnis necessitatibus accusantium totam labore sint asperiores earum quia alias ullam ipsum laborum aut, dolore quos eos.</p>
        </div>
    </div>
  )
}

export default CompliancePage