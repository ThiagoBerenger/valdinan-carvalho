import React from 'react'

// importando restaurador de scroll
import { ScrollRestoration } from 'react-router-dom'

import AreasComponent from '../Components/AreasComponent/AreasComponent'
import ServicesComponent from '../Components/ServicesComponent/ServicesComponent'
import Form from '../Components/Form/Form'

const Civil = () => {

    const text = `O Direito Civil é uma área abrangente que regula as relações jurídicas entre pessoas físicas e jurídicas, envolvendo questões relacionadas a obrigações, contratos, direitos de família, sucessões, bens e responsabilidades. Nossa equipe de advogados especializados em Direito Civil atua em casos de elaboração e revisão de contratos, cobrança de dívidas, indenizações, partilha de bens, divórcios e guarda de filhos, entre outros. 

    Nosso objetivo é oferecer um atendimento personalizado e eficiente, garantindo os direitos e interesses de nossos clientes. Estamos sempre atualizados quanto às mudanças na legislação e jurisprudência, o que nos permite oferecer soluções jurídicas eficazes e alinhadas com os mais recentes entendimentos dos tribunais.

    Entendemos que cada caso é único e demanda uma abordagem diferenciada. Por isso, priorizamos a comunicação clara e transparente com nossos clientes, compreendendo suas necessidades e oferecendo orientações jurídicas precisas e adequadas a cada situação.`

  return (
    <div>
        <ScrollRestoration/>
        <AreasComponent title='Civil' text={text}/>
        <ServicesComponent/>
        <Form/>
    </div>
  )
}

export default Civil