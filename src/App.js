import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Main from './components/Main';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Main />
        </Router>
      </Provider>
    );
  }
}

export default App;
