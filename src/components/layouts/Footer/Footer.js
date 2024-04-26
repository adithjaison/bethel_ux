import React from "react";
import LogoSymbol from "../../../assets/images/logo-sm.png";
import "./style.css"
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer__top display-flex justify-align-center">
            <div className="footer__logo">
              <div className="logo-wrapper">
                <img src={LogoSymbol} alt="Small logo" />
              </div>
            </div>
          </div>
          {/* .footer__top ends */}
          <div className="footer__bottom">
            <div className="row align-items-center">
              <div className="flex-md-6 flex-lg-4">
                <div className="footer__info copyright">
                  © 2020 - Greater Love Church - All Rights Reserved
                </div>
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-4">
                <div className="footer__info credit">
                  Template designed and developed by Blazythemes
                </div>
              </div>
              {/* .flex-* ends */}
              <div className="flex-md-6 flex-lg-4">
                <div className="footer__info social">
                  <span>Follow us on social medias</span>
                  <div className="social__icons">
                    <a href="/">
                      <i className="ri-facebook-line" />
                    </a>
                    <a href="/">
                      <i className="ri-twitter-line" />
                    </a>
                    <a href="/">
                      <i className="ri-linkedin-line" />
                    </a>
                  </div>
                </div>
              </div>
              {/* .flex-* ends */}
            </div>
            {/* .row ends */}
          </div>
          {/* .footer__top ends */}
        </div>
        {/* .container ends */}
      </footer>
    </div>
  );
};

export default Footer;
