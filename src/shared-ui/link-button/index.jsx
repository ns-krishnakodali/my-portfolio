import './link-button.css';

export const LinkButton = (props) => {
  const { id, link, text, displayGithub = true } = props;

  return (
    <button id={id} className="link-button">
      <a href={link} target="_blank" className={`app__link ${displayGithub ? 'with-github' : ''}`}>
        {displayGithub && (
          <img src="src/assets/logos/github-white-logo.svg" width={20} height={20} />
        )}
        {text}
      </a>
    </button>
  );
};
