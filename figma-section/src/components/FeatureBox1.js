import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FeatureBox = ({ imageSrc, title, description }) => {
  return (
    <div className="feature-box d-flex flex-column align-items-start p-3">
      {/* Image Frame */}
      <div className="icon-frame">
        <img src={imageSrc} alt={title} className="feature-icon" />
      </div>

      {/* Text Content */}
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeatureBox;
