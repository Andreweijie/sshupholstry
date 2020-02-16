import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <nav className="links">
          <img className="nav-logo" src={require("../images/logo.svg")}></img>
          <a href="#services">Services</a>
          <a href="#find">Contact</a>
          <a id="book-button" href="#book">
            Book Now
          </a>
        </nav>
      </div>
    );
  }
}
