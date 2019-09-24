import React, { useState } from "react";
import CategoryPresenter from "./CategoryPresenter";
import { GET_CATEGORIES } from "./Query";
import DialogBox from "../../../Components/DialogBox";
import { useQuery } from "react-apollo";

const CategoryContainer = () => {
  const [categories, setCategoris] = useState({});
  const [editValues, setEditValues] = useState({
    categoryId: "",
    categoryName: "",
    participants: []
  });

  useQuery(GET_CATEGORIES, {
    onCompleted: data => {
      setCategoris(data);
    }
  });

  const handleAddCategory = e => {
    e.preventDefault();
    setEditValues({
      categoryId: "",
      categoryName: "",
      participants: []
    });
  };
  return (
    <>
      <CategoryPresenter
        categoryList={categories}
        editValues={editValues}
        setEditValues={setEditValues}
        handleAddCategory={handleAddCategory}
      />
    </>
  );
};

export default CategoryContainer;
