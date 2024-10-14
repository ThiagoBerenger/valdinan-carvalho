import React, { useState } from 'react';
import logo from '../../assets/logoOuro.png'; // Certifique-se de que o caminho está correto
import './Header.modules.css'; // Importando os estilos

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="#home">Home</a></li>
            <li className="nav-item"><a href="#about">Sobre</a></li>
            <li 
              className="nav-item" 
              onMouseEnter={toggleDropdown} 
              onMouseLeave={toggleDropdown}
            >
              <a href="#area-de-atuacao">Área de Atuação</a>
              {dropdownOpen && (
                <ul className="dropdown">
                  <li className="dropdown-item"><a href="#civil">Civil</a></li>
                  <li className="dropdown-item"><a href="#penal">Penal</a></li>
                  <li className="dropdown-item"><a href="#trabalhista">Trabalhista</a></li>
                  <li className="dropdown-item"><a href="#empresarial">Empresarial</a></li>
                  <li className="dropdown-item"><a href="#familia">Família</a></li>
                  <li className="dropdown-item"><a href="#tributario">Tributário</a></li>
                  <li className="dropdown-item"><a href="#consumidor">Consumidor</a></li>
                  <li className="dropdown-item"><a href="#previdenciario">Previdenciário</a></li>
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
