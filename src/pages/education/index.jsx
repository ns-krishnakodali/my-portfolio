import './education.css';

import { DegreeCard } from './degree-card';

import { DEGREES_DETAILS, EDUCATION_SUMMARY } from '../../constants';
import { IntroSection } from '../../shared-ui';

export const Education = () => {
  return (
    <div className="education">
      <IntroSection
        imageSrc="assets/generic/education-image.png"
        imageAlt="Degree Image"
        imageClass="education__landing-image"
        introHeading="Education"
        introContent={EDUCATION_SUMMARY}
      />
      <div className="education__degrees">
        <h1 className="education__degrees-heading">Degrees</h1>
        <div className="education__degrees-container">
          {DEGREES_DETAILS.map((degreeDetails, index) => (
            <DegreeCard key={index} details={degreeDetails} />
          ))}
        </div>
      </div>
    </div>
  );
};
