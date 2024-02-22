import React from "react";

const SecondaryButton = ({ buttonText, buttonLink }) => (
  <button href={buttonLink} className="secondary-button">
    <div className="button-text-wrapper">
      <div className="default-text">{buttonText}</div>
      <div className="hover-text">{buttonText}</div>
    </div>
  </button>
);

export default SecondaryButton;
