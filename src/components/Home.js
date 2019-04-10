import React from "react";
import { Link } from "react-router-dom";

let Home = () => (
  <div className="jumbotron">
    <h1>Pluralsight Administartion</h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    <Link to="/about">
      <button className="btn btn-primary">Learn more</button>
    </Link>
  </div>
);

export default Home;
