import React, { Component } from "react";
import "./App.css";
import Images from "./components/Images";
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faWhatsapp,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { Route, Link } from "react-router-dom";

library.add(faFacebookSquare, faWhatsapp, faInstagram);
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav">
          <nav className="links">
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <a>Services</a>
            <Link to="/contact">Contact</Link>
            <a class="book">Book Now</a>
          </nav>
        </div>
        <Route exact path="/gallery" component={Images}></Route>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <div className="footer">
          <div>
            <span className="footer-header">Social</span>
            <a target="_blank" href="https://www.facebook.com/sshupholstery/">
              <FontAwesomeIcon
                size="3x"
                icon={faFacebookSquare}
              ></FontAwesomeIcon>
            </a>
            <a target="_blank">
              <FontAwesomeIcon size="3x" icon={faInstagram}></FontAwesomeIcon>
            </a>
            <a target="_blank">
              <FontAwesomeIcon size="3x" icon={faWhatsapp}></FontAwesomeIcon>
            </a>
          </div>
          <div>
            <span className="footer-header">Materials</span>
            <ul className="footer-info">
              <li>PVC</li>
              <li>Leather</li>
              <li>Nappa Leather</li>
              <li>Alcantara</li>
            </ul>
          </div>
          <div>
            <span className="footer-header">Services</span>
            <ul className="footer-info">
              <li>Arm Rest</li>
              <li>Carpet</li>
              <li>Door Panel</li>
              <li>Dashboard</li>
              <li>Furniture</li>
              <li>Gear Knob</li>
              <li>Handbrake</li>
              <li>Roof-lining</li>
              <li>Steering Wheel</li>
              <li>Sun Visor</li>
              <li>Soft Convertible Top</li>
              <li>Seats</li>
              <li>Van Interior Conversion</li>
            </ul>
          </div>
          <div>
            <span className="footer-header">Insurance Partners</span>
            <ul className="footer-info">
              <li>NTUC Income</li>
              <li>Sompo Japan</li>
              <li>MSIG</li>
              <li>TM Asia</li>
              <li>ERGO</li>
              <li>First Capital</li>
              <li>India International</li>
              <li>Tokio Marine</li>
              <li>SHC Capital</li>
              <li>Lonpac</li>
              <li>AIG</li>
              <li>HSBC</li>
              <li>Etiqa</li>
              <li>Aviva</li>
              <li>United Overseas</li>
              <li>China Taiping</li>
              <li>Taiping</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
