import React from 'react'


import AreasComponent from '../Components/AreasComponent/AreasComponent'
import ServicesComponent from '../Components/ServicesComponent/ServicesComponent'
import Form from '../Components/Form/Form'

const Penal = () => {

    const text = `O Direito Penal é a área do Direito responsável pela aplicação das normas penais, visando a proteção da sociedade e a punição de condutas consideradas criminosas. Nossa equipe de advogados especializados em Direito Penal atua tanto na defesa quanto na acusação, representando nossos clientes em processos criminais relacionados a crimes contra a pessoa, contra o patrimônio, contra a administração pública, entre outros.

    Entendemos que o envolvimento em um processo criminal pode ser uma experiência angustiante e desafiadora. Por isso, oferecemos um atendimento personalizado e dedicado, buscando esclarecer todas as dúvidas e garantir que nossos clientes estejam devidamente informados e amparados durante todo o processo.

    Nossa equipe está sempre atualizada sobre as mudanças na legislação e na jurisprudência penal, o que nos permite desenvolver estratégias de defesa e acusação eficientes e alinhadas com os mais recentes entendimentos dos tribunais. Além disso, nossa abordagem ética e profissional garante a preservação dos direitos e garantias fundamentais de nossos clientes em todas as etapas do processo penal.`

  return (
    <div>
        <AreasComponent title={'Penal'} text={text}/>
        <ServicesComponent />
        <Form />
    </div>
  )
}

export default Penal