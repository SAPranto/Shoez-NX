import React from "react";

const TitleBlock= ({ heading, paragraph }) => {
  return (
    <div className="flex flex-col mb-12 justify-center items-center text-center max-w-[700px] mx-auto">
      <h2>{heading}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default TitleBlock;
