import React, { useState } from "react";
import CategoryPresenter from "./CategoryPresenter";

import { useQuery, useMutation } from "react-apollo";
import { GET_CATEGORY, GET_USERS, DELETE_CATEGORY } from "./Query";

const CategoryContainer = () => {
  const [category, setCategory] = useState({});
  const [editValues, setEditValues] = useState({
    categoryId: "",
    categoryName: "",
    participants: []
  });
  const [users, setUsers] = useState({});
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

  useQuery(GET_CATEGORY, {
    variables: {
      id: editValues.categoryId
    },
    onCompleted: data => {
      if (data.category) {
        const { id, name, categoryParticipants } = data.category;
        setEditValues({
          ...editValues,
          categoryId: id,
          categoryName: name,
          participants: categoryParticipants
        });
      }
    },
    onError: err => {
      console.log("error !!", err);
    }
  });
  useQuery(GET_USERS, {
    onCompleted: data => {
      setUsers(data.users);
    }
  });

  const handleAddCategory = e => {
    e.preventDefault();
    setInputEdit();
  };

  const setInputEdit = () => {
    setEditValues({
      categoryId: "",
      categoryName: "",
      participants: []
    });
  };

  const handleCategoryEditClick = (e, id) => {
    e.preventDefault();
    setEditValues({ ...editValues, categoryId: id });
  };

  const handleCategoryDeleteClick = (e, id) => {
    e.preventDefault();
    setEditValues({
      ...editValues,
      categoryId: id
    });
    setDialogOpen(true);
  };

  const handleConfirm = op => {
    if (op === "yes") {
      setDialogOpen(false);
      const opts = {
        variables: {
          data: {
            id: editValues.categoryId
          }
        }
      };
      deleteCategory(opts);
    } else if (op === "no") {
      setDialogOpen(false);
    }
  };

  return (
    <>
      <CategoryPresenter
        users={users}
        category={category}
        setCategory={setCategory}
        editValues={editValues}
        setEditValues={setEditValues}
        handleAddCategory={handleAddCategory}
        handleCategoryEditClick={handleCategoryEditClick}
        handleCategoryDeleteClick={handleCategoryDeleteClick}
        handleConfirm={handleConfirm}
        dialogOpen={dialogOpen}
      />
    </>
  );
};

export default CategoryContainer;
