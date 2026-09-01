import React, { useState, useEffect, useRef } from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

// images
import logo from './Rectangle 72.png';

// icons
import { FiUserCheck } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";

function Navbar() {

  const [activeSection, setActiveSection] = useState("");
  const [bounce, setBounce] = useState(false);

  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setBounce(true);
    const timer = setTimeout(() => setBounce(false), 500);
    return () => clearTimeout(timer);
  }, [cartCount]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["servise", "products", "new", "ourblogs", "contact"];
      let currentSection = "";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop <= 75) {
            currentSection = id;
          }
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`main navbar-${activeSection}`}>

      <header className="nav">

        <div className="logo">
          <a href="/#">
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/tools">Tools</Link></li>
          </ul>
        </nav>

        <div className="icons">

          <Link to="/my_accaunt_banner">
            <FiUserCheck />
          </Link>

          <Link className={`Cart ${bounce ? "cart-bounce" : ""}`} to="/card-banner">
            <MdOutlineShoppingCart />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

        </div>

      </header>

    </div>
  );
}

export default Navbar;