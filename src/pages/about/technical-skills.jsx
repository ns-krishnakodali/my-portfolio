import { TECHNICAL_SKILLS } from '../../constants';

export const TechnicalSkills = () => {
  return (
    <div className="technical__skills-container">
      {TECHNICAL_SKILLS.map((tSkills, index) => (
        <div key={index} className="technical__skills-category-container">
          <div className="technical__skill-category">
            <img
              src="assets/icons/stack-icon.svg"
              alt="Tech Stack Icon"
              fetchPriority="high"
              width={20}
              height={20}
              loading="eager"
            />
            <h3 className="technical__skill-category-heading">{tSkills.category}</h3>
          </div>
          <div className="skills-container">
            {tSkills.skills.map((skill, sIndex) => (
              <div key={sIndex} className="skill-box">
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
