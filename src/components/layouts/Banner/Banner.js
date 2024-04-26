import React from "react";
import "./style.css";

const Banner = (props) => {
  return (
    <section className="banner full-width">
      <div className="container">
        <div className="banner__content">
          <div className="banner__heading">
            <h1>{props.BannerHeader}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              fugit
            </p>
          </div>
          <div className="breadcrumb">
            <div className="breadcrumb__home--link">
              <a href="/">Home</a>
            </div>
            <span></span>
            <div className="breadcrumb__current--page-link">About</div>
          </div>
          {/* .breadcrumb ends */}
        </div>
        {/* .banner__content ends */}
      </div>
      {/* .container ends */}
    </section>
  );
};

export default Banner;
