export const SkillsOverview = ({ imageSrc, imageAlt, techDomain, skillDetails, technologies }) => {
  return (
    <div className="skills-overview-container">
      <div className="skills-overview__image-container">
        <img src={imageSrc} alt={imageAlt} className="skills-overview__image" />
      </div>
      <div className="skills-overview__details-container">
        <div>
          <h2 className="skills-overview__heading">{techDomain}</h2>
          {skillDetails.map((detail, index) => (
            <p key={index} className="skills-overview__description">
              🔹 {detail}
            </p>
          ))}
        </div>
        <div>{technologies}</div>
      </div>
    </div>
  );
};
