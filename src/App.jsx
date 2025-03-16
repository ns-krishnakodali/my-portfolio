import './App.css';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Navbar, SplashScreen } from './components';
import { AppRoutes } from './routes';

const App = () => {
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
        <Router>
          <Navbar />
          <AppRoutes />
          {showScroll && (
            <button className="scroll-to-top" onClick={scrollToTop}>
              <img src="src/assets/icons/up-arrow-icon.svg" className="scroll-up" alt="Scroll Up" />
            </button>
          )}
        </Router>
      )}
    </>
  );
};

export default App;
