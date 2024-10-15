import React from "react";
import "./Footer.modules.css"; // Certifique-se de criar esse arquivo para o CSS

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
            <li><a href="/home">Home</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/contato">Contato</a></li>
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
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 Seu Escritório de Advocacia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
