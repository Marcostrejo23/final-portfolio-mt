import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Routes from "./Routes";
import Navbar from "./Components/pages/navbar/Navbar";
import Footer from "./Components/pages/footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes />
      <Footer />
    </Router>
  );
};

export default App;
