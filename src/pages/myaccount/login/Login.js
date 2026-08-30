import React from "react";
import "./login.css";
import Facility2 from "../../shop/facility2/Facility2.jsx"
const Login = () => {
  return (
    <>
      <div className="my_accaunt_login">

        <div className="right-side">
          <form action="">
            <h1>Log In</h1>
            <label htmlFor="Username or email address">
              Username or email address
            </label>
            <input type="text" />
            <label htmlFor="Password">Password</label>
            <input type="Password" />
           <span className="name"><input type="checkbox" />
           <label htmlFor="checkbox" className="remember-me"> Remember me</label></span> 
            
            
          <span><button>Log In</button> <a href="Lost Your Password?">Lost Your Password?</a></span>  
           
          </form>
        </div>

        <div className="left-side">
          <form action="">
            <h1>Register</h1>
            <label htmlFor="email address">Email address</label>
            <input type="text" id=""/>
            <p>A link to set a new password will be sent to your email address.</p>
            <p>Your personal data will be used to support
               your experience throughout this website, 
               to manage access to your account, and for other
                purposes described in our <a href="/">Pricavy policy</a>.</p>
            <button>Register</button>
          </form>
        </div>

      </div>
      <Facility2/>
    </>
  );
};

export default Login;
