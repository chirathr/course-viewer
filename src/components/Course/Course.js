import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import CourseList from "./CourseList";
import * as actionCreators from "../../actions/actionsCreators";

class Course extends Component {

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <Link to="/course">
          <button className="btn btn-primary">Add Course</button>
        </Link>
        <CourseList {...this.props}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Course);

