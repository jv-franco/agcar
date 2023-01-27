import './Local.css';
import {FaInstagram, FaWhatsapp, FaMapPin} from 'react-icons/fa'
function Local() {
    return (
        <div className='container_local' id='local'>
            <div className='local'>
                <h2>Onde nos encontrar</h2>
                <div className='local_desc'>
                    <p> A Funilaria Ag Car está localizada na Av. José Fonseca e Sílva, 155 - Dona Zulmira, Uberlândia - MG. Nós oferecemos serviços de alta qualidade de pintura e reparação automotiva, garantindo que seu veículo fique como novo. </p>
                    <p>Nossos profissionais altamente treinados e experientes trabalham com as melhores técnicas e materiais para garantir a satisfação do cliente. Se você está procurando por um serviço de qualidade e confiável, visite a Funilaria Ag Car na <a href="https://www.google.com/maps?ll=-18.909801,-48.3153&z=14&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=9134704093856604442" target='blank'><FaMapPin className='location_icon'/> Av. José Fonseca e Sílva, 155 - Dona Zulmira, Uberlândia - MG</a>. Nós estamos ansiosos para atendê-lo.</p>
                </div>
                <iframe className='map'
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15097.950295255887!2d-48.3153!3d-18.9098008!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7ec4fcf9c2a1211a!2sAg%20Car%20-%20Funilaria%20e%20Pintura!5e0!3m2!1spt-BR!2sbr!4v1674066292618!5m2!1spt-BR!2sbr"
                    loading="lazy"
                />
                
            </div>
            <div className='box-contato'>
                <h2>Contato</h2>
                <p className='contato_desc'>Na funilaria Ag Car, valorizamos a comunicação eficaz com nossos clientes. Se você tiver alguma pergunta, sugestão ou gostaria de agendar um serviço, não hesite em entrar em contato conosco.

                    Você pode nos contatar através do nosso número de telefone <a href="https://api.whatsapp.com/send/?phone=55034996477973&text&type=phone_number&app_absent=0" target='_blank'><FaWhatsapp className='mini_whatsapp'/>(34)99647-7973 </a>, ou enviar uma mensagem no nosso instagram <a href="https://www.instagram.com/ag_car_/"> @ag_car_<FaInstagram className='mini_instagram'/></a>. Estamos disponíveis de segunda a sexta, das 7h às 18h.

        
                    Agradecemos a sua preferência pela Ag Car e esperamos poder atendê-lo em breve.</p>
                
                    <div className='socialmedia' id='orcamento'>
                        <div className='container_social'>
                            <h4>Siga-nos no instagram</h4>
                            <a className='instagram' href="https://www.instagram.com/ag_car_/" target='_blank'>
                                <FaInstagram className='instagram_icon'/>
                            </a>
                        </div>
                        <div className='container_social'>
                            <h4>Faça o seu Orçamento pelo WhatsApp!</h4>
                            <a className='whatsapp' href="https://api.whatsapp.com/send/?phone=55034996477973&text&type=phone_number&app_absent=0" target='_blank'>
                                < FaWhatsapp className='whatsapp_icon'/>
                            </a>
                        </div>
                    </div>

                    
                
            </div>
            
            <a target='_blank' href="https://api.whatsapp.com/send/?phone=55034996477973&text&type=phone_number&app_absent=0"><img className='whatsapp_absolute' src='images/WhatsApp.svg.png'></img></a>
        
        </div>

    )
}

export default Local