import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/main/main";
import Navbar from "./components/Navbar/Navbar";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
