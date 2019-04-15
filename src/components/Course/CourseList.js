import React from "react";

let CourseList = props => {
  let courses_list = props.courses.map((course, i) => {
    let id = props.authors.findIndex(author => author.id === course.authorId);
    let authorName = id !== -1 ? props.authors[id].name : course.authorId;
    return (
      <tr key={i}>
            <th scope="row">{ course.id }</th>
            <td>{ course.title }</td>
            <td>{ authorName }</td>
            <td>{ course.category }</td>
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
        </tr>
      </thead>
      <tbody>
        { courses_list }
      </tbody>
    </table>
  );
};

export default CourseList;
