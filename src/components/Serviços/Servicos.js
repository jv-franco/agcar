import { useState } from 'react';
import { Link } from 'react-scroll';
import './Servicos.css';



function Servicos() {
    const cardData = [
        {servico : "Para-choque",
        desc : "Trabalhamos com restauração e pintura de para-choques. Utilizamos técnicas e materiais de alta qualidade para garantir que seu carro fique como novo. Nossos profissionais são altamente treinados e experientes, garantindo um trabalho preciso e eficiente.",
        id: "1"},
        {servico : "Porta",
        desc : "",
        id: "2"},
        {servico : "Jetski",
        desc : "",
        id: "3"},
        {servico : "Pintura",
        desc : "",
        id: "4"},
        {servico : "Capo",
        desc : "",
        id: "5"},
        {servico : "Outros",
        desc : "",
        id: "6"}
       
            
    ]
    const [showText, setShowText] = useState(Array(6).fill(false));

    const handleClick = (index) => {
        const newShowText = [...showText];
        newShowText[index] = !newShowText[index];
        setShowText(newShowText);
    }

    return (
        <div className='servicos' id='servicos'>
            <h2>Nossos Serviços</h2>
            <div className='card_container'>
                {cardData.map((item, index) => (
                    <div style={{backgroundImage: `url(/images/${item.servico}.png`}} key={item.id} className={'card'} id={`card-${item.id}`} >
                        <h3 className='servico-title'>{item.servico}</h3>
                        <p className={showText[index] ? 'showDesc servico-desc' : 'servico-desc'}>{item.desc}</p>
                        <button onClick={() => handleClick(index)} className='servicos-btn'>Saiba mais</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Servicos