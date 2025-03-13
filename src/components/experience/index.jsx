import './experience.css';

import React from 'react';

import { ExperienceCard } from './experience-card';

import { EXPERIENCE_DETAILS, MY_EXPERIENCE } from '../../constants';

export const Experience = () => {
  return (
    <div className="experience">
      <div className="experience-container">
        <div className="experience__image-container">
          <img
            src="src/assets/generic/experience-image.png"
            alt="Experience Image"
            className="experience__landing-image"
          />
        </div>
        <div className="experience__details">
          <h1 className="experience__heading">Experience</h1>
          <p className="experience__content">{MY_EXPERIENCE}</p>
        </div>
      </div>
      <div className="experiences">
        {EXPERIENCE_DETAILS.map((experience) =>
          Object.entries(experience).map(([title, details], index) => (
            <ExperienceCard key={index} title={title} details={details} />
          ))
        )}
      </div>
    </div>
  );
};
