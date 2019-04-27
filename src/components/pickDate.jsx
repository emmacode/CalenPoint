import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class PickDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalendar: false,
      startDate: new Date(),
      venue: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleVenue = this.handleVenue.bind(this);
  }
  handleClick() {
    if (this.state.isCalendar === true) {
      this.setState({
        isCalendar: false
      });
    } else {
      this.setState({
        isCalendar: true
      });
    }
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  handleVenue(event) {
    this.setState({
      venue: event.target.value
    });
  }
  render() {
    const { venue } = this.state;
    if (this.state.isCalendar) {
      return (
        <div>
          <button className="btn btn-md btn-danger" onClick={this.handleClick}>
            make a new appointment
          </button>
          <div className="animated fadeIn mt-5">
            <h3 className="mb-4">Select Date</h3>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
            <div className="mt-3">
              <label>Venue</label> <br />
              <input type="text" value={venue} onChange={this.handleVenue} />
              
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <button className="btn btn-md btn-danger" onClick={this.handleClick}>
            make new appointment
          </button>
        </div>
      );
    }
  }
}
export default PickDate;
