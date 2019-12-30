import React, { Component } from "react";
import "./App.css";
import Images from "./components/Images";
import { Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/gallery" component={Images}></Route>
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
            We stand by integrity and dedication to provide the finest
            craftsmanship to our customers.
          </p>
        </div>
        <div id="about" className="about section">
          <img src={require("./images/about.jpg")}></img>
          <div className="about-text">
            <h1>About SSH Upholstery</h1>
            <p>
              Established in 1980, SSH has a vast experience in upholstery for
              automotives. Over the years, we have added windscreen replacement
              and insurance claims into our services as well. <br></br>
              <br></br>Our track record over the years have proven our finest
              craftsmanship and precision for automotive upholstery.We have done
              projects ranging from classic vintage cars to luxury continental
              sports cars, so rest assured when you leave upholstery project
              with us.
            </p>
          </div>
        </div>
        <div id="services" className="services section">
          <h1>OUR SERVICES</h1>
          <div className="service-icons">
            <div className="serv-block">
              <img src="https://i.imgur.com/YLKeiSF.png"></img>
              <span>steering wheel</span>
            </div>
            <div className="serv-block">
              <img src="https://i.imgur.com/hwIPIgF.png"></img>
              <span>carpet</span>
            </div>
            <div className="serv-block">
              <img src="https://i.imgur.com/QYEZrKA.png"></img>
              <span>door panel</span>
            </div>
            <div className="serv-block">
              <img src="https://i.imgur.com/CDn66Jr.png"></img>
              <span>convertible top</span>
            </div>
            <div className="serv-block">
              <img src="https://i.imgur.com/gqWtkqv.png"></img>
              <span>roof-lining</span>
            </div>
            <div className="serv-block">
              <img src="https://i.imgur.com/1mUnZWH.png"></img>
              <span>car seats</span>
            </div>
            <div className="serv-block">
              <img src="https://i.imgur.com/H20zWiA.png"></img>
              <span>dashboard</span>
            </div>
            <div className="serv-block">
              <img src="https://i.imgur.com/UXadTYJ.png"></img>
              <span>gear knob</span>
            </div>
            <div className="serv-block">
              <img></img>
              <span>furniture</span>
            </div>
          </div>
        </div>
        <div className="insurance section">
          <h1>windscreen insurance</h1>
          <h3>windscreen insurance claims procedure</h3>
          <div className="ins-block">
            <img src="https://i.imgur.com/vYbdeIo.png"></img>
            <span>1. Come to our workshop with your insurance certificate</span>
          </div>
          <div className="ins-block">
            <img
              style={{ paddingLeft: 20, height: 160 }}
              src="https://i.imgur.com/mqeeKiJ.png"
            ></img>
            <span>2. We will submit your claims for approval</span>
          </div>
          <div className="ins-block">
            <img
              style={{ height: 100 }}
              src="https://i.imgur.com/KWrPPsG.png"
            ></img>
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
        <div className="partners section"></div>
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
            </form>
          </div>
          <div className="contact-info"></div>
        </div>
        <footer>
          designed by andreweijie|<a>privacy policy</a>
        </footer>
      </div>
    );
  }
}

export default App;
