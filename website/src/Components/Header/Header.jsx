import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/logoNomeOuro.png';
import './Header.modules.css';

import { IoMdArrowDropdown } from "react-icons/io";

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
        <Link to='/'><img src={logo} alt="Logo" className="logo" /></Link>
        
        {/* Menu hambúrguer */}
        <button className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </button>
        
        <nav className="nav">
          {/* Menu de navegação */}
          <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/sobre">Sobre</Link></li>

            {/* Dropdown para Área de Atuação */}
            <li className="nav-item" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={dropdownOpen ? "true" : "false"}>
              <a href="#area-de-atuacao"><IoMdArrowDropdown/> Área de Atuação</a>
              {dropdownOpen && (
                <ul className="dropdown">
                  <li className="dropdown-item"><Link to="/direito-civil">Civil</Link></li>
                  <li className="dropdown-item"><Link to="/direito-penal">Penal</Link></li>
                  <li className="dropdown-item"><Link to="/direito-trabalhista">Trabalhista</Link></li>
                  <li className="dropdown-item"><Link to="/direito-empresarial">Empresarial</Link></li>
                  <li className="dropdown-item"><Link to="/direito-da-familia">Família</Link></li>
                  <li className="dropdown-item"><Link to="/direito-tributario">Tributário</Link></li>
                  <li className="dropdown-item"><Link to="/direito-do-consumidor">Consumidor</Link></li>
                  <li className="dropdown-item"><Link to="/direito-previdenciario">Previdenciário</Link></li>
                </ul>
              )}
            </li>
            <li className="nav-item"><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
