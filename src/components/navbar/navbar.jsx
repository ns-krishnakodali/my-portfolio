import "./navbar.css"

export const Navbar = () => {
  return (
    <nav id="navbar" className="navbar">
      <ul>
        <li><a href="#welcome">Welcome</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#expertise">Expertise</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};
