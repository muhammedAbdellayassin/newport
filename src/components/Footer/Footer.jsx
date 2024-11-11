import React from 'react'
import "./Footer.css";
import footer_logo from "../../assets/logo.png";
import user_icon from "../../assets/user_icon.svg";





const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            I am a frontend developer from Addis Ababa, Ethiopia with 1 year
            experience.
          </p>
        </div>
        
        
      </div>
      <br />

    <hr />
<br />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Muhammed Abdella. All right reserved. </p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Contact with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer
