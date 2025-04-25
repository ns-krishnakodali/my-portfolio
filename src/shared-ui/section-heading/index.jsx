import './section-heading.css';
import cx from 'classnames';

export const SectionHeading = ({ id, heading, className }) => {
  return (
    <h1 id={id} className={cx('section__heading', className)}>
      {heading}
    </h1>
  );
};
