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
import Nav from "./components/Nav";

library.add(faFacebookSquare, faWhatsapp, faInstagram);
class App extends Component {
  state = {
    name: "",
    email: "",
    mobile: "",
    VehicleNo: "",
    vehicleModel: "",
    date: "",
    time: "",
    loading: "Book Now"
  };
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <div className="hero section">
          <div className="title">
            <h2>sinhockheng</h2>
            <h1>upholstry</h1>
          </div>
          <div className="about-text">
            <p>
              Established in 1980, SSH has a vast experience in upholstery for
              automotives. <br></br>Over the years, we have added windscreen
              replacement and insurance claims into our services as well.
              <br></br>
              <br></br>Our track record over the years have proven our finest
              craftsmanship and precision for automotive upholstery.<br></br>
              <br></br>We have done projects ranging from classic vintage cars
              to luxury continental sports cars, so rest assured when you leave
              upholstery project with us.
            </p>
          </div>
        </div>
        <div id="about" className="about section">
          <div className="about-first">
            <img src={require("./images/about.jpg")}></img>
            <div className="caption-first">
              <h2>
                PROVIDING THE <span>FINEST</span> CRAFTSMANSHIP
              </h2>
              <p>
                We stand by integrity and dedication to provide the finest
                craftsmanship to our customers.
              </p>
            </div>
          </div>
          <div className="about-second">
            <img src={require("./images/about.jpg")}></img>
            <div className="caption-second">
              <h2>
                <span>COMMUNITY</span> FOR CAR ENTHUSIASTS
              </h2>
              <p>
                Bringing innovation and leading edge upholstery design to every
                automotive in the community.
              </p>
            </div>
          </div>
        </div>
        <div id="services" className="services section">
          <div className="services-list">
            <h1>OUR SERVICES INCLUDE</h1>
            <ul>
              <li>ARM REST</li>
              <li>CARPET</li>
              <li>DOOR PANEL</li>
              <li>DASHBOARD</li>
              <li>FURNITURE</li>
              <li>GEAR KNOB</li>
              <li>HANDBRAKE</li>
              <li>ROOF-LINING</li>
              <li>STEERING WHEEL</li>
              <li>SUN VISOR</li>
              <li>SOFT CONVERTIBLE TOP</li>
              <li>SEATS</li>
              <li>VAN INTERIOR</li>
              <li>WINDSCREEN & CLAIMS</li>
            </ul>
          </div>
          <div className="service-icons">
            <div className="serv-block">
              <img src={require("./images/svg/car-roof.svg")}></img>
            </div>
            <div className="serv-block">
              <img src={require("./images/svg/car-pet.svg")}></img>
            </div>
            <div className="serv-block">
              <img src={require("./images/svg/car-seat.svg")}></img>
            </div>
            <div className="serv-block">
              <img src={require("./images/svg/car-knob.svg")}></img>
            </div>
            <div className="serv-block">
              <img src={require("./images/svg/car-wheel.svg")}></img>
            </div>
            <div className="serv-block">
              <img src={require("./images/svg/car-door.svg")}></img>
            </div>
            <div className="serv-block">
              <img src={require("./images/svg/car-dash.svg")}></img>
            </div>
            <div className="serv-block">
              <img src={require("./images/svg/car-visor.svg")}></img>
            </div>
            <div className="serv-block">
              <img src={require("./images/svg/car-top.svg")}></img>
            </div>
          </div>
        </div>
        <div className="booking section"></div>

        <div className="partners section">
          <h1 style={{ textAlign: "center" }}>Insurance Partners</h1>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
