import './section-link.css';

import { Link } from 'react-router-dom';

export const SectionLink = ({ path, text, showArrow = false }) => {
  return (
    <Link className="section-link" to={path}>
      {text}
      {showArrow && (
        <img
          src="assets/icons/right-arrow-icon.svg"
          alt="Right Arrow"
          className="section-link__right-arrow-icon"
          width={16}
          height={16}
        />
      )}
    </Link>
  );
};
