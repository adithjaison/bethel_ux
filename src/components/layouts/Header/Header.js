import React from "react";
import DarkLogo from "../../../assets/images/logo-dark.png";
import LightLogo from "../../../assets/images/logo-light.png";

const Header = () => {
  return (
    <header
      className="header transparent fixed light-text"
      data-onscroll-classes="dark-text white-bg"
      data-onscroll-logo={DarkLogo}
    >
      <div className="container">
        <nav className="header__nav bottom-nav">
          <div className="header__logo brand--logo">
            <a href="index.html">
              <img src={LightLogo} alt="Greater Love Church" />
            </a>
          </div>
          <div className="header__mobile--opener hide-on-lg">
            <button
              className="header__mobile--icon"
              aria-expanded="false"
              aria-controls="mobile-menu"
              data-toggle="mobile-menu"
            >
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </button>
          </div>
          <ul className="header__navitems show-on-lg" id="mobile-menu">
            <li className="header__extra">
              <div className="cta">
                <a href="donations.html" className="button button-block-sm">
                  Donate
                </a>
              </div>
            </li>
            <li className="header__list active">
              <a href="index.html">Home</a>
            </li>
            <li className="header__list">
              <a href="about.html">About</a>
            </li>
            <li className="header__list">
              <a href="/" className="dropdown-link">
                Sermons
              </a>
              <div className="header__submenu">
                <ul>
                  <li className="header__list">
                    <a href="sermons.html">Sermons</a>
                  </li>
                  <li className="header__list">
                    <a href="sermons-single.html">Sermons single</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header__list">
              <a href="/" className="dropdown-link">
                Ministries
              </a>
              <div className="header__submenu">
                <ul>
                  <li className="header__list">
                    <a href="ministries.html">Ministries</a>
                  </li>
                  <li className="header__list">
                    <a href="ministries-single.html">Ministries single</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header__list">
              <a href="/" className="dropdown-link">
                Events
              </a>
              <div className="header__submenu">
                <ul>
                  <li className="header__list">
                    <a href="events.html">Events</a>
                  </li>
                  <li className="header__list">
                    <a href="events-single.html">Events single</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header__list">
              <a href="/" className="dropdown-link">
                Pages
              </a>
              <div className="header__submenu">
                <ul>
                  <li className="header__list">
                    <a href="donations.html">Donations</a>
                  </li>
                  <li className="header__list">
                    <a href="staffs-single.html">Staffs single</a>
                  </li>
                  <li className="header__list">
                    <a href="elements.html">Elements</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header__list">
              <a href="/" className="dropdown-link">
                Blog
              </a>
              <div className="header__submenu">
                <ul>
                  <li className="header__list">
                    <a href="blog.html">Blog list</a>
                  </li>
                  <li className="header__list">
                    <a href="blog-single.html">Blog single</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header__list">
              <a href="contact.html">Contact</a>
            </li>
          </ul>
          <div className="header__extra desktop-version">
            <div className="cta hide-on-sm show-on-lg">
              <a href="donations.html" className="button">
                Donate
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;