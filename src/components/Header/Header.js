import React, { useRef } from "react";
import './Header.css';
import { useState } from "react";
import {Link} from "react-scroll";

function Header({acao}){
    const dropDownRef = useRef(null)
    const [isActive, setIsActive] = useState(false)
    const onClick = ()=> setIsActive(!isActive)
    function CloseMenu(){
        setIsActive(!isActive)
    }
    
    return(
        <header className={ acao ? 'header showHeader' : 'header'}>
            <div className="Logo">
                <img className="Logo_img" src="images/AgCar-removebg-preview2.png" alt="Logo AgCar"></img>
                <img className="Logo_text" src="images/AgCarText2.png" alt=""></img>
            </div>
            <nav className="menu_all">
                <ul className="menu_list">
                    <li><Link activeClass="active" to="local" smooth={true} spy={true} offset={-107} duration={500} className="menu_link">Orçamento</Link>
                    </li>
                    <li><Link activeClass="active" to="servicos" spy={true} smooth={true} offset={-107} duration={500} className="menu_link">Serviços</Link>
                    </li>
                    <li><Link activeClass="active" to="sobre" spy={true} smooth={true} offset={-107} duration={500} className="menu_link">Sobre</Link>
                    </li>
                </ul>
                <button onClick={onClick} className="btn_header">
                  <i className={isActive ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
 </button>  
                
                
                <ul
                className={isActive ? "mobile_menu mobile_menuShow" : "mobile_menu" }
                 ref={dropDownRef} 
                >
                    <Link activeClass="active" to="orcamento" spy={true} smooth={true} offset={-500} duration={500} className="link_mobile"  onClick={CloseMenu}><li>Orçamento</li></Link>
                    <Link activeClass="active" to="servicos" spy={true} smooth={true} offset={-107} duration={500} className="link_mobile"  onClick={CloseMenu}><li>Serviços</li></Link>
                    <Link activeClass="active" to="sobre" spy={true} smooth={true} offset={-107} duration={500} className="link_mobile"  onClick={CloseMenu}><li>Sobre</li></Link>
                </ul>
                    
                
            </nav>
            
        </header>
        
)}

export default Header