import { ButtonLink, TechnologyIcon } from '../../shared-ui';

export const ProjectCard = ({ details }) => {
  return (
    <div className="project__card-container no-break">
      <div className="project__card-title-container">
        <img
          src="assets/icons/folder-icon.svg"
          alt="Project Icon"
          fetchPriority="high"
          width={20}
          height={20}
          loading="eager"
        />
        <h3 className="project__card-title">{details.title}</h3>
      </div>
      <p className="project__card-description">{details.description}</p>
      <div className="project__logos-container">
        {details.techstack.map((technology, index) => (
          <TechnologyIcon key={index} technology={technology} />
        ))}
      </div>
      <ButtonLink id="project-link" link={details.githubLink} text="View Project" />
    </div>
  );
};
