import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md fixed-top bg-dark">
        <div className="container">
          <a href="#" className="navbar-brand">
            <i className=" far fa-calendar-alt" /> CalenPoint
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#calenPoint"
            aria-controls="calenPoint"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="calenPoint">
            <ul className="navbar-nav smooth-scroll ml-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link text-white">
                  Home
                </NavLink>
              </li>
            </ul>
            <div>
              <NavLink className="btn btn-md btn-danger " to="/calendar">
                make a new appointment
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;