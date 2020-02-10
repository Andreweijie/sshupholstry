import React, { Component } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { message, Switch } from "flwww";
import {
  faFacebookSquare,
  faWhatsapp,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "./components/Nav";

library.add(faFacebookSquare, faInstagram, faWhatsapp);
class App extends Component {
  state = {
    appt: false,
    name: "",
    email: "",
    mobile: "",
    VehicleNo: "",
    vehicleModel: "",
    date: "",
    time: "",
    loading: "Book Now",
    days: [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday"
    ],
    hours: [
      "CLOSED",
      "09:00 - 18:00",
      "09:00 - 18:00",
      "09:00 - 18:00",
      "09:00 - 18:00",
      "09:00 - 18:00",
      "09:00 - 17:00"
    ]
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.checked });
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
        <div className="booking section">
          <div className="booking-header">
            <h1>Book An Appointment</h1>
          </div>
          <div className="form-box">
            <div className="form-switch">
              <span>appointment</span>
              <Switch
                name="appt"
                onChange={this.handleChange}
                checked={this.state.appt}
              />
              <span>pickup/delivery</span>
            </div>

            <form>
              <div className="form-group first-col">
                <label>Name*</label>
                <input
                  required
                  value={this.state.name}
                  onChange={this.onChange}
                  id="name"
                  type="text"
                ></input>
              </div>
              <div className="form-group first-col">
                <label>Mobile No*</label>
                <input
                  required
                  value={this.state.mobile}
                  onChange={this.onChange}
                  id="mobile"
                  type="text"
                ></input>
              </div>
              <div className="form-group first-col">
                <label>Email*</label>
                <input
                  required
                  value={this.state.email}
                  onChange={this.onChange}
                  id="email"
                  type="Email"
                ></input>
              </div>
              {!this.state.appt ? (
                <div className="form-group first-col">
                  <label>Vehicle No*</label>
                  <input
                    required
                    value={this.state.VehicleNo}
                    onChange={this.onChange}
                    id="VehicleNo"
                    type="text"
                  ></input>
                </div>
              ) : null}
              {!this.state.appt ? (
                <div className="form-group first-col">
                  <label>Vehicle Model*</label>
                  <input
                    required
                    value={this.state.vehicleModel}
                    onChange={this.onChange}
                    id="vehicleModel"
                    type="text"
                  ></input>
                </div>
              ) : null}
              {!this.state.appt ? (
                <div className="form-group second-col">
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
              ) : null}
              {!this.state.appt ? (
                <div className="form-group second-col">
                  <label>Date*</label>
                  <input
                    required
                    value={this.state.date}
                    onChange={this.onChange}
                    type="date"
                    id="date"
                  ></input>
                </div>
              ) : null}
              {!this.state.appt ? (
                <div className="form-group second-col">
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
              ) : null}
              {!this.state.appt ? (
                <div className="form-group full-width">
                  <label>Remarks</label>
                  <textarea
                    value={this.state.remarks}
                    onChange={this.onChange}
                    id="remarks"
                  ></textarea>
                </div>
              ) : null}

              <button className="full-width">Submit</button>
            </form>
          </div>
        </div>

        <div className="partners section">
          <h1 style={{ textAlign: "center" }}>Insurance Claims</h1>
          <div>
            <div>
              <img alt="" src={require("./images/ins/great.png")} />
            </div>
            <div>
              <img alt="" src={require("./images/ins/ntuc.png")} />
            </div>
            <div>
              <img alt="" src={require("./images/ins/taiping.png")} />
            </div>
            <div>
              <img alt="" src={require("./images/ins/aviva.png")} />
            </div>
            <div>
              <img alt="" src={require("./images/ins/aig.png")} />
            </div>
            <div>
              <img alt="" src={require("./images/ins/ergo.png")} />
            </div>
            <div>
              <img alt="" src={require("./images/ins/etiqa.png")} />
            </div>
            <div>
              <img alt="" src={require("./images/ins/hsbc.png")} />
            </div>
            <div>
              <img alt="" src={require("./images/ins/tokio.png")} />
            </div>
            <div>
              <img alt="" src={require("./images/ins/msig.png")} />
            </div>
          </div>
        </div>
        <div className="find section">
          <div className="contact-info">
            <div className="info-block">
              <h1>PHONE</h1>
              <h2>64548160</h2>
              <h2>64548179</h2>
            </div>
            <div className="info-block">
              <h1>EMAIL</h1>
              <a
                href="mailto:info@shhupholstery.com?Subject=Enquiry"
                target="_top"
              >
                info@shhupholstery.com
              </a>
            </div>
            <div className="info-block">
              <h1>LOCATION</h1>
              <a href="https://www.google.com.sg/maps/place/Sin+Hock+Heng+Upholstery/@1.3733373,103.856409,15z/data=!4m5!3m4!1s0x31da1724089c4d9b:0x3fd503e1536b2410!8m2!3d1.3586024!4d103.8388447">
                7 Sin Ming Industrial Estate Sector C, #01-90, Singapore 575642
              </a>
            </div>
            <div className="info-block">
              <h1>OPENING HOURS</h1>
              <div className="opening">
                <ul>
                  {this.state.days.map((day, index) => {
                    if (index == new Date().getDay()) {
                      return <li style={{ color: "#ef233c" }}>{day}</li>;
                    } else {
                      return <li>{day}</li>;
                    }
                  })}
                </ul>
                <ul>
                  {this.state.hours.map((day, index) => {
                    if (index == new Date().getDay()) {
                      return <li style={{ color: "#ef233c" }}>{day}</li>;
                    } else {
                      return <li>{day}</li>;
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="maps">
            <img src={require("./images/sssss.png")}></img>
          </div>
        </div>
        <div className="footer">
          <div className="social">
            <a href="https://wa.me/6596373996">
              <FontAwesomeIcon size="2x" icon={faWhatsapp}></FontAwesomeIcon>
            </a>
            <a href="https://www.instagram.com/shh.upholstery/">
              <FontAwesomeIcon size="2x" icon={faInstagram}></FontAwesomeIcon>
            </a>
            <a href="https://www.facebook.com/sshupholstery/">
              <FontAwesomeIcon
                size="2x"
                icon={faFacebookSquare}
              ></FontAwesomeIcon>
            </a>
          </div>
          privacy policy
        </div>
      </div>
    );
  }
}

export default App;
