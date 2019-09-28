import React, { useState } from "react";
import * as Utils from "../../../../Utils/Date";
import MonthPresenter from "./MonthPresenter";
import { useQuery } from "@apollo/react-hooks";
import { GET_BOOKINGS } from "./Query";

const MonthContainer = () => {
  // const curDate = new Date();
  const [state, setState] = useState({ events: [] });
  const [editValues, setEditValues] = useState({
    groupId: "",
    categoryId: "",
    bookingId: "",
    bookingTitle: "",
    bookingDate: new Date(),
    bookingStartTime: new Date(),
    bookingEndTime: Utils.getAfterDate("h", new Date(), 1),
    bookingDepartment: "",
    bookingName: "",
    participants: [],
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
