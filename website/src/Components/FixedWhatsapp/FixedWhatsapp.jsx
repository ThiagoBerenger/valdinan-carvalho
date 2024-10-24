import React from 'react'
import './FixedWhatsapp.modules.css'

import { ImWhatsapp } from "react-icons/im";

const OpenWhatsapp = () => {
    const whatsappLink = 'https://api.whatsapp.com/send?phone=5521994634084&text=Ol%C3%A1!%20Preciso%20de%20um%20advogado.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%2C%20por%20favor%3F';
    
    window.open(whatsappLink, '_blank');
}

const FixedWhatsapp = () => {
  return (
    <div className='fixed-whats'>
        <ImWhatsapp onClick={OpenWhatsapp}/>
    </div>
  )
}

export default FixedWhatsapp