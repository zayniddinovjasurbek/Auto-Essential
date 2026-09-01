import React from 'react';
import "./products.css"
// images
import  BrakeSystem from "./Trenton modular sofa_3 1.png"
import  BrandedTires from "./Group 15.png"
import  AirFilterSystem from "./Mask group.png"
import  CarHeadlights from "./Mask group (1).png"

const Products = () => {
  return (
    <div id="products" className='products'>

        <div className='product-text-content'>
            <h3>Top Picks For You</h3>
            <p>Find a bright ideal to suit your taste with our great selection of products.</p>
        </div>

        <div className='product-img-content'>
            <div className='BrakeSystem'>
                <img src={BrakeSystem} alt="BrakeSystem"/>
                <p>
                    Brake system Part <br/>  Number: 8-97100-344-2 <br/> Shope: Al Fareed 
                </p>
                <h3> Rs. 25,000.00 </h3>
            </div>

            <div className='BrandedTires'>
                <img src={BrandedTires} alt="BrandedTires"/>
                <p>
                Branded Tires <br/>  Part Number: 8-97100-344-2 <br/> Shope: Al Fareed 
                </p>
                <h3> Rs. 25,000.00 </h3>
            </div>

            <div className='AirFilterSystem'>
                <img src={AirFilterSystem} alt="AirFilterSystem"/>
                <p>
                    Air Filter system <br/> Part Number: 8-97100-344-2 <br/> Shope: Vehicle Accessories   
                </p>
                <h3> Rs. 25,000.00 </h3>
            </div>

            <div className='CarHeadlights'>
                <img src={CarHeadlights} alt="CarHeadlights"/>
                <p>
                    Car headlights <br/> Part Number: 8-97100-344-2 <br/> Shope: Light House 
                </p>
                <h3> Rs. 25,000.00 </h3>
            </div>
            
            

        </div>
    
        <div className='view-more'>
        <a href="/shop">View More</a>
        <div className='line'></div>
        </div>
        
    </div>
  );
}

export default Products;
