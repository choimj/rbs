import React, { useState } from "react";
import MonthPresenter from "./MonthPresenter";
// import events from "./events";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_BOOKINGS } from "./Query";

const MonthContainer = () => {
  const [state, setState] = useState({ events: [] });
  const [editValues, setEditValues] = useState({
    groupId: "",
    categoryId: "",
    bookingId: "",
    bookingTitle: "",
    bookingDate: "",
    bookingStartTime: "",
    bookingEndTime: "",
    bookingDepartment: "",
    bookingName: "",
    bookingParticipants: [],
    bookingCreateUser: ""
  });

  useQuery(GET_BOOKINGS, {
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

  const handleSelect = ele => {
    console.log(ele);
    const { start, end } = ele;
    const title = window.prompt("New Event name");
    if (title)
      setState({
        ...state,
        events: [
          ...state.events,
          {
            start,
            end,
            title
          }
        ]
      });
  };

  const handleClickEvent = ele => {
    console.log(ele.id);
    setEditValues({
      ...editValues,
      bookingId: ele.id
    });
  };
  return (
    <MonthPresenter
      state={state}
      editValues={editValues}
      setEditValues={setEditValues}
      handleSelect={handleSelect}
      handleClickEvent={handleClickEvent}
    />
  );
};

export default MonthContainer;
