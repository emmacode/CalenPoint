import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Calendar from "../calendar/calendar";
import "../../App.css";
class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/calendar" component={Calendar} />
        </Switch>
      </div>
    );
  }
}

export default Main;
