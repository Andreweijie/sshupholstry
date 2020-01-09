import React, { Component } from "react";
import InfiniteCarousel from "react-leaf-carousel";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div className="hero section">
          <h2>sinhockheng</h2>
          <h1>upholstry</h1>
          <p>
            We stand by integrity and dedication to provide the finest
            craftsmanship to our customers.
          </p>
        </div>
        <div id="about" className="about section">
          <img src={require("../images/about.jpg")}></img>
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
              <img src="https://i.imgur.com/EKD7rlJ.png"></img>
              <span>roof-lining</span>
            </div>
            <div className="serv-block">
              <img src="https://i.imgur.com/4fdk0AU.png"></img>
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
              <img src="https://i.imgur.com/YLKeiSF.png"></img>
              <span>steering wheel</span>
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
              <img src="https://i.imgur.com/MeKuPy6.png"></img>
              <span>A/B/C Pillar</span>
            </div>

            <div className="serv-block">
              <img src="https://i.imgur.com/nMuwvAs.png"></img>
              <span>furniture</span>
            </div>
            <div className="serv-block">
              <img src="https://i.imgur.com/uqMoSyA.png"></img>
              <span>sun visor</span>
            </div>
            <div className="serv-block">
              <img src="https://i.imgur.com/UXadTYJ.png"></img>
              <span>gear knob</span>
            </div>
            <div className="serv-block">
              <img src="https://i.imgur.com/geMNSEv.png"></img>
              <span>van interior</span>
            </div>
          </div>
        </div>
        <div className="insurance section">
          <h1>windscreen insurance</h1>
          <h3>windscreen insurance claims procedure</h3>
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
          <InfiniteCarousel
            breakpoints={[
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
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
            dots={true}
            showSides={true}
            sidesOpacity={0.5}
            sideSize={0.1}
            slidesToScroll={1}
            slidesToShow={3}
            scrollOnDevice={true}
          >
            <div>
              <img alt="" src="https://i.imgur.com/o8ktxb7.png" />
            </div>
            <div>
              <img alt="" src="https://i.imgur.com/A4FUfBl.png" />
            </div>

            <div>
              <img alt="" src="https://i.imgur.com/HhobUPl.png" />
            </div>
            <div>
              <img alt="" src="https://i.imgur.com/toRzEki.png" />
            </div>
            <div>
              <img alt="" src="https://i.imgur.com/5At9TWy.png" />
            </div>
            <div>
              <img alt="" src="https://i.imgur.com/bbIiTub.png" />
            </div>
            <div>
              <img alt="" src="https://i.imgur.com/N292kqL.png" />
            </div>
            <div>
              <img alt="" src="https://i.imgur.com/R2ZGgrQ.png" />
            </div>
            <div>
              <img alt="" src="https://i.imgur.com/jSFgrVc.png" />
            </div>
            <div>
              <img alt="" src="https://i.imgur.com/LY6dFVh.png" />
            </div>
          </InfiniteCarousel>
        </div>
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
          <div className="contact-info">
            <h4>
              Address:
              <a
                target="#"
                href="https://www.google.com/maps/place/Sin+Hock+Heng+Upholstery/@1.3586024,103.836656,17z/data=!3m1!4b1!4m5!3m4!1s0x31da1724089c4d9b:0x3fd503e1536b2410!8m2!3d1.3586024!4d103.8388447"
              >
                7 Sin Ming Industrial Estate Sector C, #01-90, Singapore 575642
              </a>
            </h4>
            <h4>Telephone: 64548160, 64548179</h4>
            <img
              style={{ height: 400 }}
              src={require("../images/Capture.PNG")}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
