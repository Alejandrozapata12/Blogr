import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Infrastructure from './components/Infrastructure';
import Others from './components/Others';
import Footer from './components/Footer';
import Up from './components/Up';
import './css/MobileResponsive.css';

function App() {
  
  return (
    <div> 
      <Header />
      <Main />
      <Infrastructure />
      <Others />
      <Footer />
      <Up />
    </div>
  )
}

export default App
