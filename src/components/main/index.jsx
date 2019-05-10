import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/index";
import Appointment from "../appointment/index";
import "../../App.css";
class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/appointment" component={Appointment} />
        </Switch>
      </div>
    );
  }
}

export default Main;
