import './about.css';

import { SkillsOverview } from './skills-overview';
import { TechnicalSkills } from './technical-skills';

import { ABOUT_MYSELF, SKILLS_OVERVIEW } from '../../constants';
import { SectionHeading } from '../../shared-ui';

export const About = () => {
  return (
    <div className="about">
      <div className="about__background-container">
        <SectionHeading heading="About Myself" />
        <p className="about__background">{ABOUT_MYSELF}</p>
      </div>
      <div>
        <SectionHeading className="about__heading" heading="What I Do" />
        <div className="about__skills-overview-container">
          {SKILLS_OVERVIEW.map((overview, index) => (
            <SkillsOverview key={index} {...overview} />
          ))}
        </div>
      </div>
      <div className="technical__skills">
        <SectionHeading className="about__heading" heading="Technical Skills" />
        <TechnicalSkills />
      </div>
    </div>
  );
};
