import './logo-details.css';

import { LOGO_DETAILS } from '../../constants';

export const LogoDetails = () => {
  return (
    <div className="logo-container">
      {LOGO_DETAILS.map((logoDetails, index) => (
        <a
          key={index}
          className="logo-link"
          href={logoDetails.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoDetails.src} alt={logoDetails.alt} className="logo" loading="eager" />
        </a>
      ))}
    </div>
  );
};
