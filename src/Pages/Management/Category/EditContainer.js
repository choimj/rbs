import React, { useState } from "react";
import EditPresenter from "./EditPresenter";
import { useQuery, useMutation } from "react-apollo";
import {
  GET_GROUP,
  GET_CATEGORY,
  CREATE_CATEGORY,
  CREATE_CATEGORY_PARTICIPANT,
  UPDATE_CATEGORY
} from "./Query";

const EditContainer = ({
  category,
  editValues,
  setEditValues,
  setCategory,
  handleCategoryDeleteClick
}) => {
  const [users, setUsers] = useState({});
  const [selectParticipantOption, setSelectParticipantOption] = useState([]);

  useQuery(GET_GROUP, {
    variables: {
      id: editValues.groupId
    },
    onCompleted: data => {
      if (data.group) {
        const { id, name, groupParticipants } = data.group;
        let tmpParticipants = [];
        if (groupParticipants.length > 0) {
          groupParticipants.forEach(element => {
            tmpParticipants = [...tmpParticipants, element.userId];
          });
        }
        setUsers(tmpParticipants);
        setEditValues({
          ...editValues,
          groupId: id,
          groupName: name,
          categoryId: "",
          categoryName: "",
          participants: []
        });
      }
    },
    onError: err => {
      console.log("GET_GROUP error !!", err);
    }
  });

  useQuery(GET_CATEGORY, {
    variables: {
      id: editValues.categoryId
    },
    onCompleted: data => {
      if (data.category) {
        const { id, name, categoryParticipants } = data.category;
        setCategory(data.category);
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
    const { groupId, categoryId, categoryName } = editValues;
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
      const userId = localStorage.getItem("userId");
      action = "create";
      opts.variables = {
        data: {
          groupId: groupId,
          name: categoryName,
          userId: userId
        }
      };
    }

    if (!groupId || groupId === "") {
      alert("그룹을 선택하세요.");
    } else if (!categoryName || categoryName === "") {
      alert("카테고리 명을 입력하세요.");
    } else {
      submitAction(action, opts);
    }
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
      handleCategorySubmit={handleCategorySubmit}
      handleChange={handleChange}
      selectParticipantOption={selectParticipantOption}
      setSelectParticipantOption={setSelectParticipantOption}
      handleSelectChange={handleSelectChange}
      handleCategoryDeleteClick={handleCategoryDeleteClick}
    />
  );
};

export default EditContainer;
