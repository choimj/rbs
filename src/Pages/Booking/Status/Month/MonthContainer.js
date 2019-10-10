import React, { useState } from "react";
import MonthPresenter from "./MonthPresenter";
import * as dateUtils from "../../../../Utils/Date";
const MonthContainer = () => {
  const curDate = new Date();
  const day = dateUtils.getDateString(curDate, "-");

  const [booking, setBooking] = useState({});
  const [state, setState] = useState({ events: [] });
  const [editValues, setEditValues] = useState({
    groupId: "",
    groupName: "",
    categoryId: "",
    categoryName: "",
    roomId: "",
    roomName: "",
    bookingId: "",
    bookingTitle: "",
    bookingDate: day,
    bookingStartTime: day,
    bookingEndTime: dateUtils.getAfterDate("h", new Date(), 1),
    bookingDepartment: "",
    bookingName: "",
    participants: [],
    bookingCreateUser: ""
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
      booking={booking}
      setBooking={setBooking}
      state={state}
      setState={setState}
      editValues={editValues}
      setEditValues={setEditValues}
      handleSelect={handleSelect}
      handleClickEvent={handleClickEvent}
    />
  );
};

export default MonthContainer;
