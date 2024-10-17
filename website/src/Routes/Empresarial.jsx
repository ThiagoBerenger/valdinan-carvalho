import React from 'react'

import { ScrollRestoration } from 'react-router-dom'

import AreasComponent from '../Components/AreasComponent/AreasComponent'
import ServicesComponent from '../Components/ServicesComponent/ServicesComponent'
import Form from '../Components/Form/Form'

const Empresarial = () => {

    const text = `O Direito Empresarial engloba as normas e princípios que regulam a atividade empresarial, abordando questões como constituição e dissolução de sociedades, contratos empresariais, falências, recuperação de empresas e propriedade intelectual. Nossa equipe de advogados especializados em Direito Empresarial oferece consultoria jurídica e representação contenciosa para empresas de diversos setores, auxiliando na resolução de conflitos e na prevenção de riscos jurídicos.

    Entendemos que o ambiente empresarial é dinâmico e desafiador, exigindo soluções jurídicas eficientes e adaptadas às necessidades de cada negócio. Por isso, nossa equipe trabalha em parceria com nossos clientes, oferecendo orientações jurídicas claras e estratégicas que contribuam para o crescimento e a sustentabilidade de suas atividades empresariais.

    Além disso, nossos advogados estão sempre atualizados sobre as mudanças na legislação e na jurisprudência empresarial, o que nos permite desenvolver soluções inovadoras e alinhadas com os mais recentes entendimentos dos tribunais. Nossa abordagem ética e profissional busca assegurar a preservação dos direitos e interesses dos envolvidos nas relações empresariais.`

  return (
    <div>
      <ScrollRestoration/>
        <AreasComponent title={'Empresarial'} text={text}/>
        <ServicesComponent />
        <Form />
    </div>
  )
}

export default Empresarial