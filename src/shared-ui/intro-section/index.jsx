import './intro-section.css';

export const IntroSection = ({ imageSrc, imageAlt, imageClass, introHeading, introContent }) => {
  return (
    <div className="section-container">
      <div className="section__image-container">
        <img src={imageSrc} alt={imageAlt} className={imageClass} loading="eager" />
      </div>
      <div className="section__details">
        <h1 className="section__heading">{introHeading}</h1>
        <p className="section__content">{introContent}</p>
      </div>
    </div>
  );
};
