import React from "react";
import "./Footer.modules.css"; // Certifique-se de criar esse arquivo para o CSS

import { Link } from 'react-router-dom'

import { FaMapMarkerAlt, FaPhoneAlt   } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Páginas principais */}
        <div className="footer-section">
          <h3>Páginas</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
              </li>
            <li>
              <Link to="/sobre">Sobre</Link>
              </li>
            <li>
              <Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        {/* Informações de Contato */}
        <div className="footer-section">
          <h3>Informações de Contato</h3>
          <ul>
            <li><FaMapMarkerAlt /> Rua Santo Amaro 184/307, Bairro Gloria Rio de Janeiro, Rio de Janeiro, 22211-230.</li>
            <li><MdEmail/> <a href="mailto:valdinan.carvalho@gmail.com">valdinan.carvalho@gmail.com</a></li>
            <li><FaPhoneAlt  /> <a href="tel:+5521994634084">(21) 99463-4084</a></li>
          </ul>
        </div>

        {/* horários */}
        <div className="footer-section">
          <h3>Informações de Contato</h3>
          <ul>
            <li>Segunda-feira 09:00 - 19:00</li>
            <li>Terça-feira 09:00 - 19:00</li>
            <li>Quarta-feira 09:00 - 19:00</li>
            <li>Quinta-feira 09:00 - 19:00</li>
            <li>Sexta-feira 09:00 - 19:00</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 Valdinan Carvalho Advogado. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
