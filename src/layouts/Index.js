import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Reset from "../styles/Reset.js";
import Map from "../components/Map";

const Index = () => (
  <div>
    <Reset />
    <Router>
      <Route exact path="/" component={Map} />
    </Router>
  </div>
);

export default Index;
