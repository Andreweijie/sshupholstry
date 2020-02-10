import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <nav className="links">
          <img className="nav-logo" src={require("../images/logo.svg")}></img>
          <a>Services</a>
          <a>Contact</a>
          <a>Book Now</a>
        </nav>
      </div>
    );
  }
}
