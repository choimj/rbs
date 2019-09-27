import React from "react";
import GroupContainer from "./Group";
import CategoryContainer from "./Category";
import RoomContainer from "./Room";
import BookForm from "./BookForm";

const Management = ({ match }) => {
  switch (match.params.path) {
    case "group":
      return <GroupContainer />;
    case "category":
      return <CategoryContainer />;
    case "room":
      return <RoomContainer />;
    case "bookform":
      return <BookForm />;
    default:
      return <div>Management</div>;
  }
};

export default Management;
