import Link from "next/link";
import React from "react";

const Button = ({ buttonText, href }) => (
  <Link href={href} passHref>
    <div className="primary-button">
      <div className="button-text-wrapper">
        <div className="default-text">{buttonText}</div>
        <div className="hover-text">{buttonText}</div>
      </div>
    </div>
  </Link>
);

export default Button;
