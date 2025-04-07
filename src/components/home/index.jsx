import './home.css';

import { useEffect, useState } from 'react';

import { HOME_ABOUT_ME } from '../../constants';
import { LogoDetails } from '../../shared-ui';

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
    <div
      id="home"
      className="home-container"
      style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}
    >
      <div className="home__image">
        <img
          src="src/assets/generic/profile-image.jpg"
          alt="Profile"
          className="profile-image"
          loading="eager"
        />
      </div>
      <div className="home__details">
        <h2 className="home__name">Hi, I'm Krishna</h2>
        <h4 className="home__title">Software Engineer | AI/ML Enthusiast</h4>
        <p className="about-me">{HOME_ABOUT_ME}</p>
        <a className="about-link" href="/about">
          Know More
          <img
            src="src/assets/icons/right-arrow-icon.svg"
            alt="Right Arrow"
            className="home__right-arrow-icon"
            width={16}
            height={16}
          />
        </a>
        <LogoDetails />
      </div>
    </div>
  );
};
