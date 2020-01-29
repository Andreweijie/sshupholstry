import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <nav className="links">
          <img className="nav-logo" src={require("../images/logo.svg")}></img>
          <Link to="/gallery">Gallery</Link>
          <a>Services</a>
          <Link to="/contact">Contact</Link>
          <a class="book">Book Now</a>
        </nav>
      </div>
    );
  }
}
