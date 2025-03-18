import './logo-details.css';

import { LOGO_DETAILS } from '../../constants';

export const LogoDetails = () => {
  return (
    <div className="logo-container">
      {LOGO_DETAILS.map((logoDetails, index) => (
        <a
          key={index}
          className="logo-link"
          target="_blank"
          rel="noopener noreferrer"
          href={logoDetails.href}
        >
          <img src={logoDetails.src} alt={logoDetails.alt} className="logo" loading="eager" />
        </a>
      ))}
    </div>
  );
};
