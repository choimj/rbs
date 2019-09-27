import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "./events";

const localizer = momentLocalizer(moment);

class Selectable extends Component {
  constructor() {
    super();

    this.state = {
      events
    };
  }

  handleSelect = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title
          }
        ]
      });
  };

  render() {
    return (
      <div style={{ height: "500pt" }}>
        <Calendar
          events={this.state.events}
          startAccessor="start"
          endAccessor="end"
          defaultDate={moment().toDate()}
          localizer={localizer}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.handleSelect}
        />
      </div>
    );
  }
}

export default Selectable;

// render(<App />, document.getElementById("root"));
