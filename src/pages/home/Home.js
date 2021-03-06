import React from "react";
import Typed from "react-typed";
import "../home/styles.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="main-info">
        <Typed
          className="typed-text"
          strings={["Web Design", "Web Development", "Databases"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <p className="home-text">
          Hello! My name is Marcos Trejo and I'm a Javascript Developer. Here
          you will find examples of my work, about me, my resume, and how to
          reach out. If you think I am a good fit for your company or have any
          questions about my work, shoot me an email at Marcostrejo23@gmail.com.
        </p>
        <p className="home-text">
          VS Code, HTML5, CS3, React.js, graph.ql, nodejs, sql, mysql, mongodb,
          github, terminal. These are the technologies I am comfortable working
          with currently, I am hoping to add Java to this list in 2022.{" "}
        </p>
      </div>
    </div>
  );
};

export default Home;
