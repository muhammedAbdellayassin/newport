import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>I am an exprinced Frontend Developer with over a one year of professional experties in the field. Through my Career,I have had the privilege of collaborating with prestigious organazations, contributing to thir success and growth</p>
            <p>My passion for frontend development is not only reflected in my extensive exprience but also in the inthussiasm and dedication i bring to each project. </p>
          </div>

          <div className="about-skills">
            
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }}></hr>
            </div>

            <div className="about-skill">
              <p>REACT JS</p>
              <hr style={{ width: "70%" }}></hr>
            </div>

            <div className="about-skill">
              <p>JAVASCRIPT</p>
              <hr style={{ width: "60%" }}></hr>
            </div>
            <div className="about-skill">
              <p>NEXT JS</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
          </div>
        </div>
      </div>

      <div className="about-achivments">
        <div className="about-achivment">
          <h1>1+</h1>
          <p>YEAR OF EXPRIANCE</p>
        </div>
        <hr />

        <div className="about-achivment">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />

        <div className="about-achivment">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
