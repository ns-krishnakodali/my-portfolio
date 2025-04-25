import './section-link.css';

export const SectionLink = ({ text }) => {
  return (
    <a className="section-link" href="/about">
      {text}
      <img
        src="assets/icons/right-arrow-icon.svg"
        alt="Right Arrow"
        className="section-link__right-arrow-icon"
        width={16}
        height={16}
      />
    </a>
  );
};
