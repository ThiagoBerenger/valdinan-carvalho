import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/logoNomeOuro.png';
import './Header.modules.css';

import { IoMdArrowDropdown } from "react-icons/io";

import { FaWhatsapp, FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);  

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Alterna a visibilidade do dropdown
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna a visibilidade do menu hambúrguer
  };

  return (
    <header className="header">
      <div className="container">
        <Link to='/'><img src={logo} alt="Logo Valdinan Carvalho - Advocacia e Consultoria Jurídica" className="logo"/></Link>
        
        {/* Menu hambúrguer */}
        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </button>
        
        <nav className="nav">
          {/* Menu de navegação */}
          <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
            <li className="nav-item"><Link to="/" onClick={() => {setMenuOpen(false)}}>Home</Link></li>
            <li className="nav-item"><Link to="/sobre" onClick={() => {setMenuOpen(false)}}>Sobre</Link></li>
            <li className="nav-item"><Link to="/compliance-e-lgpd" onClick={() => {setMenuOpen(false)}}>Compliance e LGPD</Link></li>

            {/* Dropdown para Área de Atuação */}
            <li className="nav-item" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={dropdownOpen ? "true" : "false"}>
              <a><IoMdArrowDropdown/> Área de Atuação</a>
              {dropdownOpen && (
                <ul className="dropdown">
                  <li className="dropdown-item"><Link to="/direito-civil" onClick={() => {setMenuOpen(false)}}>Civil</Link></li>
                  <li className="dropdown-item"><Link to="/direito-trabalhista" onClick={() => {setMenuOpen(false)}}>Trabalhista</Link></li>              
                  <li className="dropdown-item"><Link to="/direito-do-consumidor" onClick={() => {setMenuOpen(false)}}>Consumidor</Link></li>
                  <li className="dropdown-item"><Link to="/direito-previdenciario" onClick={() => {setMenuOpen(false)}}>Previdenciário</Link></li>
                </ul>
              )}
            </li>
            <li className="nav-item"><Link to="/contato" onClick={() => {setMenuOpen(false)}}>Contato</Link></li>

            <div className="social-responsive">
              <a href='https://api.whatsapp.com/send/?phone=5521994634084&text&type=phone_number&app_absent=0' target='blank'><FaWhatsapp/></a>
              <a href='https://www.facebook.com/people/Valdinan-Carvalho-Advocacia-e-Consultoria-Juridica/61555735794558/?locale=pt_BR' target='blank'><FaFacebookSquare/></a>
              <a href='https://www.instagram.com/valdinan_carvalho/' target='blank'><FaInstagram/></a>
              <a href='https://www.linkedin.com/in/valdinan-carvalhoadv/?originalSubdomain=br' target='blank'><FaLinkedin/></a>
              <a href='https://www.youtube.com/@valdinancarvalho9434' target='blank'><FaYoutube/></a>
            </div>
          </ul>
        </nav>
        <div className="social-container">
              <a href='https://api.whatsapp.com/send/?phone=5521994634084&text&type=phone_number&app_absent=0' target='blank'><FaWhatsapp/></a>
              <a href='https://www.facebook.com/people/Valdinan-Carvalho-Advocacia-e-Consultoria-Juridica/61555735794558/?locale=pt_BR' target='blank'><FaFacebookSquare/></a>
              <a href='https://www.instagram.com/valdinan_carvalho/' target='blank'><FaInstagram/></a>
              <a href='https://www.linkedin.com/in/valdinan-carvalhoadv/?originalSubdomain=br' target='blank'><FaLinkedin/></a>
              <a href='https://www.youtube.com/@valdinancarvalho9434' target='blank'><FaYoutube/></a>
            </div>
      </div>
    </header>
  );
};

export default Header;
