import React from 'react';
import './footer.css'
// icons
import footerlogo from './Rectangle 75 (1).png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">

        <div className="footer-section logo">
          <a href='/'> <img src={footerlogo} alt="tavsif"/> </a>
        </div>
        
        <div className="footer-section links">
          <h2>Links</h2>
          <ul>
    
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/shop">Shop</a>
            </li>

            <li>
              <a href="/about">About</a>
            </li>

            <li>
              <a href="/contact">Contact</a>
            </li>

          </ul>

        </div>

        <div className="footer-section help">
          <h2>Help</h2>

          <ul>
            <li>
              <a href="#payment-options">Payment Options</a>
            </li>

            <li>
              <a href="#returns">Returns</a>
            </li>

            <li>
              <a href="#privacy-policies">Privacy Policies</a></li>
          </ul>

        </div>

        <div className="footer-section newsletter">
          <h2>Newsletter</h2>
          <form>
            <input type="email" placeholder="Enter Your Email Address" />
            <button type="submit">Subscribe</button>

          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <p> 2023-24 autoessentials. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;












// import React from "react";
// import "./footer.css";

// const Footer = () => {
//   return (
//     <footer>
      
//     </footer>
//   );
// };

// export default Footer;
