import React from "react";
import { NavLink } from "react-router-dom";

let NavBar = () => (
  <nav className="nav">
    <NavLink exact className="nav-link" activeClassName="nav-active" to="/">
      Home
    </NavLink>
    <NavLink className="nav-link" activeClassName="nav-active" to="/courses">
      Courses
    </NavLink>
    <NavLink className="nav-link" activeClassName="nav-active" to="/about">
      About
    </NavLink>
  </nav>
);

export default NavBar;
