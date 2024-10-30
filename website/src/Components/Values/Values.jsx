import React from 'react';
import './Values.modules.css';

import { PiHandshake, PiMedal, PiLightbulb, PiUsers, PiHeart, PiGlobe, PiCheckCircle } from 'react-icons/pi';

const Values = () => {
  return (
    <div className='values-container'>
      <h2>Nossos Valores</h2>
      <div className="values-boxes_container">
        <div className="value-box">
          <div className="box-title">
            <PiHandshake size={40} />
            <h3>Ética</h3>
          </div>
          <p>Acreditamos que a base de uma advocacia sólida é a confiança. Atuamos com ética e transparência, garantindo clareza e honestidade em todas as nossas relações com os clientes, parceiros e sociedade.</p>
        </div>

        <div className="value-box">
          <div className="box-title">
            <PiMedal size={40} />
            <h3>Excelência Técnica</h3>
          </div>
          <p>Buscamos a excelência em todos os serviços que prestamos. Nossa equipe está em constante atualização para acompanhar as mudanças legislativas e judiciais, garantindo uma defesa técnica e sempre alinhada com as melhores práticas jurídicas.</p>
        </div>

        <div className="value-box">
          <div className="box-title">
            <PiLightbulb size={40} />
            <h3>Inovação</h3>
          </div>
          <p>Entendemos que cada cliente é único e que cada caso representa um momento importante em sua vida. Valorizamos o ser humano em primeiro lugar, tratando com respeito e empatia as necessidades e expectativas de todos que nos procuram.
          </p>
        </div>

        <div className="value-box">
          <div className="box-title">
            <PiUsers size={40} />
            <h3>Trabalho em Equipe</h3>
          </div>
          <p>Nossa equipe trabalha de forma colaborativa, unindo expertises e conhecimentos para alcançar as melhores soluções jurídicas. Priorizamos a agilidade no atendimento, respeitando a urgência e a importância de cada demanda.</p>
        </div>

        <div className="value-box">
          <div className="box-title">
            <PiHeart size={40} />
            <h3>Empatia</h3>
          </div>
          <p>Defendemos o direito de todos ao acesso à justiça. Atuamos com responsabilidade social, especialmente nas áreas de direito do consumidor e previdenciário, onde muitas vezes o cliente enfrenta desafios de vulnerabilidade. Nosso compromisso é tornar o direito acessível e contribuir para uma sociedade mais justa.</p>
        </div>

        <div className="value-box">
          <div className="box-title">
            <PiGlobe size={40} />
            <h3>Responsabilidade Social</h3>
          </div>
          <p>Observamos rigorosamente todas as normas e regulamentações aplicáveis, com total compromisso com a conformidade. Nosso trabalho é pautado pela responsabilidade legal, protegendo nossos clientes e garantindo segurança jurídica em todas as etapas do processo.</p>
        </div>

        {/* <div className="value-box">
          <PiCheckCircle size={40} />
          <h3>Compliance</h3>
        </div> */}

      </div>
    </div>
  );
}

export default Values;
