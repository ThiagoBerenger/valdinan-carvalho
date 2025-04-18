import React from 'react'

import { ScrollRestoration } from 'react-router-dom'

import AreasComponent from '../Components/AreasComponent/AreasComponent'
import ServicesComponent from '../Components/ServicesComponent/ServicesComponent'
import Form from '../Components/Form/Form'

import areaImage from '../assets/previdenciario.jpg'

// SEO
import Helmet from 'react-helmet'

const Previdenciario = () => {

    const text = `O Direito Previdenciário trata das normas e princípios que regulam a Previdência Social, garantindo a proteção aos segurados e seus dependentes em situações como aposentadoria, auxílio-doença, pensão por morte, entre outros. Nossa equipe de advogados especializados em Direito Previdenciário atua na orientação, planejamento e acompanhamento de processos previdenciários, buscando a garantia dos direitos e benefícios aos quais nossos clientes têm direito.

Compreendemos a importância da segurança e do bem-estar no momento da aposentadoria e nos casos de necessidade de benefícios previdenciários. Por isso, nossa equipe se dedica a oferecer um atendimento personalizado e eficiente, orientando nossos clientes em todas as etapas do processo previdenciário e buscando as melhores soluções jurídicas para cada caso.

Além disso, nossos advogados estão sempre atualizados sobre as mudanças na legislação e na jurisprudência previdenciária, o que nos permite desenvolver estratégias eficientes e alinhadas com os mais recentes entendimentos dos tribunais. Nossa abordagem ética e profissional busca assegurar a preservação dos direitos e garantias dos envolvidos nas relações previdenciárias.`

  return (
    <div>
      {/* seo */}
      <Helmet>
        <title>Previdenciário | Valdinan Carvalho</title>
        <meta name="description" content="O Direito Previdenciário trata das normas e princípios que regulam a Previdência Social, garantindo a proteção aos segurados e seus dependentes em situações como aposentadoria, auxílio-doença, pensão por morte, entre outros." />
        <meta name="keywords" content="Advogado, indenização, direito trabalhista, direito previdenciário, aposentadoria" />
        <link rel="canonical" href="https://www.valdinancarvalhoadv.com/direito-previdenciario" />
        <link rel="icon" type="image/png" href="/public/favicon.ico" />
      </Helmet>
      {/* componentes */}
      <ScrollRestoration/>
         <AreasComponent title={'Previdenciário'} text={text} areaImage={areaImage}/>
        <ServicesComponent />
        <Form />
    </div>
  )
}

export default Previdenciario