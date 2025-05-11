import './about.css';

import { useEffect, useState } from 'react';

import { SkillsOverview } from './skills-overview';
import { TechnicalSkills } from './technical-skills';

import { ABOUT_MYSELF, SKILLS_OVERVIEW } from '../../constants';
import { Loader, SectionHeading, SectionLink } from '../../shared-ui';
import { formatText } from '../../utils';

export const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="about">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="about__background-container">
            <SectionHeading heading="About Myself" />
            <p className="about__background">
              {formatText(ABOUT_MYSELF).map((text, index) => {
                if (text.startsWith('<') && text.endsWith('>')) {
                  const displayText = text.replace(/<|>/g, '');
                  return (
                    <SectionLink
                      key={index}
                      path={`/${displayText.toLowerCase()}`}
                      text={displayText}
                    />
                  );
                }
                return text;
              })}
            </p>
          </div>
          <div>
            <SectionHeading className="about__heading" heading="What I Do" />
            <div className="about__skills-overview-container">
              {SKILLS_OVERVIEW.map((overview, index) => (
                <SkillsOverview key={index} {...overview} />
              ))}
            </div>
          </div>
          <div className="page-break technical__skills">
            <SectionHeading className="about__heading" heading="Technical Skills" />
            <TechnicalSkills />
          </div>
          <div className="next-section-link no-print">
            <SectionLink path="/experience" text="My Experience" showArrow />
          </div>
        </>
      )}
    </div>
  );
};
