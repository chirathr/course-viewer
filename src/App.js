import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';



class NavBar extends Component {
  render() {
    return (
      <nav className="nav">
        <NavLink exact className="nav-link" activeClassName="nav-active" to="/">Home</NavLink>
        <NavLink className="nav-link" activeClassName="nav-active" to="/courses">Courses</NavLink>
        <NavLink className="nav-link" activeClassName="nav-active" to="/about">About</NavLink>
      </nav>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administartion</h1>
        <p>React, Redux and React Router for ultra-responsive web apps.</p>
        <button className="btn btn-primary">Learn more</button>
      </div>
    );
  }
}

class CourseList extends Component {
  render() {
    let courses_list = this.props.courses.map((course) => <li>{course}</li>);
    return <ul>{courses_list}</ul>;
  }
}

class AddCourse extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSave() {
    this.props.addCourse(this.state.value);
    this.setState({value: ''});
  }

  onChange(e) {
    let value = e.target.value.trim();
    this.setState({value: value});
  }

  render() {
    return (
      <div className="pt-3">
        <h4>Add Course</h4>
        <div className="row">
          <div className="input-group mt-2 col-4">
            <input type="text" className="form-control" value={this.state.value} onChange={this.onChange} placeholder="Course name"/>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" onClick={this.onSave}>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: ['React', 'Redux', 'React-router'],
    };
    this.addCourse = this.addCourse.bind(this);
  }

  addCourse(course) {
    if (course.trim() === '') {
      return;
    }
    let courses = this.state.courses.slice();
    courses.push(course);
    this.setState({courses: courses});
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

class About extends Component {
  render() {
    return (
      <h1>About</h1>
    )
  }
}

class NoMatch extends Component {
  render() {
    return (
      <h1>Ooops! Page not found.</h1>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
            <NavBar/>

            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/courses" component={Course}/>
              <Route path="/about" component={About}/>
              <Route component={NoMatch} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
