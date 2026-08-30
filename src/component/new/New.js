import React from 'react';
import "./new.css"
import shell from './Asgaard sofa 1.png'

const New = () => {
  return (
    <div id="new" className='NewArrivals'>

      <div className='new-img-content'>
            <img src={shell} alt="Asgaard"/>
      </div>

      <div className='new-text-content'>
            <h6>New Arrivals</h6>
            <h1>Shell Engine Oil</h1>
            <button>Shop Now</button>
      </div>

    </div>
  );
}

export default New;
