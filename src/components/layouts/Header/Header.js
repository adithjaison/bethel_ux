import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import LogoDark from "../../../assets/images/logo-dark.png"
import LogoLight from "../../../assets/images/logo-light.png"

const Header = () => {
  const headerRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const [scrollClasses, setScrollClasses] = useState("");
  const [brandLogoUrl, setBrandLogoUrl] = useState(LogoLight);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrollClasses("dark-text white-bg");
      setBrandLogoUrl(LogoDark);
    } else {
      setScrollClasses("");
      setBrandLogoUrl(LogoLight);
    }
  };

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  useEffect(() => {
    const header = headerRef.current;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`header transparent fixed light-text ${scrollClasses}`}
      data-onscroll-logo={LogoDark}
    >
      <div className="container">
        <nav className="header__nav bottom-nav">
          <div className="header__logo brand--logo">
            <a href="/">
              <img src={brandLogoUrl} alt="Greater Love Church" />
            </a>
          </div>
          <div className="header__mobile--opener hide-on-lg">
            <button
              className="header__mobile--icon"
              aria-expanded={menuOpened}
              aria-controls="mobile-menu"
              onClick={toggleMenu}
            >
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </button>
          </div>
          <ul
            className={`header__navitems ${menuOpened ? "show" : "hide-on-lg"}`}
            id="mobile-menu"
          >
            <li className="header__extra">
              <div className="cta">
                <a href="donations.html" className="button button-block-sm">
                  Donate
                </a>
              </div>
            </li>
            <li className="header__list active">
              <a href="/">Home</a>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
