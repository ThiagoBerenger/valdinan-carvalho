import React from 'react'

import { ScrollRestoration } from 'react-router-dom'

import AreasComponent from '../Components/AreasComponent/AreasComponent'
import ServicesComponent from '../Components/ServicesComponent/ServicesComponent'
import Form from '../Components/Form/Form'

import areaImage from '../assets/trabalhista.jpg'

// SEO
import Helmet from 'react-helmet'

const Trabalhista = () => {

    const text = `O Direito Trabalhista regula as relações entre empregados e empregadores, garantindo a observância das normas trabalhistas e a proteção dos direitos dos trabalhadores. Nossa equipe de advogados especializados em Direito Trabalhista atua tanto na defesa dos direitos dos trabalhadores quanto na consultoria e contencioso empresarial, representando nossos clientes em processos trabalhistas, como reclamações trabalhistas, ações de indenização e questões sindicais.

    Compreendemos a importância de um ambiente de trabalho justo e equilibrado para o sucesso dos negócios e a satisfação dos trabalhadores. Por isso, nossa equipe trabalha incansavelmente para garantir o cumprimento das normas trabalhistas e a proteção dos direitos de nossos clientes, seja na defesa dos trabalhadores ou na assessoria jurídica às empresas.

    Além disso, nossos advogados estão sempre atualizados sobre as mudanças na legislação e na jurisprudência trabalhista, o que nos permite desenvolver estratégias eficientes e alinhadas com os mais recentes entendimentos dos tribunais. Nossa abordagem ética e profissional busca assegurar a preservação dos direitos e garantias dos envolvidos nas relações de trabalho.`

  return (
    <div>
      {/* seo */}
      <Helmet>
        <title>Trabalhista | Valdinan Carvalho</title>
        <meta name="description" content="O Direito Trabalhista regula as relações entre empregados e empregadores, garantindo a observância das normas trabalhistas e a proteção dos direitos dos trabalhadores." />
        <meta name="keywords" content="Advogado, indenização, direito trabalhista" />
        <link rel="canonical" href="https://www.valdinancarvalhoadv.com/direito-trabalhista" />
        <link rel="icon" type="image/png" href="/public/favicon.ico" />
      </Helmet>
      {/* componentes */}
      <ScrollRestoration/>
        <AreasComponent title={'Trabalhista'} text={text} areaImage={areaImage}/>
        <ServicesComponent />
        <Form />
    </div>
  )
}

export default Trabalhista