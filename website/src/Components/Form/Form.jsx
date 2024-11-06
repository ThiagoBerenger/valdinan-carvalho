import React, { useState } from "react";
import "./Form.modules.css";

// email js
import emailjs from "@emailjs/browser"; 

import { GiBrazilFlag } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocalPhone } from "react-icons/md";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configuração do EmailJS para enviar o formulário
    emailjs.send(
      "service_6pbtkcg",           // Service ID
      "template_wcxq3ok",          // Template ID
      formData,                    // Dados do formulário
      "em1f6A_Z-fRnnIADz"         // User ID
    )
    .then((result) => {
        console.log("Email enviado com sucesso:", result.text);
        alert("Mensagem enviada com sucesso!");

      // limpar os campos após envio
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    }, (error) => {
        console.log("Erro ao enviar:", error.text);
        alert("Ocorreu um erro. Tente novamente.");
    });
  };

  return (
    <div className="form-component">
      <div className="form-container">
        <h2>ENTRE EM CONTATO</h2>
        <h3>Como podemos ajudar?</h3>
        <p>Preencha o formulário abaixo para receber o contato de um especialista:</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Seu email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Seu telefone"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Sua mensagem"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Enviar</button>
        </form>
      </div>
      <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2598.4207717346653!2d-43.183251659817124!3d-22.92362634357582!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fe0648dbeb7%3A0xa65b7223f673d781!2sValdinan%20Carvalho%20Advocacia%20e%20Consultoria%20Juridica!5e0!3m2!1spt-BR!2sbr!4v1729526914936!5m2!1spt-BR!2sbr" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <ul>
          <li><GiBrazilFlag/> Atendimento em todo o Brasil!</li>
          <li><HiOutlineMail/> valdinan.carvalho@gmail.com</li>
          <li><MdLocalPhone/> (21) 99463-4084</li>
        </ul>
        </div>
    </div>
  );
};

export default Form;
