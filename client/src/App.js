import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav">
          <img></img>
          <nav className="links">
            <a>About</a>
            <a>Gallery</a>
            <a>Services</a>
            <a>Contact</a>
          </nav>
        </div>
        <div className="hero section">
          <h2>sinhockheng</h2>
          <h1>upholstry</h1>
          <p>
            we stand by integrity and dedication to provide the finest
            craftsmanship to our customers.
          </p>
        </div>
        <div className="about section">
          <img src={require("./images/about.jpg")}></img>
          <p>
            Established in 1980, SSH has a vast experience in upholstery for
            automotives. Over the years, we have added windscreen replacement
            and insurance claims into our services as well. <br></br>
            <br></br>Our track record over the years have proven our finest
            craftsmanship and precision for automotive upholstery.We have done
            projects ranging from classic vintage cars to luxury continental
            sports cars, so rest assured when you leave upholstery project with
            us.
          </p>
        </div>
        <div className="services section">
          <h1>OUR SERVICES</h1>
          <div className="service-icons">
            <div className="serv-block">
              <img></img>
              <span></span>
            </div>
            <div className="serv-block">
              <img></img>
              <span></span>
            </div>
            <div className="serv-block">
              <img></img>
              <span></span>
            </div>
            <div className="serv-block">
              <img></img>
              <span></span>
            </div>
            <div className="serv-block">
              <img></img>
              <span></span>
            </div>
            <div className="serv-block">
              <img></img>
              <span></span>
            </div>
            <div className="serv-block">
              <img></img>
              <span></span>
            </div>
            <div className="serv-block">
              <img></img>
              <span></span>
            </div>
            <div className="serv-block">
              <img></img>
              <span></span>
            </div>
          </div>
        </div>
        <div className="insurance section"></div>
        <div className="contact section"></div>
      </div>
    );
  }
}

export default App;
