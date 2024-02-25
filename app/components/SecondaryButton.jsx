import React from "react";

const SecondaryButton = ({ buttonText, href }) => (
  <button href={href} className="secondary-button">
    <div className="button-text-wrapper">
      <div className="default-text">{buttonText}</div>
      <div className="hover-text">{buttonText}</div>
    </div>
  </button>
);

export default SecondaryButton;
