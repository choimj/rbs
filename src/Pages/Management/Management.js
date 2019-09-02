import React from "react";
import Group from "./Group";
import Category from "./Category";
import Room from "./Room";
import BookForm from "./BookForm";

const Management = ({ match }) => {
  // console.log(match);

  switch (match.params.path) {
    case "group":
      return <Group />;
    case "category":
      return <Category />;
    case "room":
      return <Room />;
    case "bookform":
      return <BookForm />;
    default:
      return <div>Management</div>;
  }
};

export default Management;
