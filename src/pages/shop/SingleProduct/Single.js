import React, { useState } from 'react';
import './single.css';

import Product from './Asgaard sofa 3.png';
import Thumbnail_1 from './shop tire1.png';
import Thumbnail2 from './shop tire2.png';
import Thumbnail3 from './shop tire3.png';
import Thumbnail4 from './shop tire4.png';

import Additional1 from './Group 107.png';
import Additional2 from './Group 106.png';

import { MdChevronRight } from "react-icons/md";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';

function Single() {
  const [mainImage, setMainImage] = useState(Product);
  const [quantity, setQuantity] = useState(1);
  const [activeButtons, setActiveButtons] = useState([false, false, false]);
  const [activeTab, setActiveTab] = useState('description');

  const { addToCart } = useCart();

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleButtonClick = (index) => {
    setActiveButtons(prevState => {
      const newStates = prevState.map((active, i) => (i === index ? !active : false));
      return newStates;
    });
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleAddToCart = () => {
    addToCart({
      id: 13,
      name: 'MIRAGE MR–AT172 285/65',
      price: 50000,
      image: Product,
      quantity: quantity,
    });
  };

  return (
    <div className="product-page">
      <div className="breadcrumb">
        <Link to="/" style={{color:"black", textDecoration: "none"}}>Home</Link> <MdChevronRight /> <Link to="/shop"  style={{color:"black", textDecoration: "none"}} >Shop</Link> 
        <MdChevronRight /> <div style={{width: '2px', height: '22px', background: '#000', padding: '0px '}}></div> <Link to="#"  style={{color:"black", textDecoration: "none"}}>Tire</Link>
      </div>
    
      <div className="product-details">
        <div className="image-gallery">
          <div className="thumbnail-images">
            <img src={Thumbnail_1} alt="Thumbnail 1" className="thumbnail" onClick={() => setMainImage(Thumbnail_1)} />    
            <img src={Thumbnail2} alt="Thumbnail 2" className="thumbnail" onClick={() => setMainImage(Thumbnail2)} />
            <img src={Thumbnail3} alt="Thumbnail 3" className="thumbnail" onClick={() => setMainImage(Thumbnail3)} />            
            <img src={Thumbnail4} alt="Thumbnail 4" className="thumbnail" onClick={() => setMainImage(Thumbnail4)} />
          </div>

          <div className="main-image">
            <img src={mainImage} alt="Product" />
          </div>
        </div>
      
        <div className="product-info">
          <h1>MIRAGE MR–AT172 285/65</h1>
          <p className="price">Rs. 50,000.00</p>
          <p className="hause">Shope: Tire House <span>5 Customer Review </span></p>
          <p className="description">
          The MIRAGE MR-AT172 285/65 R17 is a tyre developed with an <br /> advanced tread 
          pattern and compound which offer a long tread <br /> life.It employs a variable 
          pitch tread design. This variable pitch <br /> design significantly reduces noise  
          and provides a quiet ride. Its <br />optimized profile provides even wear and classic style.
          </p>
          <div className="size">
            <p>Size</p>
            <button className={`toggle-button ${activeButtons[0] ? 'toggled' : ''}`} onClick={() => handleButtonClick(0)}>17</button> 
            <button className={`toggle-button ${activeButtons[1] ? 'toggled' : ''}`} onClick={() => handleButtonClick(1)}>21</button>
            <button className={`toggle-button ${activeButtons[2] ? 'toggled' : ''}`} onClick={() => handleButtonClick(2)}>24</button> 
          </div>

          <div className="color">
            <p>Color</p>
            <div className='color-black'></div>
          </div>

          <div className="quantity-selector-container">
            <div className="quantity-selector">
              <button className="quantity-button" onClick={decreaseQuantity}>-</button>
              <span className="quantity-display">{quantity}</span>
              <button className="quantity-button" onClick={increaseQuantity}>+</button>
            </div>
            <button className="add-to-cart-button" onClick={handleAddToCart}>Add To Cart</button>
          </div>

          <div className="product-meta">
            <span><p>SKU:  0012</p></span>
            <p>Category: Tire</p>
            <p>Tags: Tire, Rim, Shop</p>
            <p>Product ID: 13</p>
            <div className="share">
              <p>Share:</p>
              <FaFacebook className="share-icon" />
              <FaLinkedin className="share-icon" />
              <FaTwitter className="share-icon" />
            </div>
          </div>
        </div>
      </div>
      
      <hr className='hr-line1'/>

      <div className="product-tabs">
        <h6 className={activeTab === 'description' ? 'active' : ''} onClick={() => handleTabClick('description')}>Description</h6>
        <h6 className={activeTab === 'additional' ? 'active' : ''} onClick={() => handleTabClick('additional')}>Additional Information</h6>
        <h6 className={activeTab === 'reviews' ? 'active' : ''} onClick={() => handleTabClick('reviews')}>Reviews [5]</h6>
      </div>

      <div className="product-description">
        {activeTab === 'description' && (
          <div className='information'>
            <p>
            The Mirage AT MR-172 265/65 R17 is a multipurpose all-terrain light truck tyre. It has been engineered to deliver high mileage. <br />
             Mirage MR AT-172 Performs best in on road and off road driving conditions. The Mirage AT MR-172 265/65 R17 has an aggressive <br />
             tread design. Its aggressive tread delivers excellent wet and dry traction. It also offers even tread wear hence longer tread life is <br />
               achieved.stable tread block design provides better traction and improves cornering and braking in all weather conditions. <br />
              Mirage AT MR-172 265/65 R17 Lateral sipes also help in improving mud snow and wet qualities.
            </p>
            <div className="additional-images">
              <img src={Additional1} alt="Additional1" />
              <img src={Additional2} alt="Additional2" />
            </div>
          </div>
        )}
        {activeTab === 'additional' && (
          <div className='add-information'>
            <p>
            lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in r
            eprehenderit in voluptate velit esse cillum dolore
            </p>
            <div className="additional-images">
              <img src={Additional1} alt="Additional1" />
              <img src={Additional2} alt="Additional2" />
            </div>
          </div>
        )}
        {activeTab === 'reviews' && (
          <div className='reviews'>
            <p>
            lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in r
            eprehenderit in voluptate velit esse cillum dolore
            </p>
            <div className="additional-images">
              <img src={Additional1} alt="Additional1" />
              <img src={Additional2} alt="Additional2" />
            </div>
          </div>
        )}
      </div>
      <hr id='hr-line' />
    </div>
  );
}

export default Single;