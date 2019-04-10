import React, { Component } from "react";

import CourseList from "./CourseList";
import AddCourse from "./AddCourse";

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
    this.addCourse = this.addCourse.bind(this);
  }

  addCourse(course) {
    if (course.trim() === "") {
      return;
    }
    let courses = this.state.courses.slice();
    courses.push(course);
    this.setState({ courses: courses });
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={this.state.courses} />
        <AddCourse addCourse={this.addCourse} />
      </div>
    );
  }
}

export default Course;
