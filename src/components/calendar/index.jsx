import React, { Component } from "react";
import "./calendar.css";
import moment from "moment";
class Calendar extends Component {
  state = {
    dateContext: moment(),
    today: moment(),
    showMonthPopup: false,
    showYearPopup: false
  };
  constructor(props) {
    super(props);
    this.width = props.width || "350px";
    this.style = props.style || {};
    this.style.width = this.width;
  }
  weekdays = moment.weekdays();
  weekdaysShort = moment.weekdaysShort();
  months = moment.months();
  year = () => {
    return this.state.dateContext.format("Y");
  };
  month = () => {
    return this.state.dateContext.format("MMMMM");
  };
  daysInMonth = () => {
    return this.state.dateContext.daysInMonth();
  };
  currentDate = () => {
    return this.state.dateContext.get("date");
  };
  currentDay = () => {
    return this.state.dateContext.format("D");
  };
  firstDayOfMonth = () => {
    let dateContext = this.state.dateContext;
    let firstDay = moment(dateContext)
      .startOf("month")
      .format("d");
    return firstDay;
  };
  setMonth = month => {
    let MonthNo = this.months.indexOf(month);
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("month", MonthNo);
    this.setState({
      dateContext: dateContext
    });
  };
  nextMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).add(1, "month");
    this.setState({
      dateContext: dateContext
    });
    this.props.onNextMonth && this.props.onNextMonth();
  };
  prevMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).subtract(1, "month");
    this.setState({
      dateContext: dateContext
    });
    this.props.onPrevMonth && this.props.onPrevMonth();
  };
  onSelectChange = (e, data) => {
    this.setMonth(data);
    this.props.onMonthChange && this.props.onMonthChange();
  };
  SelectList = props => {
    let popup = props.data.map(data => {
      return (
        <div key={data}>
          <a
            href="#"
            onClick={e => {
              this.onSelectChange(e, data);
            }}
          >
            {data}
          </a>
        </div>
      );
    });
    return <div className="month-popup">{popup}</div>;
  };
  onChangeMonth = (e, month) => {
    this.setState({
      showMonthPopup: !this.state.showMonthPopup
    });
  };
  MonthNav = () => {
    return (
      <span
        className="label-month"
        onClick={e => {
          this.onChangeMonth(e, this.month());
        }}
      >
        {this.month()}
        {this.state.showMonthPopup && <this.SelectList data={this.months} />}
      </span>
    );
  };
  showYearEditor = () => {
    this.setState({
      showYearNav: true
    });
  };
  setYear = year => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("year", year);
    this.setState({
      dateContext: dateContext
    });
  };
  onKeyUpYear = e => {
    if (e.which === 13 || e.which === 27) {
      this.setYear(e.target.value);
      this.setState({
        showYearNav: false
      });
    }
  };
  onYearChange = e => {
    this.setYear(e.target.value);
    this.props.onYearChange && this.props.onYearChange(e, e.target.value);
  };
  YearNav = () => {
    return this.state.showYearNav ? (
      <input
        defaultValue={this.year()}
        className="editor-year"
        ref={yearInput => {
          this.yearInput = yearInput;
        }}
        onKeyUp={e => {
          this.onKeyUpYear(e);
        }}
        onChange={e => {
          this.onYearChange(e);
        }}
        type="number"
        placeholder="year"
      />
    ) : (
      <span
        className="label-year"
        onDoubleClick={e => {
          this.showYearEditor();
        }}
      >
        {this.year()}
      </span>
    );
  };
  onDayClick = (e, day) => {
    this.props.onDayClick && this.props.onDayClick(e, day);
  };
  render() {
    let weekdays = this.weekdaysShort.map(day => {
      return (
        <td key={day} className="week-day">
          {day}
        </td>
      );
    });
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td className="emptySlot">{""}</td>);
    }
    console.log("blanks:", blanks);
    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let className = d === this.currentDay() ? "day current-day" : "day";
      daysInMonth.push(
        <td key={d} className={className}>
          <span
            onClick={e => {
              this.onDayClick(e, d);
            }}
          >
            {d}
          </span>
        </td>
      );
    }
    console.log("days:", "daysInMonth");
    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];
    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        let insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        let insertRow = cells.slice();
        rows.push(insertRow);
      }
    });
    let trElems = rows.map((d, i) => {
      return <tr key={i * 100}>{d}</tr>;
    });
    return (
      <div className="calendar-container" style={this.style}>
        <table className="calendar">
          <thead>
            <tr className="calendar-header">
              <td colSpan="5">
                <this.MonthNav />
                {""}
                <this.YearNav />
              </td>
              <td colSpan="2" className="nav-month">
                <i
                  className="prev fas fa-angle-left"
                  onClick={e => {
                    this.prevMonth();
                  }}
                />
                <i
                  className="next fas fa-angle-right"
                  onClick={e => {
                    this.nextMonth();
                  }}
                />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>{weekdays}</tr>
            {trElems}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
