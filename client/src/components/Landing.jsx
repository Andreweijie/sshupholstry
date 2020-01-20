import React, { Component } from "react";
import InfiniteCarousel from "react-leaf-carousel";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div className="hero section">
          <img className="logo" src={require("../images/logo.svg")}></img>
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
              <img src="https://i.imgur.com/1mUnZWH.png"></img>
              <span>car seats</span>
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
              <img src="https://i.imgur.com/iauq5VJ.png"></img>
              <span>door panel</span>
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
      </div>
    );
  }
}
