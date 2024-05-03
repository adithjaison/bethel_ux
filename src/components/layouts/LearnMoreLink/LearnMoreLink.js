import React from "react";

const LearnMoreLink = ({ className, href }) => {
  return (
    <a href={href} className={`button ${className}`}>
      Learn more
    </a>
  );
};

export default LearnMoreLink;
