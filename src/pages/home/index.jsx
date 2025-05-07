import './home.css';

import { useEffect, useState } from 'react';

import { HOME_ABOUT_ME } from '../../constants';
import { LogoDetails, SectionLink } from '../../shared-ui';

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
          src="assets/generic/display-image.jpeg"
          alt="Display Image"
          className="display-image"
          loading="eager"
        />
      </div>
      <div className="home__details">
        <h1 className="home__name">Hi, I'm Krishna</h1>
        <h3 className="home__title">
          <span>Software Engineer</span>
          <span className="home__divider">|</span>
          <span>AI/ML Enthusiast</span>
        </h3>
        <p className="about-me">{HOME_ABOUT_ME}</p>
        <SectionLink path="/about" text="Know More" showArrow />
        <LogoDetails />
      </div>
    </div>
  );
};
