import React from "react";
import '../footer/styles.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-dark fixed-bottom">
        <div className="icon-container">
          <a
            href="https://github.com/marcostrejo23"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/000000/github--v1.png"
              alt="Github"
              className="icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/marcos-trejo-915923185/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/48/000000/linkedin.png"
              alt="LinkedIn"
              className="icon"
            />
          </a>
          <a
            href="mailto: Marcostrejo23@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/000000/email.png"
              alt="Email"
              className="icon"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
