import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
const mapStyles = {
  width: "100%",
  height: "100%"
};

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="contact section">
        <div className="contact-form">
          <h1>CONTACT US</h1>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text"></input>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email"></input>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea></textarea>
            </div>
            <button>SUBMIT</button>
          </form>
        </div>
        <div className="contact-info">
          <h4 style={{ textTransform: "uppercase" }}>
            <a
              target="#"
              href="https://www.google.com/maps/place/Sin+Hock+Heng+Upholstery/@1.3586024,103.836656,17z/data=!3m1!4b1!4m5!3m4!1s0x31da1724089c4d9b:0x3fd503e1536b2410!8m2!3d1.3586024!4d103.8388447"
            >
              7 Sin Ming Industrial Estate Sector C, #01-90, Singapore 575642
            </a>
          </h4>
          <h4>Telephone: 64548160, 64548179</h4>
          <h4>
            Pick up and delivery Skip the hassle! Let us pick up your vehicle at
            home and return it to you when it is completed. <br></br>Book an
            appointment for a Pick Up & Delivery service @ S$50 round trip
          </h4>
          <button>Book Now</button>
        </div>

        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: -1.2884,
            lng: 36.8233
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAdQczZyOmLX0jgr0UjW5FegcgF5Bn2Lpc"
})(Contact);
