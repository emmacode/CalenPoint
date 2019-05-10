import React, { Component } from "react";
import Calendar from "../calendar/index";
import "./appointment.css";
import PickDate from "../pickdate/index";
const style = {
  position: "relative",
  margin: "50px auto"
};
class Appointment extends Component {
  onDayClick = (e, day) => {
    alert(day);
  };
  render() {
    return (
      <React.Fragment>
        <section className="appointment">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <button
                  onClick={this.handleClick}
                  className="btn-create btn btn-md btn-primary "
                >
                  <i
                    className="fas fa-plus text-white pr-2"
                    style={{ fontSize: "20px" }}
                  />{" "}
                  Create
                </button>
                <Calendar
                  style={style}
                  width="302px"
                  onDayClick={(e, day) => this.onDayClick(e, day)}
                />
                <input type="text" placeholder="Search for people" />
              </div>
              <div className="col-md-9">
                <PickDate />
                <h1 className="white-text text-center">
                  WORKING ON IT POWERFULLY.WIll COMPLETE SOON
                </h1>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Appointment;
