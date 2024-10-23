import React, { useState, useRef } from 'react';
import './CompliancePage.modules.css';

// images
import complianceImg from '../../assets/compliance.png';

// icones
import { FaShieldAlt, FaLock, FaClipboardCheck, FaUsers, FaRegDotCircle } from 'react-icons/fa';


const CompliancePage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Fecha se já estiver aberto
    } else {
      setActiveIndex(index); // Abre o item clicado
    }
  };

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
          <p>Com uma sociedade que visa empresas cada vez mais éticas, aplicar a Política de Compliance é essencial para garantir a confiança e a longevidade dos negócios.</p>
        </div>
      </div>
      <div className="lgpd-content_container">
        <h2>Lei Geral de Proteção de Dados (LGPD)</h2>
        <p>A LGPD (Lei Geral de Proteção de Dados Pessoais) é um marco regulatório que estabelece normas para a coleta, tratamento e proteção de dados pessoais, garantindo os direitos de privacidade e liberdade dos titulares. Empresas e instituições, tanto do setor privado quanto público e do terceiro setor, devem seguir essas regras rigorosamente para assegurar a integridade e segurança dos dados.</p>

        <h3>Principais Regras e Obrigações das Organizações</h3>

        <div className="accordion">
          {[ 
            {
              icon: <FaShieldAlt />,
              title: 'Medidas de Segurança',
              content: 'As organizações devem adotar medidas técnicas e administrativas para prevenir acessos não autorizados, vazamentos e perdas, protegendo os dados dos titulares.',
            },
            {
              icon: <FaLock />,
              title: 'Proibição de Discriminação',
              content: 'A LGPD proíbe qualquer discriminação contra os titulares que exercem seus direitos, garantindo um tratamento justo e igualitário.',
            },
            {
              icon: <FaClipboardCheck />,
              title: 'Princípios da LGPD',
              content: `- Finalidade: Os dados devem ser tratados para objetivos específicos e legítimos.<br />
                        - Necessidade: Apenas dados estritamente necessários podem ser coletados e processados.<br />
                        - Transparência: Informações claras e acessíveis devem ser fornecidas ao titular sobre o uso de seus dados.<br />
                        - Segurança: Medidas eficazes devem ser implementadas para proteger os dados contra riscos e violações.<br />
                        - Consentimento: A coleta de dados deve ser precedida de autorização explícita do titular, salvo exceções legais.`
            },
            {
              icon: <FaUsers />,
              title: 'Direitos dos Titulares de Dados Pessoais',
              content: `- Revogação de Consentimento: O titular pode revogar a qualquer momento o consentimento dado para o uso de seus dados.<br />
                        - Acesso às Informações: Os titulares têm o direito de solicitar e receber informações completas sobre seus dados e o tratamento realizado pela organização.`
            },
            {
              icon: <FaRegDotCircle  />,
              title: 'Abrangência Transversal',
              content: 'A LGPD se aplica a diversos setores da economia, incluindo empresas privadas, órgãos públicos e entidades do terceiro setor, promovendo transparência e responsabilidade no uso dos dados.',
            },
          ].map((item, index) => (
            <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
              <h3>{item.icon} {item.title}</h3>
              <div
                className="accordion-content"
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  height: activeIndex === index ? contentRefs.current[index]?.scrollHeight : '0px',
                }}
                dangerouslySetInnerHTML={{ __html: item.content }} // Renderiza HTML diretamente
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompliancePage;
