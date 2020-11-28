import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import NavComponent from "./Components/NavComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={NavComponent} />
        <Route path="/portfolio/Contact" component={Contact} />
        <Route path="/portfolio/Projects" component={Projects} />
        <Route exact path="/portfolio" component={Home} />
      </div>
    </Router>
  );
};

export default App;