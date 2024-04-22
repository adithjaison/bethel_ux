import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import LogoDark from "../../../assets/images/logo-dark.png"
import LogoLight from "../../../assets/images/logo-light.png"
import 'aos/dist/aos.css';
import './style.css';

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => setScrollY(window.scrollY);
  // Initialize AOS plugin
  useEffect(() => {
    AOS.init({ once: true });
    return () => AOS.refresh(); // Refresh AOS on component unmount
  }, []);
  useEffect(() => {
    const handleScrollEvents = () => handleScroll();

    window.addEventListener('scroll', handleScrollEvents);
    return () => window.removeEventListener('scroll', handleScrollEvents);
  }, []);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
    document.body.classList.toggle('overflow-hidden');
  };

  const isScrolled = scrollY > 100;
  const scrollClasses = 'dark-text white-bg';
  const originalLogo = LogoLight;
  const scrolledLogo = LogoDark;

  return (
    <>
      <header className={`header transparent fixed light-text ${isScrolled ? scrollClasses : ''}`}
        data-onscroll-logo={scrolledLogo}>
        <div className="container">
          <nav className="header__nav bottom-nav">
            <div className="header__logo brand--logo">
              <a href="/">
                <img src={isScrolled ? scrolledLogo : originalLogo} alt="Logo" />
              </a>
            </div>
            <div className="header__mobile--opener hide-on-lg">
              <button
                className={`header__mobile--icon ${isExpanded ? 'rotate' : ''}`}
                aria-expanded={isExpanded}
                onClick={toggleMenu}
                data-toggle="mobile-menu">
                <span className="line" />
                <span className="line" />
                <span className="line" />
              </button>
            </div>
            <ul className={`header__navitems show-on-lg ${isExpanded ? 'active' : ''}`} id="mobile-menu">
              {/* Contains donation button for mobile and tablet devices */}
              <li className="header__extra">
                <div className="cta">
                  <a href="donations.html" className="button button-block-sm">
                    Donate
                  </a>
                </div>
              </li>
              {/* .header__extra ends */}
              <li className="header__list active">
                <a href="/">Home</a>
              </li>
              {/* .header__list ends */}
              <li className="header__list">
                <a href="about.html">About</a>
              </li>
              {/* .header__list ends */}
              <li className="header__list">
                <a href="" className="dropdown-link">
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
                {/* .header__submenu ends */}
              </li>
              {/* .header__list ends */}
              <li className="header__list">
                <a href="" className="dropdown-link">
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
                {/* .header__submenu ends */}
              </li>
              {/* .header__list ends */}
              <li className="header__list">
                <a href="" className="dropdown-link">
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
                {/* .header__submenu ends */}
              </li>
              {/* .header__list ends */}
              <li className="header__list">
                <a href="" className="dropdown-link">
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
                {/* .header__submenu ends */}
              </li>
              {/* .header__list ends */}
              <li className="header__list">
                <a href="" className="dropdown-link">
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
                {/* .header__submenu ends */}
              </li>
              {/* .header__list ends */}
              <li className="header__list">
                <a href="contact.html">Contact</a>
              </li>
              {/* .header__list ends */}
            </ul>
            {/* .header__navitems ends */}
            {/* Contains Shopping cart and donation button */}
            <div className="header__extra desktop-version">
              <div className="cta hide-on-sm show-on-lg">
                <a href="donations.html" className="button">
                  Donate
                </a>
              </div>
            </div>
            {/* .header__extra ends */}
          </nav>
          {/* .header__nav ends */}
        </div>
        {/* .container ends */}
      </header>
      {/* .header ends */}
      {/* =================== SITE HEADER ENDS ============================= */}
    </>
  );
};

export default Header;
