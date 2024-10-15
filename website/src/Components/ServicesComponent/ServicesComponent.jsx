import React from 'react'
import './ServicesComponent.modules.css'

// icones
import { PiGavelThin, PiBuildingApartmentThin, PiCurrencyCircleDollarThin, PiUserThin,PiHouseLineThin, PiShieldPlusThin, PiIdentificationCardThin, PiShoppingCartSimpleThin  } from "react-icons/pi";

const ServicesComponent = () => {
  return (
    <div className='services-container'>
        <h2>NOSSAS ESPECIALIDADES</h2>
        <h3>Área de Atuação</h3>

    <div className="boxes-container">
        <div className="box">
            <PiUserThin />
            <h4>Civil</h4>
        </div>
        <div className="box">
        <PiGavelThin /> 
            <h4>Penal</h4>
        </div>
        <div className="box">
        <PiIdentificationCardThin /> 
            <h4>Trabalhista</h4>
        </div>
        <div className="box">
        <PiBuildingApartmentThin /> 
            <h4>Empresarial</h4>
        </div>
        <div className="box">
        <PiHouseLineThin /> 
            <h4>Família</h4>
        </div>
        <div className="box">
        <PiCurrencyCircleDollarThin /> 
            <h4>Tributário</h4>
        </div>
        <div className="box">
        <PiShoppingCartSimpleThin /> 
            <h4>Consumidor</h4>
        </div>
        <div className="box">
        <PiShieldPlusThin  /> 
            <h4>Previdenciário</h4>
        </div>
    </div>

    </div>
  )
}

export default ServicesComponent