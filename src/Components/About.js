import React from "react";
import me from "../Components/images/MyPhoto.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="text-center">
        <h1 className="about-text">Who I am</h1>
        <img src={me} className="img-fluid portrait" alt="marcos trejo" />
      
      <p className="about-description">
        I decided to pursue web development after years of being an
        entrepreneur. Web development being the future, I wanted to have the
        know-how to compete in the market. When I'm not pursuing the knowledge
        of web development, I'm going crazy for Seattle sports, out in the woods
        looking for the next best photography spot, or at the cinemas keeping up
        with the latest films.
      </p>
      </div>
    </div>
  );
};

export default About;
