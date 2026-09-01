import React from 'react';
import "./follor.css"
import background from "./Rectangle 17 (1).png"

const Follow = () => {
  return (
    <div className='follow'>

        < div className='infrormation'>
            <img src={background} alt="background"/>\

            <div className='follow-text-content'>
                <h1>Our Instagram</h1>
                <h6>Follow our store on Instagram</h6>
                <a href="/">Follow Us</a>
            </div>
        </div>

    </div>
  );
}

export default Follow;
