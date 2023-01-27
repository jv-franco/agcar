import React from 'react';
import './AntesDepois.css';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const FIRST_IMAGE = {
    imageUrl: '/images/Para-choque.png',
    className: 'antesdepois'
};
const SECOND_IMAGE = {
    imageUrl: '/images/Porta.png',
    className: 'antesdepois'
};
    
    


/* ... */
function AntesDepois(){
    
    return(
    <div className='containerAntesDepois' >
        <div className="antesdepois" >
        <ReactBeforeSliderComponent
            firstImage={FIRST_IMAGE}
            secondImage={SECOND_IMAGE}
        />
        </div>
    </div>
    )
}

export default AntesDepois
/* ... */