import './about.css';

import { SkillsOverview } from './skills-overview';

import { MY_BACKGROUND, SKILLS_OVERVIEW, TECHNICAL_SKILLS } from '../../constants';

export const About = () => {
  return (
    <div className="about">
      <div className="about__background-container">
        <h1 className="about__heading">My Background</h1>
        <p className="about__background">{MY_BACKGROUND}</p>
      </div>
      <div>
        <h1 className="about__heading">What I Do</h1>
        <div className="about__skills-overview-container">
          {SKILLS_OVERVIEW.map((overview, index) => (
            <SkillsOverview key={index} {...overview} />
          ))}
        </div>
      </div>
      <div className="technical__skills">
        <h1 className="about__heading">Technical Skills</h1>
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
      </div>
    </div>
  );
};
