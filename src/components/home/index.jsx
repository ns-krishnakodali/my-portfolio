import './home.css';

import { useEffect, useState } from 'react';

import { HOME_ABOUT_ME, HOME_LOGO_DETAILS } from '../../constants';

export const Home = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }

    const handleResize = () => {
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    window?.addEventListener('resize', handleResize);
    return () => {
      window?.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="home" className="home" style={{ height: `calc(100vh - ${navbarHeight}px)` }}>
      <div className="home__image">
        <img src="src/assets/generic/profile-image.jpg" alt="Profile" className="profile-image" />
      </div>
      <div className="home__details">
        <h2 className="name">Krishna Kodali</h2>
        <h4 className="title">Software Engineer</h4>
        <p className="about-me">{HOME_ABOUT_ME}</p>
        <a className="about-link" href="/about">
          Learn More
          <img
            src="src/assets/icons/right-arrow-icon.svg"
            alt="Right Arrow"
            className="home__right-arrow-icon"
            width={16}
            height={16}
          />
        </a>
        <div className="logo-container">
          {HOME_LOGO_DETAILS.map((logoDetails, index) => (
            <a
              key={index}
              className="logo-link"
              target="_blank"
              rel="noopener noreferrer"
              href={logoDetails.href}
            >
              <img src={logoDetails.src} alt={logoDetails.alt} className="logo" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
