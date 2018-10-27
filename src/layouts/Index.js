import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Reset from "../styles/Reset.js";
import Map from "../components/Map";
import About from "../components/About";

const Index = () => (
  <Router>
    <div>
      <Reset />
      <Route exact path="/" component={Map} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default Index;
