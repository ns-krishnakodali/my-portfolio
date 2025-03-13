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
          src={`src/assets/icons/${expandCard ? 'minus' : 'plus'}-icon.svg`}
          width={12}
          height={12}
        />
      </div>
      {expandCard && (
        <div ref={cardRef} tabIndex={-1} className="experience__cards">
          {details.map((detail, index) => (
            <div key={index} className="experience__card-container">
              <div className="experience__card-image">
                <a target="_blank" rel="noopener noreferrer" href={detail.companyURL}>
                  <img
                    src={detail.imageSrc}
                    alt={detail.imageAlt}
                    width={detail.imageWidth}
                    height={36}
                  />
                </a>
              </div>
              <div className="experience__card-details">
                <div className="experience__card-headings">
                  <div className="experience__company-details">
                    <h3 className="position">{detail.position}</h3>
                    <p className="company">{detail.company}</p>
                  </div>
                  <div className="experience__card-geotime">
                    <p className="experience__geotime-point">{detail.date}</p>
                    <p className="experience__geotime-point">{detail.location}</p>
                  </div>
                </div>
                <div className="experience__card-points">
                  {detail.ePoints?.map((ePoint, index) => (
                    <p key={index} className="experience__card-point">
                      {ePoint}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
