import './technology-icon.css';

import { cleanString } from '../../utils';

export const TechnologyIcon = ({ technology, iconWidth = 32, iconHeight = 32 }) => {
  return (
    <div className="technology-icon-container" data-technology={technology}>
      <img
        src={`src/assets/technology/${cleanString(technology)}-logo.svg`}
        alt={technology}
        width={iconWidth}
        height={iconHeight}
      />
      <span className="technology-mobile-label">{technology}</span>
    </div>
  );
};
