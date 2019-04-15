import React from "react";

let CourseList = props => {
  let courses_list = props.courses.map((course, i) => <li key={i}>{course}</li>);
  return <ul>{courses_list}</ul>;
};

export default CourseList;
