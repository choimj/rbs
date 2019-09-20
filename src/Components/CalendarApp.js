import React, { Component } from "react";
import Calendar from "react-material-ui-calendar";

export default class CalendarApp extends Component {
  render() {
    return (
      <Calendar
        generalStyle={{
          maxWidth: "100%",
          margin: "0 auto",
          backgroundColor: "rgba(256,256,256,1)",
          height: "100%",
          overflow: "auto"
        }}
        light="true"
      />
    );
  }
}
