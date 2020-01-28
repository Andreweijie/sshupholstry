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
            <img className="logo" src={require("./images/logo.svg")}></img>
            <p>
              Established in 1980, SSH has a vast experience in upholstery for
              automotives. Over the years, we have added windscreen replacement
              and insurance claims into our services as well.
              <br></br>
              <br></br>Our track record over the years have proven our finest
              craftsmanship and precision for automotive upholstery.We have done
              projects ranging from classic vintage cars to luxury continental
              sports cars, so rest assured when you leave upholstery project
              with us.
            </p>
            <ul>
              <li>
                7 Sin Ming Industrial Estate Sector C, #01-90, Singapore 575642
              </li>
              <li>64548160</li>
              <li>64548179</li>
              <li>sinhockhengcm@singnet.com</li>
            </ul>
            <ul>
              <li style={{ fontWeight: "bold" }}>Opening Hours</li>
              <li>Mon: 9AM - 6PM</li>
              <li>Tue: 9AM - 6PM</li>
              <li>Wed: 9AM - 6PM</li>
              <li>Thu: 9AM - 6PM</li>
              <li>Fri: 9AM - 6PM</li>
              <li>Sat: 9AM - 5PM</li>
            </ul>
          </div>
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
        </div>
      </div>
    );
  }
}

export default App;
