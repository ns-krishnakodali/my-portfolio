import './navbar.css';
import cx from 'classnames';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { APP_SECTIONS } from '../../constants';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState('/');

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setSelectedSection(location?.pathname);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="navbar" className={cx('navbar', isScrolled && 'scrolled')}>
      <div className="navbar__menu" onClick={toggleMenu}>
        <img
          src="src/assets/icons/hamburger-icon.svg"
          alt="Hamburger Icon"
          className="navbar__icon"
        />
      </div>
      <div>
        {isMenuOpen && (
          <div className="close-menu" onClick={toggleMenu}>
            <img src="src/assets/icons/close-icon.svg" alt="Close Icon" className="navbar__icon" />
          </div>
        )}
        <ul className={cx(isMenuOpen && 'dropdown-menu')}>
          {APP_SECTIONS.map((section, index) => (
            <li key={index}>
              <a
                href={section.path}
                className={cx('navbar__link', section.path === selectedSection && 'selected')}
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="chatbot-link">
        <a href="/" className="navbar__link">
          Ask Cooper
          <img
            src="src/assets/icons/redirect-icon.png"
            alt="Redirect Icon"
            className={cx('navbar__icon', 'redirect-icon')}
          />
        </a>
      </div>
    </nav>
  );
};
