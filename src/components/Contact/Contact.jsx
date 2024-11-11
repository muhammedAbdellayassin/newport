import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    const namei = document.getElementById("nameinput").value;
    const emaili = document.getElementById("emailinput").value;
    const errn = document.getElementById("errn");
    const erre = document.getElementById("erre");
    const errm = document.getElementById("errm");

    const mesi = document.getElementById("messageinput").value;

    if (!namei) {
      event.preventDefault();
      errn.style.color = "red";
      errn.textContent = "Name fild is empty";
    }
    if (!emaili) {
      event.preventDefault();
      erre.style.color = "red";
      erre.textContent = "Email fild is empty";
    }
    if (!mesi) {
      event.preventDefault();
      errm.style.color = "red";

      errm.textContent = "Message fild is empty";
    } else {
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "4fd592ad-e112-47f6-a6bd-a4d232a9abc4");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>ssswar387@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+251-944-235-645</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>
            {" "}
            Your Name <span id="errn"></span>
          </label>

          <input
            id="nameinput"
            type="text"
            placeholder="Enter your name"
            name="name"
          />
          <label>
            {" "}
            Your Email <span id="erre"></span>
          </label>

          <input
            id="emailinput"
            type="email"
            placeholder="Enter your email"
            name="email"
          />
          <label htmlFor="">
            Write your message here <span id="errm"></span>
          </label>

          <textarea
            id="messageinput"
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button className="contact-submit" type="submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
