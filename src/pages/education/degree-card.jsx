export const DegreeCard = ({ details }) => {
  return (
    <div className="education__degree-card">
      <div className="education__degree-card-image">
        <a href={details.websiteURL} target="_blank" rel="noopener noreferrer">
          <img
            src={details.imageSrc}
            alt={details.imageAlt}
            width={details.imageWidth}
            height={details?.imageHeight || 36}
            loading="eager"
          />
        </a>
      </div>
      <div className="education__degree-card-details">
        <div className="education__degree-card-headings">
          <div className="education__degree-headings">
            <h3 className="university-name">{details.universityName}</h3>
            <h4 className="degree-name">{details.degree}</h4>
          </div>
          <div className="education__degree-date">
            <p className="education__degree-date-details">{details.date}</p>
          </div>
        </div>
        <div className="education__degree-details">
          <p className="education__degree-coursework">
            <b>Key Coursework:</b>
            {details.courses.map((course, index) => (
              <span key={index} className="education__degree-course">
                {course}
              </span>
            ))}
          </p>
          {details.dPoints?.map((detail, index) => (
            <p key={index} className="degree-detail">
              🔹{detail}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
