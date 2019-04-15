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
import * as actionCreators from "../actions/actionsCreators";


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
          <Route path="/course" component={AddCourse} />
          <Route path="/courses" component={Course} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Main);

