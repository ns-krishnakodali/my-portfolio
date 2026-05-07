import './button-link.css';

export const ButtonLink = (props) => {
  const { id, link, text, displayGithub = true, className = '' } = props;

  return (
    <a
      id={id}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-button ${displayGithub ? 'with-github' : ''} ${className}`.trim()}
    >
      {displayGithub && (
        <img src="assets/logos/github-white-logo.svg" alt="" width={20} height={20} />
      )}
      <span className="link-button__text">{text}</span>
    </a>
  );
};
