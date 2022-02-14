import React from "react";
import resume from "../images/MyResume.pdf";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="text-center">
        <h1>Here is my resume</h1>
        <a href={resume}>Marcos Trejo's resume</a>
      </div>
    </div>
  );
};
export default Resume;
