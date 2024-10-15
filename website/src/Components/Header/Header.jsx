import React, { useState } from 'react';

import Link from 'react-router-dom'

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
            <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item"><a href="/sobre">Sobre</a></li>

            {/* Dropdown para Área de Atuação */}
            <li className="nav-item" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={dropdownOpen ? "true" : "false"}>
              <a href="#area-de-atuacao"><IoMdArrowDropdown/> Área de Atuação</a>
              {dropdownOpen && (
                <ul className="dropdown">
                  <li className="dropdown-item"><a href="/civil">Civil</a></li>
                  <li className="dropdown-item"><a href="/penal">Penal</a></li>
                  <li className="dropdown-item"><a href="/trabalhista">Trabalhista</a></li>
                  <li className="dropdown-item"><a href="/empresarial">Empresarial</a></li>
                  <li className="dropdown-item"><a href="/familia">Família</a></li>
                  <li className="dropdown-item"><a href="/tributario">Tributário</a></li>
                  <li className="dropdown-item"><a href="/consumidor">Consumidor</a></li>
                  <li className="dropdown-item"><a href="/previdenciario">Previdenciário</a></li>
                </ul>
              )}
            </li>
            <li className="nav-item"><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
