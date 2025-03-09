import './not-found.css';

export const NotFound = () => {
  return (
    <div className="not-found">
      <h2 className="not-found__heading">
        Oops! Page Not Found
        <img src="src/assets/sad-face-icon.svg" alt="Sad Face" className="not-found__icon" />
      </h2>
      <p className="not-found__text">
        It looks like you've taken a wrong turn. The page you're looking for doesn’t exist or has
        been moved.
      </p>
      <ul className="not-found__links">
        <li>
          🔹 Go back to <a href="/">Home</a>
        </li>
        <li>
          🔹 Get in touch <a href="/contact-me">Contact Me</a>
        </li>
      </ul>
    </div>
  );
};
