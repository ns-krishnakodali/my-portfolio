import { TechnologyIcon } from '../../shared-ui';

export const SkillsOverview = ({ imageSrc, imageAlt, techDomain, skillDetails, technologies }) => {
  return (
    <div className="skills-overview-container">
      <div className="skills-overview__image-container">
        <img src={imageSrc} alt={imageAlt} className="skills-overview__image" loading="eager" />
      </div>
      <div className="skills-overview__details-container">
        <div>
          <h2 className="skills-overview__heading">{techDomain}</h2>
          <div className="skills-overview__description-container">
            {skillDetails.map((detail, index) => (
              <p key={index} className="skills-overview__description">
                🔹{detail}
              </p>
            ))}
          </div>
        </div>
        <div className="skills-overview__technologies-container">
          {technologies.map((technology, index) => (
            <TechnologyIcon key={index} technology={technology} />
          ))}
        </div>
      </div>
    </div>
  );
};
