import './about.css';

import { SkillsOverview } from './skills-overview';
import { TechnicalSkills } from './technical-skills';

import { ABOUT_MYSELF, SKILLS_OVERVIEW } from '../../constants';

export const About = () => {
  return (
    <div className="about">
      <div className="about__background-container">
        <h1 className="about__heading">About Myself</h1>
        <p className="about__background">{ABOUT_MYSELF}</p>
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
        <TechnicalSkills />
      </div>
    </div>
  );
};
