import React from "react";
import GroupContainer from "./Group/GroupContainer";
import CategoryContainer from "./Category/CategoryContainer";
import Room from "./Room";
import BookForm from "./BookForm";

const Management = ({ match }) => {
  switch (match.params.path) {
    case "group":
      return <GroupContainer />;
    case "category":
      return <CategoryContainer />;
    case "room":
      return <Room />;
    case "bookform":
      return <BookForm />;
    default:
      return <div>Management</div>;
  }
};

export default Management;
