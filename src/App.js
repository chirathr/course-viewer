import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Course from "./components/Course/Course";
import About from "./components/About";
import NoMatch from "./components/NoMatch";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <NavBar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/courses" component={Course} />
            <Route path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
