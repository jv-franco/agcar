import React from "react";
import {Link} from "react-scroll"
import './Footer.css';
function Footer(){
    return(
        <footer>
            <div className="footerUp">
                <div className="acesso">
                    <h2>Acesso rapido</h2>
                    <ul className="list_acesso">
                        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-107} duration={500} href="#home"><li>Home</li></Link>
                        <Link activeClass="active" to="sobre" spy={true} smooth={true} offset={-107} duration={500} href="#sobre"><li>Sobre nós</li></Link>
                        <Link activeClass="active" to="servicos" spy={true} smooth={true} offset={-107} duration={500} href="#servicos"><li>Nossos Serviços</li></Link>
                        <Link activeClass="active" to="local" spy={true} smooth={true} offset={-107} duration={500} href="#local"><li>Onde nos encontrar</li></Link>
                    </ul>
                </div>
                <div className="contato">
                    <h2>Contato</h2>
                    <ul className="list_contato">
                        <a href="https://api.whatsapp.com/send/?phone=55034996477973&text&type=phone_number&app_absent=0" target='_blank'><li>(34) 99647-7973</li></a>
                        <a href="https://www.instagram.com/ag_car_/" target='_blank'><li>@ag_car_</li></a>
                    </ul>
                </div>
                
            </div>
            <div className="direitos">
                <p>Direitos Reservados ®  <a href="https://www.instagram.com/ag_car_/">@ag_car_</a></p>
                
                    <p>Por <a href="https://github.com/jv-franco?tab=repositories" target="_blank">João Vitor Franco</a></p>
                
            </div>
            
        </footer>
        
)}

export default Footer