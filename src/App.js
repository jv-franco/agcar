import Header from './components/Header/Header';
import React from 'react';
import './index.css';
import Footer from './components/Footer/Footer';
import Home from './components/Principal/Home';
import Sobre from './components/Sobre/Sobre';
import { useState, useEffect } from 'react';
import Servicos from './components/Serviços/Servicos';
import Local from './components/Local/Local';




function App() {

  const [activeColor, setActiveColor] = useState(false);

  useEffect(function(){
    function scrollPosition(){
      
      if(window.scrollY > 76){
        setActiveColor(true)
      }else{
        setActiveColor(false)
      }
    }

    window.addEventListener('scroll', scrollPosition)
  }, [])

  return (
    <>
    <Header acao={activeColor}/>
    <Home></Home>
    <Sobre></Sobre>
    <Servicos/>
    <Local/>
    
    <Footer/>
    </>
  );
}

export default App;
