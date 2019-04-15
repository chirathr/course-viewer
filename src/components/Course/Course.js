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
        <button className="btn btn-primary">Add Course</button>
        <CourseList courses={this.props.courses} authors={this.props.authors}/>
      </div>
    );
  }

  componentDidMount() {
    this.props.getAllAuthors();
    this.props.getAllCourses();
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Course);

