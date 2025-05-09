import './not-found.css';

import { Link } from 'react-router-dom';

import { NOT_FOUND_PAGE_INFO } from '../../constants';

export const NotFound = () => {
  return (
    <div className="not-found">
      <h2 className="not-found__heading">
        Oops! Page Not Found
        <img src="assets/icons/sad-face-icon.svg" alt="Sad Face" className="not-found__icon" />
      </h2>
      <p className="not-found__text">{NOT_FOUND_PAGE_INFO}</p>
      <ul className="not-found__links">
        <li>
          🔹Go back to <Link to="/">Home</Link>
        </li>
        <li>
          🔹Get in touch <Link to="/contact-me">Contact Me</Link>
        </li>
      </ul>
    </div>
  );
};
