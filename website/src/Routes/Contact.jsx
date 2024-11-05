import React from 'react'
import Form from '../Components/Form/Form'

import { ScrollRestoration } from 'react-router-dom'

// SEO
import Helmet from 'react-helmet'

const Contact = () => {
  return (
    <div>
      {/* seo */}
      <Helmet>
        <title>Contato | Valdinan Carvalho</title>
        <meta name="description" content="Transformando desafios jurídicos complexos em soluções eficazes e personalizadas" />
        <meta name="keywords" content="Advogado, indenização, direito trabalhista, contato" />
        <link rel="canonical" href="https://www.valdinancarvalho.com/contato" />
        <link rel="icon" type="image/png" href="/public/favicon.ico" />
      </Helmet>
      <ScrollRestoration/>
      <Form/>
    </div>
  )
}

export default Contact