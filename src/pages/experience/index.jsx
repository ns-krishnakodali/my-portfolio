import './experience.css';

import { ExperienceCard } from './experience-card';

import { EXPERIENCE_DETAILS, MY_EXPERIENCE } from '../../constants';
import { IntroSection, SectionLink } from '../../shared-ui';

export const Experience = () => {
  return (
    <div className="experience">
      <IntroSection
        imageSrc="assets/generic/experience-image.webp"
        imageAlt="Experience Image"
        imageClass="experience__landing-image"
        introHeading="Experience"
        introContent={MY_EXPERIENCE}
      />
      <div className="experiences">
        {EXPERIENCE_DETAILS.map((experience) =>
          Object.entries(experience).map(([title, details], index) => (
            <ExperienceCard key={index} title={title} details={details} />
          ))
        )}
      </div>
      <div className="next-section-link no-print">
        <SectionLink path="/projects" text="My Projects" showArrow />
      </div>
    </div>
  );
};
