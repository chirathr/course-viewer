import React, { Component } from "react";

class AddCourse extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addCourse(this.state.value);
    this.setState({ value: "" });
  }

  handleChange(e) {
    let value = e.target.value.trim();
    this.setState({ value: value });
  }

  render() {
    return (
      <div className="pt-3">
        <h4>Add Course</h4>
        <form onSubmit={this.handleSubmit} className="row">
          <div className="input-group mt-2 col-4">
            <input
              type="text"
              className="form-control"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Course name"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="submit">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddCourse;
