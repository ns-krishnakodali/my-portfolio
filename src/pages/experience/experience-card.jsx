import { useRef, useState } from 'react';

export const ExperienceCard = ({ title, details }) => {
  const [expandCard, setExpandCard] = useState(false);
  const cardRef = useRef(null);

  const toggleExpandCard = () => {
    setExpandCard((prev) => !prev);

    setTimeout(() => {
      if (!expandCard && cardRef.current) {
        cardRef.current.focus();
      }
    }, 0);
  };

  return (
    <div className="experience__card">
      <div
        className="experience__card-title-container"
        onClick={toggleExpandCard}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') toggleExpandCard();
        }}
      >
        <h2 className="experience__card-title">{title}</h2>
        <img
          src={`assets/icons/${expandCard ? 'minus' : 'plus'}-icon.svg`}
          alt={`${expandCard ? 'collapse' : 'expand'}`}
          width={12}
          height={12}
        />
      </div>
      {expandCard && (
        <div ref={cardRef} tabIndex={-1} className="experience__cards">
          {details.map((detail, index) => (
            <div key={index} className="experience__card-container">
              <div className="experience__card-image">
                <a href={detail.companyURL} target="_blank" rel="noopener noreferrer">
                  <img
                    src={detail.imageSrc}
                    alt={detail.imageAlt}
                    width={detail.imageWidth}
                    height={detail?.imageHeight || 36}
                    loading="eager"
                  />
                </a>
                <img
                  src="assets/icons/redirect-icon.png"
                  alt="Website Redirect"
                  className="website-redirect"
                />
              </div>
              <div className="experience__card-details">
                <div className="experience__card-headings">
                  <div className="experience__company-details">
                    <h3 className="position">{detail.position}</h3>
                    <h4 className="company">{detail.company}</h4>
                  </div>
                  <div className="experience__card-geotime">
                    <p className="experience__geotime-point">{detail.date}</p>
                    <p className="experience__geotime-point">{detail.location}</p>
                  </div>
                </div>
                <div className="experience__card-info">
                  <p className="experience__card-summary">{detail.summary}</p>
                  <div className="experience__card-techologies">
                    Key Technologies:
                    {detail?.technologies?.map((tech, index) => (
                      <span key={index} className="experience__card-skill-box">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
