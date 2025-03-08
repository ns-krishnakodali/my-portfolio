import './navbar.css'
import cx from 'classnames'

import { useEffect, useState } from 'react'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav id="navbar" className={cx('navbar', isScrolled && 'scrolled')}>
      <div className="navbar_menu" onClick={toggleMenu}>
        <img src="src/assets/hamburger-icon.svg" alt="Hamburger Icon" className="navbar_icon" />
      </div>
      <div>
      {isMenuOpen && (
        <div className="close-menu" onClick={toggleMenu}>
          <img src="src/assets/close-icon.svg" alt="Close Icon" className="navbar_icon" />
        </div>
      )}
        <ul className={cx(isMenuOpen && 'dropdown-menu')}>
          <li>
            <a href="/" className={cx('navbar_link', 'selected')}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="navbar_link">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="navbar_link">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="navbar_link">
              Projects
            </a>
          </li>
          <li>
            <a href="#education" className="navbar_link">
              Education
            </a>
          </li>
          <li>
            <a href="#contact" className="navbar_link">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
      <div className="chatbot-link">
        <a href="/" className="navbar_link">
          Ask Cooper
          <img
            src="src/assets/redirect-icon.png"
            alt="Redirect Icon"
            className={cx('navbar_icon', 'redirect-icon')}
          />
        </a>
      </div>
    </nav>
  )
}
