import './projects.css';

import { ProjectCard } from './project-card';
import { PROJECTS_DETAILS } from '../../constants/project-details';

export const Projects = () => {
  // Add Filters, like All, SE, ML, UI
  return (
    <div className="project">
      <div className="project__details-container">
        {PROJECTS_DETAILS.map((projectDetails, index) => (
          <ProjectCard key={index} details={projectDetails} />
        ))}
      </div>
    </div>
  );
};
