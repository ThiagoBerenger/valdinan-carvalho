import React from 'react'

import AreasComponent from '../Components/AreasComponent/AreasComponent'
import ServicesComponent from '../Components/ServicesComponent/ServicesComponent'
import Form from '../Components/Form/Form'

const Consumidor = () => {

    const text = `O Direito do Consumidor visa proteger os direitos e interesses dos consumidores, garantindo a observância das normas de proteção e defesa do consumidor nas relações de consumo. Nossa equipe de advogados especializados em Direito do Consumidor atua na defesa dos direitos dos consumidores e na assessoria jurídica a fornecedores, representando nossos clientes em processos relacionados a práticas comerciais abusivas, responsabilidade civil, vícios e defeitos em produtos e serviços, entre outros.

    Compreendemos a importância de relações de consumo justas e equilibradas para a satisfação dos consumidores e o sucesso dos fornecedores. Por isso, nossa equipe trabalha incansavelmente para garantir o cumprimento das normas consumeristas e a proteção dos direitos de nossos clientes, seja na defesa dos consumidores ou na assessoria jurídica aos fornecedores.

    Além disso, nossos advogados estão sempre atualizados sobre as mudanças na legislação e na jurisprudência do Direito do Consumidor, o que nos permite desenvolver estratégias eficientes e alinhadas com os mais recentes entendimentos dos tribunais. Nossa abordagem ética e profissional busca assegurar a preservação dos direitos e garantias dos envolvidos nas relações de consumo.`

  return (
    <div>
        <AreasComponent title={'Consumidor'} text={text}/>
        <ServicesComponent />
        <Form />
    </div>
  )
}

export default Consumidor