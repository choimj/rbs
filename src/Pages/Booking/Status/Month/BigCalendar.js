import React, { useMemo } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useQuery } from "@apollo/react-hooks";
import { GET_BOOKINGS } from "./Query";
import PropTypes from "prop-types";

const BigCalendar = ({ booking, state, setState, handleClickEvent }) => {
  const localizer = momentLocalizer(moment);

  const { refetch } = useQuery(GET_BOOKINGS, {
    onCompleted: data => {
      if (data) {
        if (data.bookings) {
          let tmpEvents = [];
          data.bookings.forEach(element => {
            const dateArr = element.date.split("-");
            const startTimeArr = element.startTime.split(":");
            const endTimeArr = element.endTime.split(":");
            tmpEvents = [
              ...tmpEvents,
              {
                id: element.id,
                title: element.title,
                start: new Date(
                  dateArr[0],
                  Number(dateArr[1]) - 1,
                  dateArr[2],
                  startTimeArr[0],
                  startTimeArr[1],
                  0
                ),
                end: new Date(
                  dateArr[0],
                  Number(dateArr[1]) - 1,
                  dateArr[2],
                  endTimeArr[0],
                  endTimeArr[1],
                  0
                )
              }
            ];
          });
          setState({
            ...state,
            events: tmpEvents
          });
        }
      }
    }
  });

  useMemo(() => {
    if (booking) {
      refetch();
    }
  }, [booking, refetch]);

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
        step={30}
        timeslots={1}
      />
    </div>
  );
};

BigCalendar.propTypes = {
  booking: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};

export default BigCalendar;
