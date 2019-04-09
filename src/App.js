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

class Course extends Component {
  render() {
    return (
      <h1>Courses</h1>
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
