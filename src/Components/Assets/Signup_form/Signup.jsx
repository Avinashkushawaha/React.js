import React from 'react'
import './Signup.css'


import email_icon from "../mail.png"
import call_icon from "../call.png"
import logo from "../logo.png"

export const Signup = () => {
  return (
   
    <div>
      <nav className="navbar">

          <img src={logo} alt="logo" className='vabar-logo' />

          <div className="navbar-links">
          <h2 href="#contact">Contact</h2>
          </div>
      </nav>

      <div>
        <div className="container">
          <div className="text-wrapper">
            <p className="welcome-text">
                Lorem ipsum is simply dummy text of the printing and typesetting <br />
                industry.Lorem Ipsum has been the industry's standard dummy text <br />
                ever since the 1500s, when an unknown printer took a galley
            </p>
          </div>


            <div className='right-side'>
            <div className="header">
              <div className="text"> Sign up</div>
              <h1 className="sign_down">Lorem Ipsum is simply dummy text</h1>
            
            </div>
            <div className="input-wrapper">
             
              <div className="inputs">
                <img src={email_icon} alt="" />
                <input type="text" placeholder="Email OTP" />
              </div>
              <div className="submit-container">
              <div className="submit">Proceed</div>
            </div>
              <div className="inputs">
                <img src={call_icon} alt="" />
                <input type="text" placeholder="Mobile OTP" />
              </div>
              
    
            <div className="submit-container">
              <div className="submit">Proceed</div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
  );
};
