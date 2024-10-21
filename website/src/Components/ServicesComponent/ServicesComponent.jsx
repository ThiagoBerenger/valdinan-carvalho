import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './ServicesComponent.modules.css';

// Importando o motion + in view
import { motion, useInView } from 'framer-motion'; 

// ícones
import { 
  PiUserThin,
  PiShieldPlusThin, 
  PiIdentificationCardThin, 
  PiShoppingCartSimpleThin  
} from "react-icons/pi";

// Definindo os variants para o container e os itens
const containerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2, // Atraso antes de iniciar a animação dos filhos
      staggerChildren: 0.15 // Atraso entre cada animação de item
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const ServicesComponent = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

  return (
    <div className='services-container'>
      <h2>NOSSAS ESPECIALIDADES</h2>
      <h3>Área de Atuação</h3>

      {/* Container das boxes */}
      <motion.div 
        className="boxes-container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Link to='/direito-civil'>
          <motion.div className="box" variants={itemVariants}>
            <PiUserThin />
            <h4>Civil</h4>
          </motion.div>
        </Link>

        <Link to='/direito-trabalhista'>
          <motion.div className="box" variants={itemVariants}>
            <PiIdentificationCardThin />
            <h4>Trabalhista</h4>
          </motion.div>
        </Link>

        <Link to='/direito-do-consumidor'>
          <motion.div className="box" variants={itemVariants}>
            <PiShoppingCartSimpleThin />
            <h4>Consumidor</h4>
          </motion.div>
        </Link>

        <Link to='/direito-previdenciario'>
          <motion.div className="box" variants={itemVariants}>
            <PiShieldPlusThin />
            <h4>Previdenciário</h4>
          </motion.div>
        </Link>
      </motion.div>

    </div>
  );
};

export default ServicesComponent;
