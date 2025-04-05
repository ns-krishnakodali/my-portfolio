import './projects.css';

import { useState } from 'react';

import { ProjectCard } from './project-card';

import {
  PROJECTS_REPO_LINK,
  PROJECTS_DETAILS,
  MY_PROJECT_DESCRIPTION,
  PROJECT_CATEGORIES,
} from '../../constants/';
import { LinkButton } from '../../shared-ui';
import { removeNonAlphabets } from '../../utils';

export const Projects = () => {
  const [projectCategory, setProjectCategory] = useState('all');

  return (
    <div className="project">
      <div className="project-container">
        <div className="project__image-container">
          <img
            src="src/assets/generic/experience-image.png"
            alt="Project Image"
            className="project__landing-image"
            loading="eager"
          />
        </div>
        <div className="project__details">
          <h1 className="project__heading">My Projects</h1>
          <p className="project__content">{MY_PROJECT_DESCRIPTION}</p>
        </div>
      </div>
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
