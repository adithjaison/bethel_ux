import React from "react";
import "./style.css"

const Hero = () => {
  return (
    <div>
      <section className="hero full-width">
        <div className="hero__carousel owl-carousel" id="hero-carousel">
          {/* Homepage slider */}
          <div
            className="slide display-flex-column justify-align-center"
            id="first-slide"
          >
            <div className="container">
              <div className="hero__content text-center">
                <span className="hero__intro">We are glad you are here</span>
                <h1>Welcome to Greater Love Church</h1>
                <p className="leading">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                  veniam vitae repudiandae, reprehenderit ducimus at.
                </p>
                <div className="hero__cta">
                  <a href="/" className="button">
                    Learn more
                  </a>
                </div>
              </div>
              {/* .hero__content */}
            </div>
            {/* .container ends */}
          </div>
          {/* #first-slide ends */}
          <div
            className="slide display-flex-column justify-align-center"
            id="second-slide"
          >
            <div className="container">
              <div className="hero__content text-center">
                <span className="hero__intro">We are glad you are here</span>
                <h1>Come fellowship with us</h1>
                <p className="leading">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                  veniam vitae repudiandae, reprehenderit ducimus at.
                </p>
                <div className="hero__cta">
                  <a href="/" className="button">
                    Learn more
                  </a>
                </div>
              </div>
              {/* .hero__content */}
            </div>
            {/* .container ends */}
          </div>
          {/* #second-slide ends */}
        </div>{" "}
        {/* #hero-carousel ends */}
      </section>
    </div>
  );
};

export default Hero;
