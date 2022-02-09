import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link
          className="navbar-brand"
          to="https://www.linkedin.com/in/marcos-trejo-915923185/" target={"_blank"}  rel="noopener noreferrer"
        >
          Marcos Trejo Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to="/Home">
                Home<span className="sr-only">(current)</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/Portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/About">About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/Contact">Contact</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/Resume">Resume</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
