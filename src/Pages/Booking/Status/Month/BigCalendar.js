import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const BigCalendar = ({ state, handleSelect, handleClickEvent }) => {
  const localizer = momentLocalizer(moment);
  return (
    <div style={{ height: "70vh" }}>
      <Calendar
        popup
        selectable
        events={state.events}
        startAccessor="start"
        endAccessor="end"
        defaultDate={moment().toDate()}
        localizer={localizer}
        // onSelectEvent={e => alert(e.title)}
        // onSelectSlot={handleSelect}
        onSelectEvent={handleClickEvent}
        // timeslots={1}
        // min={new Date()}
      />
    </div>
  );
};

export default BigCalendar;
