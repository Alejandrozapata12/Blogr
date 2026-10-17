import React from 'react';
import NavBar from './NavBar';
import Complement from './Complement';
import '../css/Header.css';


function Header() {
  return (
    <div className='header-container'>
      <NavBar />
      <Complement />
    </div>
  )
}

export default Header; 