import './intro-section.css';

import { SectionHeading } from '../section-heading';

export const IntroSection = ({ imageSrc, imageAlt, imageClass, introHeading, introContent }) => {
  return (
    <div className="intro-section-container">
      <div className="intro-section__image-container">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={imageClass}
          fetchPriority="high"
          loading="eager"
        />
      </div>
      <div className="intro-section__details">
        <SectionHeading heading={introHeading} />
        <p className="intro-section__content">{introContent}</p>
      </div>
    </div>
  );
};
