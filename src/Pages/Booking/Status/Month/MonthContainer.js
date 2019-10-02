import React, { useState } from "react";
import * as Utils from "../../../../Utils/Date";
import MonthPresenter from "./MonthPresenter";

const MonthContainer = () => {
  const curDate = new Date();
  const minDate = Utils.getAfterDate("m", new Date(), -1);
  const [booking, setBooking] = useState([{}]);
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
    bookingDate: curDate,
    bookingStartTime: curDate,
    bookingEndTime: Utils.getAfterDate("h", new Date(), 1),
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
      minDate={minDate}
    />
  );
};

export default MonthContainer;
