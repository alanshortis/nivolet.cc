import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Global from "./styles/Global";
import Header from "./components/Header";
import Map from "./components/Map";
import About from "./components/About";

const Index = () => (
  <Router>
    <div>
      <Global />
      <Header />
      <Route exact path="/" component={Map} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

render(<Index />, document.getElementById("root"));
