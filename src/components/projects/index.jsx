import './projects.css';

import { ProjectCard } from './project-card';

export const Projects = () => {
  const details = {
    imageUrl: 'src/assets/generic/frontend-development.svg',
    title: 'Project-1',
    description: 'This is a sample description of the project',
    githubLink: 'https://github.com/ns-krishnakodali/my-portfolio',
  };
  // Add Filters, like All, SE, ML, UI
  return (
    <div>
      <ProjectCard details={details} />
    </div>
  );
};
