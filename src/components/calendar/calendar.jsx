import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";
class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalendar: false,
      startDate: new Date(),
      title: "",
      location: "",
      description: "",
      name: ""
    };
    this.handleName = this.handleName.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleDecription = this.handleDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleName(event) {
    this.setState({
      name: event.target.value
    });
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  handleTitle(event) {
    this.setState({
      title: event.target.value
    });
  }
  handleLocation(event) {
    this.setState({
      location: event.target.value
    });
  }
  handleDescription(event) {
    this.setState({
      description: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      "Thank you " +
        this.state.name +
        " . " +
        "I will have to stop here i can't continue creating another component am so tired"
    );
  }
  render() {
    const { title, location, description, name } = this.state;
    if (this.state.isCalendar) {
      return (
        <section className="mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <button
                  className="btn btn-md btn-primary"
                  onClick={this.handleClick}
                >
                  Create <i class="fas fa-plus text-white pl-2" />
                </button>
              </div>
              <div className="col-md-8">
                <div className="animated fadeIn mt-5 z-depth-5">
                  <div className="card-body">
                    <form className="text-center">
                      {/* ADD NAME */}
                      <div className="md-form">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Add Name"
                          value={name}
                          onChange={this.handleName}
                        />
                      </div>
                      {/* ADD TITLE */}
                      <div className="md-form">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Add title"
                          value={title}
                          onChange={this.handleTitle}
                        />
                      </div>
                      {/* ADD LOACTION */}
                      <div className="md-form">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Add location or conferencing"
                          value={location}
                          onChange={this.handleLocation}
                        />
                      </div>
                      {/* Date */}
                      <div className="md-form form-control">
                        <DatePicker
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="md-form">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Add description"
                          value={description}
                          onChange={this.handleDescription}
                        />
                      </div>
                      <div className="md-form">
                        <button
                          onClick={this.handleSubmit}
                          className="btn btn-sm btn-primary"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section className="mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <button
                  className="btn btn-md btn-primary"
                  onClick={this.handleClick}
                >
                  Create <i className="fas fa-plus text-white pl-2" />
                </button>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}
export default Calendar;
