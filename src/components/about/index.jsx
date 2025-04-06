import './about.css';

import { MY_BACKGROUND } from '../../constants';
import { IntroSection } from '../../shared-ui';

export const About = () => {
  return (
    <div className="about">
      <IntroSection
        imageSrc="src/assets/generic/experience-image.png"
        imageAlt="Background Image"
        imageClass="about__landing-image"
        introHeading="My Background"
        introContent={MY_BACKGROUND}
      />
      <div>
        <h1 className="about__heading">What I Do</h1>
      </div>
    </div>
  );
};
