import React from 'react'

import { ScrollRestoration } from 'react-router-dom'

import AreasComponent from '../Components/AreasComponent/AreasComponent'
import ServicesComponent from '../Components/ServicesComponent/ServicesComponent'
import Form from '../Components/Form/Form'

const Tributario = () => {

    const text = `O Direito Tributário trata das relações entre o Estado e os contribuintes, estabelecendo normas e princípios para a instituição, fiscalização e arrecadação de tributos. Nossa equipe de advogados especializados em Direito Tributário atua na consultoria e no contencioso, assessorando nossos clientes em questões fiscais, como planejamento tributário, compensação de tributos, defesa em autos de infração e execuções fiscais.

    Entendemos a complexidade do sistema tributário brasileiro e a importância de uma gestão tributária eficiente para o sucesso dos negócios de nossos clientes. Por isso, nosso escritório se dedica a encontrar soluções jurídicas personalizadas e alinhadas com as particularidades de cada cliente, visando a redução da carga tributária e a conformidade com a legislação fiscal.

    Nosso compromisso é prestar um serviço de qualidade, pautado na ética e na transparência, auxiliando nossos clientes na resolução de conflitos tributários e na prevenção de futuros litígios, sempre em busca da segurança jurídica e da preservação dos direitos e interesses dos contribuintes.`


  return (
    <div>
      <ScrollRestoration/>
        <AreasComponent title={'Tributário'} text={text}/>
        <ServicesComponent />
        <Form />
    </div>
  )
}

export default Tributario