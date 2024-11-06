import React from 'react'
import CompliancePage from '../Components/CompliancePage/CompliancePage'
import Form from '../Components/Form/Form'
import ServicesComponent from '../Components/ServicesComponent/ServicesComponent'

import { ScrollRestoration } from 'react-router-dom'

// SEO
import Helmet from 'react-helmet'

const Compliance = () => {
  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>Compliance e LGPD | Valdinan Carvalho </title>
        <meta name="description" content="Com uma sociedade que visa empresas cada vez mais éticas, aplicar a Política de Compliance é essencial para garantir a confiança e a longevidade dos negócios." />
        <meta name="keywords" content="Advogado, indenização, direito do consumidor, compliance, lgpd, lei geral de proteção de dados" />
        <link rel="canonical" href="https://www.valdinancarvalhoadv.com/compliance-e-lgpd" />
        <link rel="icon" type="image/png" href="/public/favicon.ico" />
      </Helmet>
        <ScrollRestoration/>
        <CompliancePage />
        <ServicesComponent />
        <Form/>
    </div>
  )
}

export default Compliance