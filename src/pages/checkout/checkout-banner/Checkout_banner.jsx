import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout_banner.css";
import { FaAngleRight } from "react-icons/fa6";
import Facility2 from "../../shop/facility2/Facility2";
import { useCart } from "../../../context/CartContext";

const Checkout_banner = () => {
  const { cartItems, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Savatchangiz bo'sh!");
      return;
    }

    alert("Buyurtmangiz uchun rahmat! Tez orada siz bilan bog'lanamiz.");
    clearCart();
    navigate("/");
  };

  return (
    <>
      <div className="checkout_banner">
        <h1>Checkout</h1>
        <h6>
          <a href="/">Home</a> <FaAngleRight /> <a href="/">Checkout</a>
        </h6>
      </div>

      <div className="inference-contaner">
        <div className="billing-container">
          <h2>Billing details</h2>
          <form className="billing-form">
            <div className="form-row">
              <div className="form-container">
                <label htmlFor="firstInput">First Input</label>
                <input type="text" id="firstInput" />
              </div>
              <div className="form-container">
                <label htmlFor="secondInput">Second Input</label>
                <input type="text" id="secondInput" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="company-name">Company Name (Optional)</label>
              <input type="text" id="company-name" />

              <label htmlFor="country-region">Country / Region</label>
              <select id="country-region">
                <option>Sri Lanka</option>
              </select>

              <label htmlFor="street-address">Street address</label>
              <input type="text" id="street-address" />

              <label htmlFor="Town-City">Town / City</label>
              <input type="text" id="Town-City" />

              <label htmlFor="Province">Province</label>
              <select id="Province">
                <option value="Western Province">Western Province</option>
              </select>

              <label htmlFor="ZIP-code">ZIP code</label>
              <input type="text" id="ZIP-code" />

              <label htmlFor="Phone">Phone</label>
              <input type="text" id="Phone" />

              <label htmlFor="Email-address">Email address</label>
              <input type="text" id="Email-address" />

              <input
                type="text"
                placeholder="Additional information"
                className="additional-info"
              />
            </div>
          </form>
        </div>

        <div className="information-container">
          <div className="order-summary-container">
            <h2 className="summary-title">Product</h2>
            <h2 className="summary-title">Subtotal</h2>

            <ul className="order-summary-list">
              {cartItems.length === 0 ? (
                <li className="order-item">Savatcha bo'sh</li>
              ) : (
                cartItems.map(item => (
                  <li className="order-item" key={item.id}>
                    {item.name} × {item.quantity}
                    <span className="price">
                      Rs. {(item.price * item.quantity).toLocaleString()}.00
                    </span>
                  </li>
                ))
              )}

              <li className="order-subtotal">
                Subtotal
                <span className="price">Rs. {subtotal.toLocaleString()}.00</span>
              </li>
              <li className="order-total">
                Total
                <span className="price total-price">
                  Rs. {subtotal.toLocaleString()}.00
                </span>
              </li>
            </ul>

            <div className="payment-method">
              <label>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "bank"}
                  onChange={() => setPaymentMethod("bank")}
                />
                Direct Bank Transfer
              </label>
              <p className="payment-info">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not
                be shipped until the funds have cleared in our account.
              </p>

              {paymentMethod === "bank" && (
                <div className="card-details">
                  <label htmlFor="card-number">Card Number</label>
                  <input
                    type="text"
                    id="card-number"
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                  />

                  <label htmlFor="card-name">Name on Card</label>
                  <input type="text" id="card-name" placeholder="John Doe" />

                  <div className="card-row">
                    <div className="form-container">
                      <label htmlFor="card-expiry">Expiry Date</label>
                      <input
                        type="text"
                        id="card-expiry"
                        placeholder="MM/YY"
                        maxLength="5"
                      />
                    </div>
                    <div className="form-container">
                      <label htmlFor="card-cvv">CVV</label>
                      <input
                        type="text"
                        id="card-cvv"
                        placeholder="123"
                        maxLength="3"
                      />
                    </div>
                  </div>
                </div>
              )}

              <label>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                Cash On Delivery
              </label>

              <p className="privacy-policy">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account,
                and for other purposes described in our{" "}
                <a href="#/">privacy policy</a>.
              </p>
            </div>

            <button className="place-order-button" onClick={handlePlaceOrder}>
              Place order
            </button>
          </div>
        </div>
      </div>

      <Facility2 />
    </>
  );
};

export default Checkout_banner;