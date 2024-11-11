import React from 'react'
import './Hero.css'
import profilimg from '../../assets/profile_img.png'
import AnchoorLink from "react-anchor-link-smooth-scroll";


const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profilimg} alt="" />
      <h1>
        <span>I'Muhammed Abdella,</span> Frontend developer based in Ethiopia
      </h1>
      <p>
        I am a frontend developer from Addis Ababa,Ethiopia with 1 year of
        Expriance in multiple copanies like MIT and self companiy
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchoorLink className="anchor-link" ofset={50} href="#contact">
            Connect with me{" "}
          </AnchoorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero