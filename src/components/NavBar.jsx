import { useState } from 'react';
import logoSrc from '../assets/logo.svg';
import hamburgerIcon from '../assets/icon-hamburger.svg';
import closeIcon from '../assets/icon-close.svg';
import '../css/NavBar.css';

function NavBar() {
  const [showToast, setShowToast] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar el menú en móviles

  const handleClick = (e) => {
    e.preventDefault();
    setShowToast(true);
    setIsOpen(false); // Cierra el menú al hacer clic en una opción en móvil

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="nav-container">
        <span className="logo">
          <img src={logoSrc} alt="Logo-blog" />
        </span>

        {/* Botón hamburguesa para móviles */}
        <button
          type="button"
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          <img src={isOpen ? closeIcon : hamburgerIcon} alt="" />
        </button>

        {/* Contenedor de enlaces y botones adaptado */}
        <div className={`nav-menu-wrapper ${isOpen ? 'active' : ''}`}>
          <div className="items">
            <a href="#" onClick={handleClick}>Product</a>
            <a href="#" onClick={handleClick}>Company</a>
            <a href="#" onClick={handleClick}>Connect</a>
          </div>
          <div className="btns-co">
            <button className='btn-login' onClick={handleClick}>Login</button>
            <button className='btn-signUp' onClick={handleClick}>Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Notificación tipo Toast */}
      {showToast && (
        <div className="toast-construction">
          Under construction
        </div>
      )}
    </div>
  );
}

export default NavBar;
