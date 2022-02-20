import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Components/pages/home/Home";
import Resume from "./Components/pages/resume/Resume";
import Portfolio from "./Components/pages/portfolio/Portfolio";
import Contact from "./Components/pages/contact/Contact";
import About from "./Components/pages/about/About";

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
