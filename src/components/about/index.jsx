import './about.css';

import { MY_BACKGROUND, SKILLS_OVERVIEW } from '../../constants';
import { IntroSection } from '../../shared-ui';
import { SkillsOverview } from './skills-overview';

export const About = () => {
  return (
    <div className="about">
      <div className="about__background-container">
        <h1 className="about__heading">My Background</h1>
        <p className="about__background">{MY_BACKGROUND}</p>
      </div>
      <div>
        <h1 className="about__heading">What I Do</h1>
        <div>
          {SKILLS_OVERVIEW.map((overview, index) => (
            <SkillsOverview key={index} {...overview} />
          ))}
        </div>
      </div>
    </div>
  );
};
