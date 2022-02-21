import React from "react";
import password from "../../images/PasswordGenerator.png";
import weather from "../../images/WeatherDashboard.png";
import WorkDay from "../../images/WorkDayScheduler.png";
import Todolist from "../../images/ToDolist.png";
import "./styles.css";

const Portfolio = () => {
  return (
    <>
      <div className="d-flex justify-content-center my-5">
        <h1 className="experience-h1">My Work so far</h1>
      </div>
      <div className="experience-wrapper">
        <div className="container-experience-wrapper">
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <div className="portfolioImage">
                <img
                  className="img-fluid port=image"
                  src={Todolist}
                  alt="Todo List"
                ></img>
              </div>
              <div className="portfolio-textContent">
                <p>To-do List</p>
                <p>
                  Deployed Link:{" "}
                  <a
                    className="portfolioHyperLink"
                    href="https://marcostrejo23.github.io/todo-list-v1/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    https://marcostrejo23.github.io/todo-list-v1/
                  </a>
                </p>
                <p>
                  GitHub:{" "}
                  <a
                    className="portfolioHyperLink"
                    href="https://github.com/Marcostrejo23/todo-list-v1"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    https://github.com/Marcostrejo23/todo-list-v1
                  </a>
                </p>
                <p className="experience-text">
                  This application was built for a user to organize a Todo list.
                  A user can add a todo, update that todo, and delete the todo.
                  This application uses Javascript, React, Redux, and Bootstrap.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <div className="portfolioImage">
                <img
                  className="img-fluid port=image "
                  src={weather}
                  alt="Weather Dashboard "
                ></img>
              </div>
              <div className="portfolio-textContent">
                <p>Weather Dashboard</p>
                <p>
                  Deployed Link:{" "}
                  <a
                    className="portfolioHyperLink"
                    href="https://github.com/Marcostrejo23/weather-api-mt"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    https://github.com/Marcostrejo23/weather-api-mt
                  </a>
                </p>
                <p>
                  GitHub:{" "}
                  <a
                    className="portfolioHyperLink"
                    href="https://github.com/Marcostrejo23/weather-api-mt"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    https://github.com/Marcostrejo23/weather-api-mt
                  </a>
                </p>
                <p className="experience-text">
                  This application was built to show a user today's weather and
                  a five day forecast. When the page opens the user will view a
                  search bar and field on the left side of the browser. Searches
                  are saved locally. This application uses HTML, CSS, and
                  Javascript.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <div className="portfolioImage">
                <img
                  className="img-fluid port=image"
                  src={WorkDay}
                  alt="WorkDay scheduler"
                ></img>
              </div>
              <div className="portfolio-textContent">
                <p> Workday Scheduler</p>
                <p>
                  Deployed Link:{" "}
                  <a
                    className="portfolioHyperLink"
                    href="https://marcostrejo23.github.io/workday-calendar-mt/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    https://marcostrejo23.github.io/workday-calendar-mt/
                  </a>
                </p>
                <p>
                  GitHub:{" "}
                  <a
                    className="portfolioHyperLink"
                    href="https://github.com/Marcostrejo23/workday-calendar-mt"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    https://github.com/Marcostrejo23/workday-calendar-mt
                  </a>
                </p>
                <p>
                  this is a working calendar to use for the average workday.
                  Meant to show you what time of the day it is, grey out the
                  time that has passed, and save to local storage after filling
                  out the calendar with text. This application uses HTML, CSS,
                  Bootstrap, JavaScript, and Jquery.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <div className="portfolioImage">
                <img
                  className="img-fluid port=image"
                  src={password}
                  alt="Password Generator"
                ></img>
              </div>
              <div className="portfolio-textContent">
                <p>Password Generator</p>
                <p>
                  Deployed Link:{" "}
                  <a
                    className="portfolioHyperLink"
                    href=" https://marcostrejo23.github.io/password-generator-mt/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    https://marcostrejo23.github.io/password-generator-mt/
                  </a>
                </p>
                <p>
                  GitHub:{" "}
                  <a
                    className="portfolioHyperLink"
                    href="https://github.com/Marcostrejo23/password-generator-mt"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    https://github.com/Marcostrejo23/password-generator-mt
                  </a>
                </p>
                <p className="experience-text">
                  In this application, I used Javascript to create a simple
                  password generator. The Generator takes in if the user wants
                  lowercase letters, uppercase letters, special characters, and
                  numbers. When the user clicks the generate password button,
                  they will be presented with prompts, and then returned a
                  password based on the parameters they selected. This
                  application uses HTML, CSS, and JavaScript.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
