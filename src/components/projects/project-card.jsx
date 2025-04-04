import { LinkButton } from '../../shared-ui';

import { cleanString } from '../../utils';

export const ProjectCard = ({ details }) => {
  return (
    <div className="project__card-container">
      <h3 className="project__card-title">{details.title}</h3>
      <p className="project__card-description">{details.description}</p>
      <div className="project__logos-container">
        {details.techstack.map((technology, index) => (
          <div
            key={index}
            className="project__technology-icon-container"
            data-technology={technology}
          >
            <img
              src={`src/assets/technology/${cleanString(technology)}-logo.svg`}
              width={32}
              height={32}
            />
            <span className="project__technology-mobile-label">{technology}</span>
          </div>
        ))}
      </div>
      <LinkButton id="project-link" link={details.githubLink} text="View Project" />
    </div>
  );
};
