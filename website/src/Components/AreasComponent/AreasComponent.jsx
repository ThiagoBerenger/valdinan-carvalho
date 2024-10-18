import React, { useRef } from 'react'
import './AreasComponent.modules.css'

import areaImage from '../../assets/backgroundPilares.jpg'
import escritorio from '../../assets/escritorio.jpg'

// animação
import { motion, useInView } from 'framer-motion'

const AreasComponent = ({title, text}) => {

  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})

    const TextWithLineBreaks = ({ text }) => {
        return (
          <motion.div
          ref={ref}
          initial={{ x: '-20vw', opacity: 0 }} 
          animate={isInView ? { x: 0, opacity: 1} : { x: '-20vw', opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {text.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </motion.div>
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