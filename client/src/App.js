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
    vehicleNo: "",
    vehicleModel: "",
    service: "ARM REST",
    remarks: "",
    date: "",
    time: "9AM-12PM",
    loading: "Book Now",
    button: "Submit",
    services: [
      "ARM REST",
      "CARPET",
      "DOOR PANEL",
      "DASHBOARD",
      "FURNITURE",
      "GEAR KNOB",
      "HANDBRAKE",
      "ROOF-LINING",
      "STEERING WHEEL",
      "SUN VISOR",
      "SOFT CONVERTIBLE TOP",
      "SEATS",
      "VAN INTERIOR CONVERSION",
      "INSURANCE CLAIM",
      "V-KOOL"
    ],
    timings: [
      "9AM-10AM",
      "10AM-11AM",
      "1PM-2PM",
      "3PM-4PM",
      "4PM-5PM",
      "5PM-6PM"
    ],
    weekendTiming: ["9AM-10AM", "10AM-11AM", "1PM-2PM", "3PM-4PM", "4PM-5PM"],
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

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value }, () => {
      let selected = new Date(this.state.date).getDay();
      if (selected === 0) {
        message("Sorry, we are closed on Sundays", "error");
        this.setState({
          date: ""
        });
      }
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      button: "Submitting..."
    });
    let url;
    let newAppt;
    if (!this.state.appt) {
      newAppt = {
        name: this.state.name,
        email: this.state.email,
        mobile: this.state.mobile,
        vehicleNo: this.state.vehicleNo,
        vehicleModel: this.state.vehicleModel,
        service: this.state.service,
        date: this.state.date,
        time: this.state.time,
        remarks: this.state.remarks
      };
      url = "https://andreweijie.tech/backend/shh/appointment";
    } else {
      newAppt = {
        name: this.state.name,
        email: this.state.email,
        mobile: this.state.mobile
      };
      url = "https://andreweijie.tech/backend/shh/delivery";
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newAppt)
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          this.setState(
            {
              button: "Submit"
            },
            () => {
              message("Successfully Submitted!", "success");
            }
          );
        }
      });
  };
  render() {
    let toDay = new Date(this.state.date);
    let dayToday = toDay.getDay();
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
              Established in 1980, SHH has a vast experience in upholstery for
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
            <img src={require("./images/about2.jpg")}></img>
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
            <h1>OUR SERVICES</h1>
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
              <li>VAN INTERIOR</li>
              <li>SEATS</li>
              <li>SOFT CONVERTIBLE TOP</li>
              <li>WINDSCREEN & CLAIMS</li>
            </ul>
            <h2>
              Click{" "}
              <a href="https://www.facebook.com/pg/sshupholstery/photos/?ref=page_internal">
                here
              </a>{" "}
              to view pictures of our work at our Facebook page!
            </h2>
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
        <div id="book" className="booking section">
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
            {this.state.appt ? (
              <div className="delivery-msg">
                <h3>
                  Let us pick up your vehicle at home and return it to you when
                  it is completed. <br></br>Book an appointment for a Pick Up &
                  Delivery service @ S$50 round trip *Terms & Conditions apply.
                  <br></br>Pick Up & Delivery service @ S$50 roundtrip
                </h3>
              </div>
            ) : null}

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
                    value={this.state.vehicleNo}
                    onChange={this.onChange}
                    id="vehicleNo"
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
                    {this.state.services.map(service => {
                      return <option>{service}</option>;
                    })}
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
                    {dayToday !== 6
                      ? this.state.timings.map(timing => {
                          return <option>{timing}</option>;
                        })
                      : this.state.weekendTiming.map(timing => {
                          return <option>{timing}</option>;
                        })}
                  </select>
                </div>
              ) : null}
              {!this.state.appt ? (
                <div className="form-group full-width">
                  <label>Message*</label>
                  <textarea
                    required
                    value={this.state.remarks}
                    onChange={this.onChange}
                    id="remarks"
                    type="text"
                  ></textarea>
                </div>
              ) : null}
              <button onClick={this.handleSubmit} className="full-width">
                {this.state.button}
              </button>
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
          <h1 style={{ textAlign: "center" }}>And more!</h1>
          <div className="ins-proc">
            <h1>Claims Procedure</h1>
            <h3>Come to our workshop with your insurance certificate</h3>
            <hr></hr>
            <h3>We will submit your claims for approval</h3>
            <hr></hr>
            <h3>
              Once it is approved, we will commence work to remove the damaged
              windscreen
            </h3>
            <hr></hr>
            <h3>After 3-4 hours, your vehicle is ready for collection!</h3>
            <hr></hr>
            <h5>*We only do insurance claims for windscreens</h5>
          </div>
        </div>
        <div id="find" className="find section">
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
          <a href="http://privacy-policy.shhupholstery.com/">privacy policy</a>
        </div>
      </div>
    );
  }
}

export default App;
