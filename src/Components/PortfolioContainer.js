import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../Components/pages/navbar/Navbar";
import Home from "../Components/pages/home/Home";
import Resume from "../Components/pages/resume/Resume";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Footer from "./pages/footer/Footer";
import About from "../Components/pages/about/About";

const PortfolioContainer = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Portfolio">
            <Portfolio />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Resume">
            <Resume />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default PortfolioContainer;
