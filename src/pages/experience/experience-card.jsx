export const ExperienceCard = ({ details }) => (
  <div tabIndex={-1} className="experience__card no-break">
    <div className="experience__card-container">
      <div className="experience__card-image">
        <a href={details.companyURL} target="_blank" rel="noopener noreferrer">
          <img
            src={details.imageSrc}
            alt={details.imageAlt}
            width={details.imageWidth}
            height={details?.imageHeight || 36}
            loading="eager"
          />
          <img
            src="assets/icons/redirect-icon.png"
            alt="Website Redirect"
            className="website-redirect"
          />
        </a>
      </div>
      <div className="experience__card-details">
        <div className="experience__card-headings">
          <div className="experience__company-details">
            <span className="experience__card-title">
              <h3 className="title">{details.title}</h3>
              <p className="position">{details.position}</p>
            </span>
            <span className="experience__card-icon">
              <img
                src="assets/icons/company-icon.svg"
                alt="Company Icon"
                fetchPriority="high"
                width={16}
                height={16}
                loading="eager"
              />
              <h4 className="company">{details.company}</h4>
            </span>
          </div>
          <div className="experience__card-geotime">
            <span className="experience__card-icon">
              <img
                src="assets/icons/date-icon.svg"
                alt="Company Icon"
                fetchPriority="high"
                width={16}
                height={16}
                loading="eager"
              />
              <p className="experience__geotime-point">{details.date}</p>
            </span>
            <span className="experience__card-icon">
              <img
                src="assets/icons/location-icon.svg"
                alt="Company Icon"
                fetchPriority="high"
                width={16}
                height={16}
                loading="eager"
              />
              <p className="experience__geotime-point">{details.location}</p>
            </span>
          </div>
        </div>
        <div className="experience__card-info">
          <p className="experience__card-summary">{details.summary}</p>
          <div className="experience__card-techologies">
            Key Technologies:
            {details?.technologies?.map((tech, index) => (
              <span key={index} className="experience__card-skill-box">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
