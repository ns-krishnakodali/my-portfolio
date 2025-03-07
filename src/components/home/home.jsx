import "./home.css";

import { useEffect, useState } from "react";

export const Home = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }

    const handleResize = () => {
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    window?.addEventListener("resize", handleResize);
    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="home-container"
      style={{ height: `calc(100vh - ${navbarHeight}px)` }}
    >
      <div>
      <img
        src="src/assets/profile-image.jpg"
        alt="Profile"
        className="profile-image"
      />
      </div>
      <div>
        Krishna Kodali
        <h2>Software Engineer</h2>
      </div>
    </div>
  );
};
