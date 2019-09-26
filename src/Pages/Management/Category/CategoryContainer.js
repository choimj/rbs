import React, { useState } from "react";
import CategoryPresenter from "./CategoryPresenter";

import { useQuery, useMutation } from "react-apollo";
import { GET_CATEGORY, GET_USERS, DELETE_CATEGORY } from "./Query";

const CategoryContainer = () => {
  const [category, setCategory] = useState({});
  const [editValues, setEditValues] = useState({
    groupId: "",
    groupName: "",
    categoryId: "",
    categoryName: "",
    participants: []
  });

  const [dialogOpen, setDialogOpen] = useState(false);

  const [deleteCategory] = useMutation(DELETE_CATEGORY, {
    onCompleted: data => {
      alert("삭제되었습니다.");
      setInputEdit();
      setCategory({});
    },
    onError: err => {
      console.log("deleteCategory Error!!", err);
    }
  });

  const setInputEdit = () => {
    setEditValues({
      groupId: "",
      groupName: "",
      categoryId: "",
      categoryName: "",
      participants: []
    });
  };

  const handleCategoryEditClick = (e, id) => {
    e.preventDefault();
    setEditValues({ ...editValues, categoryId: id });
  };

  const handleCategoryDeleteClick = e => {
    e.preventDefault();
    setDialogOpen(true);
  };

  const handleConfirm = op => {
    if (op === "yes") {
      setDialogOpen(false);
      const opts = {
        variables: {
          id: editValues.categoryId
        }
      };
      deleteCategory(opts);
    } else if (op === "no") {
      setDialogOpen(false);
    }
  };

  const handleGroupClick = (e, groupId) => {
    e.preventDefault();
    setEditValues({
      ...editValues,
      groupId: groupId,
      categoryId: "",
      categoryName: "",
      participants: []
    });
  };

  return (
    <>
      <CategoryPresenter
        category={category}
        setCategory={setCategory}
        editValues={editValues}
        setEditValues={setEditValues}
        handleCategoryEditClick={handleCategoryEditClick}
        handleCategoryDeleteClick={handleCategoryDeleteClick}
        handleConfirm={handleConfirm}
        dialogOpen={dialogOpen}
        handleGroupClick={handleGroupClick}
      />
    </>
  );
};

export default CategoryContainer;
