import React from 'react'
import './AreasComponent.modules.css'

import areaImage from '../../assets/backgroundPilares.jpg'
import escritorio from '../../assets/escritorio.jpg'


const AreasComponent = ({title, text}) => {

    const TextWithLineBreaks = ({ text }) => {
        return (
          <div>
            {text.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
        );
      };

  return (
    <div className='areas-container'>
        <div className="area-title">
            <div className="title">
                <h1>{title}</h1>
                <h2>Transformando desafios jurídicos complexos em soluções eficazes e personalizadas</h2>
            </div>
            <img src={areaImage} alt={title} />
        </div>

        <div className="area-content">
            <div className='area-text'>
                <h3>Somos Especialistas</h3>
                <h4>{title}</h4>
                <TextWithLineBreaks text={text}/>
            </div>
            <img src={escritorio} alt={title}></img>
        </div>
    </div>
  )
}

export default AreasComponent