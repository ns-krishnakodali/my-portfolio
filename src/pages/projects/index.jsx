import './projects.css';

import { useState } from 'react';

import { ProjectCard } from './project-card';

import {
  PROJECTS_REPO_LINK,
  PROJECTS_DETAILS,
  MY_PROJECT_DESCRIPTION,
  PROJECT_CATEGORIES,
} from '../../constants/';
import { IntroSection, ButtonLink, SectionLink } from '../../shared-ui';
import { removeNonAlphabets } from '../../utils';

export const Projects = () => {
  const [projectCategory, setProjectCategory] = useState('all');

  return (
    <div className="project">
      <IntroSection
        imageSrc="assets/generic/projects-image.webp"
        imageAlt="Project Image"
        imageClass="project__landing-image"
        introHeading="My Projects"
        introContent={MY_PROJECT_DESCRIPTION}
      />
      <div className="project__filter no-print">
        <div className="project__filter-categories">
          {PROJECT_CATEGORIES.map((category, index) => (
            <button
              key={index}
              className={`project__filter-button ${
                projectCategory === removeNonAlphabets(category)
                  ? 'project__filter-button--active'
                  : ''
              }`}
              onClick={() => setProjectCategory(removeNonAlphabets(category))}
              aria-pressed={projectCategory === removeNonAlphabets(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="project__details-container">
        <div className="project__details-inner-container">
          {PROJECTS_DETAILS.filter(
            (projectDetails) =>
              projectCategory === 'all' || projectDetails.categories.includes(projectCategory)
          ).map((projectDetails, index) => (
            <ProjectCard key={index} details={projectDetails} />
          ))}
        </div>
      </div>
      <div className="more-projects no-print">
        <ButtonLink
          id="project-link"
          link={PROJECTS_REPO_LINK}
          text="More Projects"
          displayGithub={false}
        />
      </div>
      <div className="next-section-link no-print">
        <SectionLink path="/education" text="My Education" showArrow />
      </div>
    </div>
  );
};
