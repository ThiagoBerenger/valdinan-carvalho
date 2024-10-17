import React from 'react'

import AreasComponent from '../Components/AreasComponent/AreasComponent'
import ServicesComponent from '../Components/ServicesComponent/ServicesComponent'
import Form from '../Components/Form/Form'

const Familia = () => {

const text = `O Direito de Família aborda questões relacionadas a casamento, união estável, divórcio, guarda de filhos, pensão alimentícia, partilha de bens e inventários. Nossos advogados atuam com sensibilidade e discrição para auxiliar nossos clientes nos momentos de transformação familiar, buscando soluções justas e equilibradas para todas as partes envolvidas.

Sabemos que questões familiares e sucessórias podem ser emocionalmente desgastantes. Por isso, nossa equipe se dedica a oferecer um atendimento acolhedor e compreensivo, orientando nossos clientes em todas as etapas do processo, desde a elaboração de pactos antenupciais e testamentos até a resolução de conflitos em sede judicial ou extrajudicial.

Além disso, estamos em constante atualização acerca das mudanças na legislação e na jurisprudência, o que nos permite encontrar soluções jurídicas eficientes e adequadas às necessidades de cada cliente, sempre pautadas no respeito aos direitos e interesses dos envolvidos.`

  return (
    <div>
        <AreasComponent title={'Família'} text={text}/>
        <ServicesComponent />
        <Form />
    </div>
  )
}

export default Familia