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
          <div className="services-list"></div>
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
              <img src={require("./images/svg/car-top.svg")}></img>
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
              <img src={require("./images/svg/car-pillar.svg")}></img>
            </div>
            <div className="serv-block">
              <img src={require("./images/svg/car-furniture.svg")}></img>
            </div>
            <div className="serv-block">
              <img src={require("./images/svg/car-visor.svg")}></img>
            </div>
            <div className="serv-block">
              <img src={require("./images/svg/car-knob.svg")}></img>
            </div>
            <div className="serv-block">
              <img src={require("./images/svg/car-van.svg")}></img>
            </div>
          </div>
          <div className="booking">
            <h4>
              Pick up and delivery Skip the hassle! Let us pick up your vehicle
              at home and return it to you when it is completed. <br></br>Book
              an appointment for a Pick Up & Delivery service @ S$50 round trip
            </h4>
            <form>
              <div className="form-group">
                <label>Name*</label>
                <input
                  required
                  value={this.state.name}
                  onChange={this.onChange}
                  id="name"
                  type="text"
                ></input>
              </div>
              <div className="form-group">
                <label>Mobile No*</label>
                <input
                  required
                  value={this.state.mobile}
                  onChange={this.onChange}
                  id="mobile"
                  type="text"
                ></input>
              </div>
              <div className="form-group">
                <label>Email*</label>
                <input
                  required
                  value={this.state.email}
                  onChange={this.onChange}
                  id="email"
                  type="Email"
                ></input>
              </div>
              <div className="form-group">
                <label>Vehicle No*</label>
                <input
                  required
                  value={this.state.VehicleNo}
                  onChange={this.onChange}
                  id="VehicleNo"
                  type="text"
                ></input>
              </div>
              <div className="form-group">
                <label>Vehicle Model*</label>
                <input
                  required
                  value={this.state.vehicleModel}
                  onChange={this.onChange}
                  id="vehicleModel"
                  type="text"
                ></input>
              </div>
              <div className="form-group">
                <label>Date*</label>
                <input
                  required
                  value={this.state.date}
                  onChange={this.onChange}
                  type="date"
                  id="date"
                ></input>
              </div>
              <div className="form-group">
                <label>Time*</label>
                <select
                  required
                  value={this.state.time}
                  onChange={this.onChange}
                  id="time"
                >
                  <option value="9am - 12pm">9am - 12pm</option>
                  <option value="1pm - 3pm">1pm - 3pm</option>
                  <option value="4pm - 6pm">4pm - 6pm</option>
                </select>
              </div>
              <div className="form-group">
                <label>Service*</label>
                <select
                  required
                  value={this.state.service}
                  onChange={this.onChange}
                  id="service"
                >
                  <option value="Arm Rest">Arm Rest</option>
                  <option value="Carpet">Carpet</option>
                  <option value="Door Panel">Door Panel</option>
                  <option value="Dashboard">Dashboard</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Gear Knob">Gear Knob</option>
                  <option value="Handbrake">Handbrake</option>
                  <option value="Roof-Lining">Roof-Lining</option>
                  <option value="Steering Wheel">Steering Wheel</option>
                  <option value="Sun Visor">Sun Visor</option>
                  <option value="Soft Convertible Top">
                    Soft Convertible Top
                  </option>
                  <option value="Seats">Seats</option>
                  <option value="Van Interior Conversion">
                    Van Interior Conversion
                  </option>
                  <option value="Insurance Claim">Insurance Claim</option>
                  <option value="Van Window Conversion">
                    Van Window Conversion
                  </option>
                  <option value="V-Kool">V-Kool</option>
                </select>
              </div>
              <div className="form-group full-width">
                <label>Remarks</label>
                <textarea
                  value={this.state.remarks}
                  onChange={this.onChange}
                  id="remarks"
                ></textarea>
              </div>
            </form>
            <button
              className="full-width"
              type="submit"
              onClick={this.onSubmit}
            >
              {this.state.loading}
            </button>
          </div>
        </div>

        <div className="partners section">
          <h1 style={{ textAlign: "center" }}>Insurance Partners</h1>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
