import React from 'react';
import "./servise.css"
// images
import Lubricants from './Granite square side table 1.png'
import SpareParts from './Cloud sofa three seater + ottoman_3 1.png' 


const Servise = () => {
  return (
    <div id='servise' className='servise'>

        <div className='Lubricants'>
            <img src={Lubricants} alt="main.img"/>
            <h3>Lubricants</h3>
            <a href="/shop">View More</a>
        </div>

        <div className='Spare-Parts'>
            <img src={SpareParts} alt="main.img"/>
            <h3>Spare-Parts</h3>
            <a href="/shop">View More</a>
        </div>
        
    </div>
  );
}

export default Servise;
