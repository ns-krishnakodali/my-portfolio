import './education.css';
import cx from 'classnames';

import { DegreeCard } from './degree-card';

import { DEGREES_DETAILS, EDUCATION_SUMMARY } from '../../constants';

export const Education = () => {
  return (
    <div className="education">
      <div className="education-container">
        <div className="education__image-container">
          <img
            src="src/assets/generic/education-image.png"
            alt="Education Image"
            className="education__landing-image"
            loading="eager"
          />
        </div>
        <div className="education__details">
          <h1 className="education__heading">Education</h1>
          <p className="education__content">{EDUCATION_SUMMARY}</p>
        </div>
      </div>
      <div className="education__degrees">
        <h1 className={cx('degrees-heading', 'education__heading')}>Degrees</h1>
        <div className="education__degrees-container">
          {DEGREES_DETAILS.map((degreeDetails, index) => (
            <DegreeCard key={index} details={degreeDetails} />
          ))}
        </div>
      </div>
    </div>
  );
};
