import './projects.css';

import { useState } from 'react';

import { ProjectCard } from './project-card';

import {
  PROJECTS_REPO_LINK,
  PROJECTS_DETAILS,
  MY_PROJECT_DESCRIPTION,
  PROJECT_CATEGORIES,
} from '../../constants/';
import { IntroSection, LinkButton } from '../../shared-ui';
import { removeNonAlphabets } from '../../utils';

export const Projects = () => {
  const [projectCategory, setProjectCategory] = useState('all');

  return (
    <div className="project">
      <IntroSection
        imageSrc="src/assets/generic/projects-image.png"
        imageAlt="Project Image"
        imageClass="project__landing-image"
        introHeading="My Projects"
        introContent={MY_PROJECT_DESCRIPTION}
      />
      <div className="project__filter">
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
        {PROJECTS_DETAILS.filter(
          (projectDetails) =>
            projectCategory === 'all' || projectDetails.categories.includes(projectCategory)
        ).map((projectDetails, index) => (
          <ProjectCard key={index} details={projectDetails} />
        ))}
      </div>
      <div className="more-projects">
        <LinkButton
          id="project-link"
          link={PROJECTS_REPO_LINK}
          text="More Projects"
          displayGithub={false}
        />
      </div>
    </div>
  );
};
