import React from "react";
// import Group from "./Group";
import GroupContainer from "./Group/GroupContainer";
import Category from "./Category";
import Room from "./Room";
import BookForm from "./BookForm";

const Management = ({ match }) => {
  switch (match.params.path) {
    case "group":
      return <GroupContainer />;
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
