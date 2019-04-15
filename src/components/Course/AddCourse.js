import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actionCreators from "../../actions/actionsCreators";

class AddCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      authorId: -1,
      category: "",
      toCourses: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handlCategoryChange = this.handlCategoryChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addCourse(this.state.title, this.state.authorId, this.state.category);
    this.setState({ value: "", toCourses: true});
  }

  handleTitleChange(e) {
    let title = e.target.value.trim();
    this.setState({ title });
  }

  handleAuthorChange(e) {
    let authorId = parseInt(e.target.value);
    this.setState({ authorId });
  }

  handlCategoryChange(e) {
    let category = e.target.value.trim();
    this.setState({ category });
  }

  render() {
    if (this.state.toCourses) {
      return <Redirect to="/courses"/>;
    }
    const authorList = this.props.authors.map((author) => (
      <option value={author.id} key={author.id}>{author.name}</option>
    ));
    return (
      <div className="pt-3">
        <h4>Add Course</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleTitleChange}
              placeholder="Course Title"/>
          </div>
          <div className="form-group">
            <label>Author</label>
            <select className="form-control" id="author" onChange={this.handleAuthorChange} selected={this.state.authorId}>
              <option value="-1">Select</option>
              { authorList }
            </select>
          </div>
          <div className="form-group">
            <label>Title</label>
            <input
              id="category"
              type="text"
              className="form-control"
              value={this.state.category}
              onChange={this.handlCategoryChange}
              placeholder="Category"/>
          </div>
          <div className="input-group">
            <button className="btn btn btn-primary" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authors: state.authors,
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCourse);
