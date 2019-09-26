import React, { useState } from "react";
import EditPresenter from "./EditPresenter";
import { useMutation } from "react-apollo";
import {
  CREATE_CATEGORY,
  CREATE_CATEGORY_PARTICIPANT,
  UPDATE_CATEGORY
} from "./Query";

const EditContainer = ({ users, editValues, setEditValues, setCategory }) => {
  const [selectParticipantOption, setSelectParticipantOption] = useState([]);

  const [createCategory] = useMutation(CREATE_CATEGORY, {
    onCompleted: data => {
      const { id, name } = data.createCategory;
      alert(name + " 생성되었습니다.");
      setEditValues({
        ...editValues,
        categoryId: id
      });
      setCategory(data.createCategory);

      selectParticipantOption.forEach(element => {
        const opt = {
          variables: {
            data: {
              categoryId: id,
              userId: element.value,
              name: element.label
            }
          }
        };
        createCategoryParticipant(opt);
      });
    },
    onError: err => {
      console.log("createCategory error !!", err);
    }
  });

  const [createCategoryParticipant] = useMutation(CREATE_CATEGORY_PARTICIPANT, {
    onCompleted: data => {},
    onError: err => {
      alert("카테고리 멤버 등록에 실패했습니다. 다시 시도해주세요.");
      console.log("createGroupParticipant error!! ", err);
    }
  });

  const [updateCateogry] = useMutation(UPDATE_CATEGORY, {
    onCompleted: data => {
      alert("수정되었습니다.");
      // console.log("updateCateogry", data);
    }
  });

  const handleCategorySubmit = e => {
    const { categoryId, categoryName } = editValues;
    const opts = {};
    let action = "";
    let tmpParticipants = [];

    if (categoryId && categoryId !== "") {
      //수정
      if (selectParticipantOption) {
        selectParticipantOption.forEach(element => {
          tmpParticipants = [
            ...tmpParticipants,
            {
              categoryId: categoryId,
              userId: element.value,
              name: element.label
            }
          ];
        });
      }
      action = "update";
      opts.variables = {
        data: {
          id: categoryId,
          name: categoryName,
          categoryParticipants: tmpParticipants
        }
      };
    } else {
      //생성
      action = "create";
      opts.variables = {
        data: {
          name: categoryName
        }
      };
    }

    if (!categoryName || categoryName === "") {
      alert("카테고리 명을 입력하세요.");
    }

    submitAction(action, opts);
  };

  const submitAction = (action, opts) => {
    if (action === "create") {
      createCategory(opts);
    } else if (action === "update") {
      updateCateogry(opts);
    }
  };

  const handleChange = e => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
  };

  const handleSelectChange = selectedOption => {
    setSelectParticipantOption(selectedOption);
  };
  return (
    <EditPresenter
      users={users}
      editValues={editValues}
      setEditValues={setEditValues}
      handleCategorySubmit={handleCategorySubmit}
      handleChange={handleChange}
      selectParticipantOption={selectParticipantOption}
      setSelectParticipantOption={setSelectParticipantOption}
      handleSelectChange={handleSelectChange}
    />
  );
};

export default EditContainer;
