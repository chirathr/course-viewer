import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./Navbar";
import Home from "./Home";
import Course from "./Course/Course";
import About from "./About";
import NoMatch from "./NoMatch";

const Main = () => (
  <div className="container">
    <NavBar />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/courses" render={(props) => <Course a="1"></Course>} />
      <Route path="/about" component={About} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);


export default Main;
