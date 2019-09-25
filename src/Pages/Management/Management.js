import React from "react";
import GroupContainer from "./Group/GroupContainer";
import CategoryContainer from "./Category/CategoryContainer";
import RoomContainer from "./Room/RoomContainer";
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
