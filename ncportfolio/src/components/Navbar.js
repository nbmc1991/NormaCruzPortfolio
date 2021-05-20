import React from "react";
import logo from "../logo.png";
//***REACT FONTAWESOME IMPORT */
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AboutMe from "./AboutMe";




const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">

  <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="nc logo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}} />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
      <Link className="nav-link" to="/">Home</Link>      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/AboutMe">About Me</Link>  
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="/projects">Portfolio </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/resume">Resume</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/services">Services</a>
      </li>
      
      
    </ul>
    </div>
      </div>
</nav>
  )
}

export default Navbar

