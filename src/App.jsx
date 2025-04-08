import './App.css';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { SplashScreen } from './pages';
import { AppRoutes } from './routes';
import { Navbar } from './shared-ui';

const App = () => {
  const location = useLocation();
  const [showScroll, setShowScroll] = useState(false);
  const [loadSplashScreen, setLoadSplashScreen] = useState(
    !sessionStorage.getItem('splashScreenShown')
  );

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (loadSplashScreen) {
      setTimeout(() => {
        sessionStorage.setItem('splashScreenShown', true);
        setLoadSplashScreen(false);
      }, 1900);
    }
  }, [loadSplashScreen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {loadSplashScreen ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar />
          <AppRoutes />
          {showScroll && (
            <button className="scroll-to-top" onClick={scrollToTop}>
              <img src="src/assets/icons/up-arrow-icon.svg" className="scroll-up" alt="Scroll Up" />
            </button>
          )}
        </>
      )}
    </>
  );
};

export default App;
