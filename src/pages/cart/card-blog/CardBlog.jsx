import React from 'react'
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa6";
import './cardBlog.css'
import Facility2 from '../../shop/facility2/Facility2';
import { useCart } from '../../../context/CartContext';

const CardBlog = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <section className="cart-table">
        <div className="cart-table__container">
          <table>
            <thead>
              <tr>
                <th><span>Image</span></th>
                <th><span>Product</span></th>
                <th><span>Price</span></th>
                <th><span>Quantity</span></th>
                <th><span>Subtotal</span></th>
                <th><span>Delete</span></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length === 0 ? (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center', padding: '30px' }}>
                    Savatcha bo'sh
                  </td>
                </tr>
              ) : (
                cartItems.map(item => (
                  <tr key={item.id}>
                    <td className="image">
                      <div className="img">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </td>
                    <td className="name">
                      <span>{item.name}</span>
                    </td>
                    <td className="price">
                      <span>Rs. {item.price.toLocaleString()}.00</span>
                    </td>
                    <td className="quantity">
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </td>
                    <td className="subtotal">
                      <span>Rs. {(item.price * item.quantity).toLocaleString()}.00</span>
                    </td>
                    <td className="delete">
                      <button onClick={() => removeFromCart(item.id)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="cart-totals">
          <h2>Cart Totals</h2>
          <p className="subtotal">
            <span>Subtotal</span> <span>Rs. {subtotal.toLocaleString()}.00</span>
          </p>
          <p className="total">
            <span>Total</span> <span>Rs. {subtotal.toLocaleString()}.00</span>
          </p>
          <Link to="/checkout" className="button-link">
            Check Out
          </Link>
        </div>
      </section>

      <Facility2 />
    </div>
  );
};

export default CardBlog