import React from "react";
import MonthContainer from "./Status/Month";

const BookingContainer = () => {
  switch (match.params.path) {
    case "month":
      return <MonthContainer />;
    default:
      return <div></div>;
  }
};

export default BookingContainer;
