import './button-link.css';

export const ButtonLink = (props) => {
  const { id, type = 'button', link, text, displayGithub = true } = props;

  return (
    <button id={id} type={type} className="link-button">
      <a href={link} target="_blank" className={`app__link ${displayGithub ? 'with-github' : ''}`}>
        {displayGithub && <img src="assets/logos/github-white-logo.svg" width={20} height={20} />}
        {text}
      </a>
    </button>
  );
};
