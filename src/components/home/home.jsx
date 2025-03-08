import './home.css'

import { useEffect, useState } from 'react'

import { HOME_ABOUT_ME } from '../../constants'

export const Home = () => {
  const [navbarHeight, setNavbarHeight] = useState(0)

  useEffect(() => {
    const navbar = document.getElementById('navbar')
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight)
    }

    const handleResize = () => {
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight)
      }
    }

    window?.addEventListener('resize', handleResize)
    return () => {
      window?.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div id="home" className="home" style={{ height: `calc(100vh - ${navbarHeight}px)` }}>
      <div className="home_image">
        <img src="src/assets/profile-image.jpg" alt="Profile" className="profile-image" />
      </div>
      <div className="home_details">
        <h2 className="name">Krishna Kodali</h2>
        <h4 className="title">Software Engineer</h4>
        <p className="about-me">{HOME_ABOUT_ME}</p>
        <div className="logo-container">
          <a
            className="logo-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/KrishnaKodali99"
          >
            <img src="src/assets/github-logo.svg" alt="GitHub Logo" className="logo" />
          </a>
          <a
            className="logo-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/krishnakodali9/"
          >
            <img src="src/assets/linkedin-logo.png" alt="LinkedIn Logo" className="logo" />
          </a>
          <a
            className="logo-link"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:krishnakodali81@gmail.com"
          >
            <img src="src/assets/gmail-logo.png" alt="Gmail Logo" className="logo" />
          </a>
          <a
            className="logo-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@krishnakodali9"
          >
            <img src="src/assets/medium-logo.png" alt="Medium Logo" className="logo" />
          </a>
          <a
            className="logo-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/KrishnaKod40236"
          >
            <img src="src/assets/x-logo.png" alt="X Logo" className="logo" />
          </a>
        </div>
      </div>
    </div>
  )
}
