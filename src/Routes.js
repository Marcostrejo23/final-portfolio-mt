import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../src/pages/home/Home";
import Resume from "../src/pages/resume/Resume";
import Portfolio from "../src/pages/portfolio/Portfolio";
import Contact from "../src/pages/contact/Contact";
import About from "../src/pages/about/About";

const Routes = () => {
  return (
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
  );
};

export default Routes;
