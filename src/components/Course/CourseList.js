import React from "react";
import { Link } from 'react-router-dom';

class CourseList extends React.Component {

  deleteCourse(id) {
    this.props.deleteCourse(id);
  }
  render() {
    let courses_list = this.props.courses.map((course, i) => {
      let id = this.props.authors.findIndex(author => author.id === course.authorId);
      let authorName = id !== -1 ? this.props.authors[id].name : course.authorId;
      return (
        <tr key={i}>
              <th scope="row">{ course.id }</th>
              <td><Link to={`/course/${course.slug ? course.slug : ''}`}>{ course.title }</Link></td>
              <td>{ authorName }</td>
              <td>{ course.category }</td>
              <td><button className="btn btn-danger" onClick={this.deleteCourse.bind(this, course.id)}>Delete</button></td>
        </tr>
      );
    });
    return (
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          { courses_list }
        </tbody>
      </table>
    );
  }
};

export default CourseList;
