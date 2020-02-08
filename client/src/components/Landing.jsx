import React, { Component } from "react";
import InfiniteCarousel from "react-leaf-carousel";
import Nav from "./Nav";
//<img className="logo" src={require("../images/logo.svg")}></img>

export default class Landing extends Component {
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
      <div>
        <div className="hero section">
          <Nav></Nav>
          <h2>sinhockheng</h2>
          <h1>upholstry</h1>
        </div>
        <div id="about" className="about section">
          <div className="about-info">
            <img src={require("../images/about.jpg")}></img>
            <div className="about-text">
              <h1>About SSH Upholstery</h1>
              <p>
                Established in 1980, SSH has a vast experience in upholstery for
                automotives. Over the years, we have added windscreen
                replacement and insurance claims into our services as well.
                <br></br>
                <br></br>Our track record over the years have proven our finest
                craftsmanship and precision for automotive upholstery.We have
                done projects ranging from classic vintage cars to luxury
                continental sports cars, so rest assured when you leave
                upholstery project with us.
              </p>
            </div>
          </div>
          <div className="about-company">
            <h1>
              <span>mission</span>We stand by integrity and dedication to
              provide the finest craftsmanship to our customers.
            </h1>
            <h1>
              <span>vision</span>Bring innovation and leading edge upholstery
              design to every automotive in the community
            </h1>
          </div>
        </div>
        <div id="services" className="services section">
          <h1>OUR SERVICES</h1>
          <div className="service-icons">
            <div className="serv-block">
              <img src={require("../images/svg/car-roof.svg")}></img>
              <span>roof-lining</span>
            </div>
            <div className="serv-block">
              <img src={require("../images/svg/car-pet.svg")}></img>
              <span>carpet</span>
            </div>
            <div className="serv-block">
              <img src={require("../images/svg/car-seat.svg")}></img>
              <span>car seats</span>
            </div>
            <div className="serv-block">
              <img src={require("../images/svg/car-top.svg")}></img>
              <span>convertible top</span>
            </div>
            <div className="serv-block">
              <img src={require("../images/svg/car-wheel.svg")}></img>
              <span>steering wheel</span>
            </div>
            <div className="serv-block">
              <img src={require("../images/svg/car-door.svg")}></img>
              <span>door panel</span>
            </div>
            <div className="serv-block">
              <img src={require("../images/svg/car-dash.svg")}></img>
              <span>dashboard</span>
            </div>
            <div className="serv-block">
              <img src={require("../images/svg/car-pillar.svg")}></img>
              <span>A/B/C Pillar</span>
            </div>

            <div className="serv-block">
              <img src={require("../images/svg/car-furniture.svg")}></img>
              <span>furniture</span>
            </div>
            <div className="serv-block">
              <img src={require("../images/svg/car-visor.svg")}></img>
              <span>sun visor</span>
            </div>
            <div className="serv-block">
              <img src={require("../images/svg/car-knob.svg")}></img>
              <span>gear knob</span>
            </div>
            <div className="serv-block">
              <img src={require("../images/svg/car-van.svg")}></img>
              <span>van interior</span>
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
        <div className="insurance section">
          <h1>windscreen insurance</h1>

          <div className="ins-grid">
            <div className="ins-block">
              <img src="https://i.imgur.com/vYbdeIo.png"></img>
              <span>
                1. Come to our workshop with your insurance certificate
              </span>
            </div>
            <div className="ins-block">
              <img src="https://i.imgur.com/mqeeKiJ.png"></img>
              <span>2. We will submit your claims for approval</span>
            </div>
            <div className="ins-block">
              <img src="https://i.imgur.com/KWrPPsG.png"></img>
              <span>
                3. Once it is approved, we will commence work to remove the
                damaged windscreen
              </span>
            </div>
            <div className="ins-block">
              <img src="https://i.imgur.com/YLKeiSF.png"></img>
              <span>
                4. After 3-4 hours, your vehicle is ready for collection!
              </span>
            </div>
          </div>
        </div>
        <div className="partners section">
          <h1 style={{ textAlign: "center" }}>Insurance Partners</h1>
          <InfiniteCarousel
            breakpoints={[
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              }
            ]}
            dots={false}
            showSides={false}
            sidesOpacity={0.5}
            sideSize={0.1}
            slidesToScroll={1}
            slidesToShow={3}
            scrollOnDevice={true}
          >
            <div>
              <img alt="" src={require("../images/ins/great.png")} />
            </div>
            <div>
              <img alt="" src={require("../images/ins/ntuc.png")} />
            </div>
            <div>
              <img alt="" src={require("../images/ins/taiping.png")} />
            </div>
            <div>
              <img alt="" src={require("../images/ins/aviva.png")} />
            </div>
            <div>
              <img alt="" src={require("../images/ins/aig.png")} />
            </div>
            <div>
              <img alt="" src={require("../images/ins/ergo.png")} />
            </div>
            <div>
              <img alt="" src={require("../images/ins/etiqa.png")} />
            </div>
            <div>
              <img alt="" src={require("../images/ins/hsbc.png")} />
            </div>
            <div>
              <img alt="" src={require("../images/ins/tokio.png")} />
            </div>
            <div>
              <img alt="" src={require("../images/ins/msig.png")} />
            </div>
          </InfiniteCarousel>
        </div>
      </div>
    );
  }
}
