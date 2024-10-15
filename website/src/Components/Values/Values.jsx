import React from 'react';
import './Values.modules.css';

import { PiHandshake, PiMedal, PiLightbulb, PiUsers, PiHeart, PiGlobe, PiCheckCircle } from 'react-icons/pi';

const Values = () => {
  return (
    <div className='values-container'>
      <h2>Nossos Valores</h2>
      <div className="values-boxes_container">
        <div className="value-box">
          <PiHandshake size={40} />
          <h3>Ética</h3>
        </div>

        <div className="value-box">
          <PiMedal size={40} />
          <h3>Excelência Técnica</h3>
        </div>

        <div className="value-box">
          <PiLightbulb size={40} />
          <h3>Inovação</h3>
        </div>

        <div className="value-box">
          <PiUsers size={40} />
          <h3>Trabalho em Equipe</h3>
        </div>

        <div className="value-box">
          <PiHeart size={40} />
          <h3>Empatia</h3>
        </div>

        <div className="value-box">
          <PiGlobe size={40} />
          <h3>Responsabilidade Social</h3>
        </div>

        <div className="value-box">
          <PiCheckCircle size={40} />
          <h3>Compliance</h3>
        </div>

        <div className="value-box">
            <p>Esses princípios norteiam nosso trabalho diário.</p>
        </div>
      </div>
    </div>
  );
}

export default Values;
