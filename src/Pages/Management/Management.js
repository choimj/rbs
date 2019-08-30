import React from "react";
import Group from "./Group";
import Room from "./Room";

const Management = ({ match }) => {
  // console.log(match);

  switch (match.params.path) {
    case "group":
      return <Group />;
    case "room":
      return <Room />;
    default:
      return <div>Management</div>;
  }
};

export default Management;
