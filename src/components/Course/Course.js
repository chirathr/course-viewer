import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import CourseList from "./CourseList";
import AddCourse from "./AddCourse";
import * as actionCreators from "../../actions/actionsCreators";

class Course extends Component {
  render() {
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={this.props.courses} />
        <AddCourse addCourse={this.props.addCourse} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Course);

