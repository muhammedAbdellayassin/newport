import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import Menu_open from "../../assets/menu_open.svg";
import Menu_close from "../../assets/menu_close.svg";

import underline from "../../assets/nav_underline.svg";
import AnchoorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => {
  const [menu,setmenu]=useState("home");

  const menuRef=useRef();

  const openMenu=()=>{
    menuRef.current.style.right="0"
  }
   const closeMenu = () => {
     menuRef.current.style.right = "-350px";
   };

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img src={Menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={Menu_close}
          alt=""
          className="nav-mob-close"
          onClick={closeMenu}
        />
        <li>
          <AnchoorLink className="anchor-link" ofset={50} href="#home">
            <p  onClick={() => setmenu("home")}>
              Home
            </p>
          </AnchoorLink>
          {menu === "home" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchoorLink className="anchor-link" ofset={50} href="#about">
            <p onClick={() => setmenu("about")}>About Me</p>
          </AnchoorLink>

          {menu === "about" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchoorLink className="anchor-link" ofset={50} href="#services">
            <p onClick={() => setmenu("services")}>Service</p>
          </AnchoorLink>
          {menu === "services" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchoorLink className="anchor-link" ofset={50} href="#work">
            <p onClick={() => setmenu("work")}>Portfolio</p>
          </AnchoorLink>
          {menu === "work" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchoorLink className="anchor-link" ofset={50} href="#contact">
            <p onClick={() => setmenu("contact")}>Contact</p>
          </AnchoorLink>
          {menu === "contact" ? <img src={underline} /> : <></>}
        </li>
      </ul>

      <div className="nav-connect">
        {" "}
        <AnchoorLink className="anchor-link" ofset={50} href="#contact">
          Connect With Me
        </AnchoorLink>
      </div>
    </div>
  );
}

export default Navbar