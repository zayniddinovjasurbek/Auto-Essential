import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import './contact_blog.css'

const Contact_blog = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Iltimos, kerakli maydonlarni to'ldiring!");
      return;
    }

    setSubmitted(true);

    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div>
      <div className="contact">

        <div className="contact-header">
          <h1>Get In Touch With Us</h1>
          <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>

        <div className="contact-container">

          <div id="contact-info">

            <div id="address" className='content'>
              <FaLocationDot />
              <div id="content-text">
                <h3 style={{fontWeight: "bolder"}}>Address</h3>
                <p>Lorem ipum ....</p>
              </div>
            </div>

            <div id="phone" className='content'>
              <IoCall />
              <div id="content-text">
                <h3 style={{fontWeight: "bolder"}}>Phone</h3>
                <p>Lorem ipum ....</p>
              </div>
            </div>

          </div>

          <form className='contact-form' onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="firstname">Your name</label>
              <input
                type="text"
                name="name"
                placeholder='Abs'
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                placeholder='Abc@def.com'
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder='This is an optional'
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder='Hi! i’d like to ask about'
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit">Submit</button>

            {submitted && (
              <p className="thank-you-message">
                Rahmat! Xabaringiz muvaffaqiyatli yuborildi. Tez orada siz bilan bog'lanamiz.
              </p>
            )}

          </form>
        </div>

      </div>
      </div>

  );
};

export default Contact_blog