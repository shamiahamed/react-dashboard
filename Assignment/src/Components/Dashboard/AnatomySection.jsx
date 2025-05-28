import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AnatomySection.css";

const AnatomySection = () => {
  return (
    <div className="position-relative anatomy-wrapper p-2 shadow">
      {/* Anatomy Image with Indicators */}
      <div className="position-relative text-center">
        <img
          src="/assets/image.png"
          alt="Anatomy" width={150}
          className="img-fluid anatomy-img"
        />

        {/* Healthy Heart Tag */}
        <div className="badge position-absolute heart-indicator">
          ❤ Healthy Heart
        </div>

        {/* Healthy Leg Tag */}
        <div className="badge bg-info text-blue position-absolute leg-indicator">
          <i className="bi bi-lightning-charge-fill me-1"></i> Healthy Leg
        </div>
      </div>
      </div>
  );
};

export default AnatomySection;
