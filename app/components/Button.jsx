import Link from "next/link";
import React from "react";

const Button = ({ buttonText, href }) => (
  <Link href={href} className="primary-button">
    <div className="button-text-wrapper">
      <div className="default-text">{buttonText}</div>
      <div className="hover-text">{buttonText}</div>
    </div>
  </Link>
);

export default Button;
