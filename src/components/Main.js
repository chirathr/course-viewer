import React from "react";
import { Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import NavBar from "./Navbar";
import Home from "./Home";
import Course from "./Course/Course";
import About from "./About";
import NoMatch from "./NoMatch";
import AddCourse from "./Course/AddCourse";
import * as actions from "../actions/index";


class Main extends React.Component {
  componentDidMount() {
    this.props.getAllAuthors();
    this.props.getAllCourses();
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/courses" component={Course} />
          <Route path="/course/:slug?" component={AddCourse} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Main);
