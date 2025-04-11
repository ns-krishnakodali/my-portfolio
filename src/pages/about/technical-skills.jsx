import { TECHNICAL_SKILLS } from '../../constants';

export const TechnicalSkills = () => {
  return (
    <div className="technical__skills-container">
      {TECHNICAL_SKILLS.map((tSkills, index) => (
        <div key={index} className="technical__skills-category-container">
          <h3 className="technical__skill-category">{tSkills.category}</h3>
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
