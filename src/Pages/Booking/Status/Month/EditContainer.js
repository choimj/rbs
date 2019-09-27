import React from "react";
import * as Utils from "../../../../Utils/Date";
import EditPresenter from "./EditPresenter";

const EditContainer = ({ editValues, setEditValues }) => {
  const curDate = new Date();
  const [selectedDate, setSelectedDate] = React.useState({
    date: curDate,
    startTime: curDate,
    endTime: Utils.getAfterDate("h", new Date(), 1)
  });

  const handleDateChange = date => {
    const afterHoursTime = new Date(date);
    setSelectedDate({
      date: date,
      startTime: date,
      endTime: Utils.getAfterDate("h", afterHoursTime, 1)
    });
  };

  const handleChange = e => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
  };

  return (
    <EditPresenter
      editValues={editValues}
      selectedDate={selectedDate}
      handleDateChange={handleDateChange}
      handleChange={handleChange}
    />
  );
};

export default EditContainer;
