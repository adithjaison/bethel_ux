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
  useEffect(() => {
    AOS.init({ once: true });
    return () => AOS.refresh();
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
            <button className={`header__mobile--icon ${isExpanded ? 'rotate' : ''}`}
                    aria-expanded={isExpanded}
                    onClick={toggleMenu}
                    data-toggle="mobile-menu">
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </button>
          </div>
          <ul className={`header__navitems show-on-lg ${isExpanded ? 'active' : ''}`} id="mobile-menu">
            <li className="header__extra">
              <div className="cta">
                <a href="donations.html" className="button button-block-sm">Donate</a>
              </div>
            </li>
            <li className="header__list active"><a href="/">Home</a></li>
            <li className="header__list"><a href="/about">About</a></li>
            <li className="header__list"><a href="/sermons">Sermons</a></li>
            <li className="header__list"><a href="/ministries">Ministries</a></li>
            <li className="header__list"><a href="/events">Events</a></li>
            <li className="header__list"><a href="/blog">Blog</a></li>
            <li className="header__list"><a href="/contact">Contact</a></li>
          </ul>
          <div className="header__extra desktop-version">
            <div className="cta hide-on-sm show-on-lg">
              <a href="donations.html" className="button">Donate</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
