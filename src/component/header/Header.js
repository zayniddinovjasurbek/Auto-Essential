import React from 'react';
import "./header.css"
// import icons
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Header = () => {
  return (

    <header>
      <div class="contact-info">
        <div class="contact-item">
        <FaPhoneAlt className="phone-icon" />
        <p>Call us <br/> <a href="tel:+923146146470">+92 314 61 46 470</a></p>
        </div>
        <div class="contact-item">
        <HiOutlineMail className="mail-icon" />
            <p>  Send us mail <br/> <a href="mailto:autoessentials@gmail.com">autoessentials@gmail.com</a></p>
        </div>
        <div class="contact-item">
            <button class="seller-button">Become A Seller</button>
        </div>
    </div>
    </header>

  );
}

export default Header;
