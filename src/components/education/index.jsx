import './education.css';
import cx from 'classnames';

import { DegreeCard } from './degree-card';

import { DEGREES_DETAILS, EDUCATION_SUMMARY } from '../../constants';
import { IntroSection } from '../../shared-ui';

export const Education = () => {
  return (
    <div className="education">
      <IntroSection
        imageSrc="src/assets/generic/education-image.png"
        imageAlt="Degree Image"
        imageClass="education__landing-image"
        introHeading="Education"
        introContent={EDUCATION_SUMMARY}
      />
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
