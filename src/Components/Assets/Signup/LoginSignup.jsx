import React from "react";
import "./LoginSignup.css";

import user_icon from "../person.png";
import call_icon from "../call.png";
import company_icon from "../person.png";
import company_mail from "../mail.png";
import employee_size from "../groups.png";
import logo from "../logo.png"

export const LoginSignup = () => {
  return (
    <div>
      <nav className="navbar">
       
          <img src={logo} alt="logo" />
       
          <div className="a">
          <a href="#contact">Contact</a>
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
        

          <div className="right-side">
            <div className="header">
              <div className="text"> Sign up</div>
              <h1 className="sign_down">Lorem Ipsum is simply dummy text</h1>
              <div className="underline"></div>
            </div>
            <div className="input-wrapper">
              <div className="inputs">
                <img src={user_icon} alt="" />
                <input type="Name" placeholder="Name" />
              </div>
              <div className="inputs">
                <img src={call_icon} alt="" />
                <input type="text" placeholder="Phone no" />
              </div>
              <div className="inputs">
                <img src={company_icon} alt="" />
                <input type="text" placeholder="Company Name" />
              </div>
              <div className="inputs">
                <img src={company_mail} alt="" />
                <input type="text" placeholder="Company Email" />
              </div>
              <div className="inputs">
                <img src={employee_size} alt="" />
                <input type="Email" placeholder="Employee Size" />
              </div>
            </div>
            <div className="text-h1">
              <h1>By clicking on proceed you will accept our </h1>
              <h1 class="terms_heading"><span className="terms">Terms</span> & <span className="conditions">Condition</span></h1>
            </div>

            <div className="submit-container">
              <div className="submit">Proceed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
