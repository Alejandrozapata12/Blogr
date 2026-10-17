import React, { useState } from 'react';
import logoSrc from '../assets/logo.svg';
import '../css/NavBar.css';

function NavBar() {
  const [showToast, setShowToast] = useState(false);

  const handleClick = (e) => {
    e.preventDefault(); // Evita que recargue la página o mueva el scroll
    setShowToast(true);
    
    // Oculta el toast automáticamente después de 3 segundos
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div>
      <nav className="nav-container">
        <span className="logo">
          <img src={logoSrc} alt="Logo-blog" />
        </span>
        <div className="items">
          <a href="#" onClick={handleClick}>Product <span></span></a>
          <a href="#" onClick={handleClick}>Company</a>
          <a href="#" onClick={handleClick}>Connect</a>
        </div>
        <div className="btns-co">
          <button className='btn-login' onClick={handleClick}>Login</button>
          <button className='btn-signUp' onClick={handleClick}>Sign Up</button>
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