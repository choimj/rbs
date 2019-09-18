import React, { useState } from "react";
import GroupPresenter from "./GroupPresenter";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_GROUP, GET_USERS, CREATE_GROUP } from "./Query";

const GroupContainer = () => {
  const [groupId, setGroupId] = useState("");
  const [groupItem, setGroupItem] = useState({});
  const [groupList, setGroupList] = useState({});
  const [users, setUsers] = useState({});
  const [editValues, setEditValues] = useState({
    groupId: "",
    groupName: "",
    participants: []
  });
  const [selectParticipantOption, setSelectParticipantOption] = useState([]);
  const variables = groupId ? { id: groupId } : { id: "" };

  useQuery(GET_GROUP, {
    variables: variables,
    onCompleted: data => {
      if (data) {
        if (data.group) {
          setGroupItem(data.group);
        }
      }
    }
  });
  useQuery(GET_USERS, {
    onCompleted: data => {
      setUsers(data.users);
    }
  });

  const handleGroupClick = (e, id) => {
    e.preventDefault();
    setGroupId(id);
  };

  const handleSelectChange = selectedOption => {
    setSelectParticipantOption(selectedOption);
  };
  const handleGroupNameChange = e => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
  };

  const [createGroup] = useMutation(CREATE_GROUP, {
    onCompleted: data => {
      alert(data.createGroup.name + "이 생성되었습니다.");
      console.log("createGroup============", data.createGroup);
      setGroupId(data.createGroup.id);
    },
    onError: err => {
      console.log(err);
    }
  });

  const handleGroupSubmit = e => {
    const { groupName } = editValues;
    if (!groupName || groupName === "") {
      alert("그룹 명을 입력하세요.");
    }
    const opts = {
      variables: {
        data: { name: groupName }
      }
    };
    createGroup(opts);
  };
  return (
    <GroupPresenter
      groupId={groupId}
      groupItem={groupItem}
      groupList={groupList}
      setGroupList={setGroupList}
      users={users}
      editValues={editValues}
      setEditValues={setEditValues}
      selectParticipantOption={selectParticipantOption}
      setSelectParticipantOption={setSelectParticipantOption}
      handleGroupClick={handleGroupClick}
      handleSelectChange={handleSelectChange}
      handleGroupNameChange={handleGroupNameChange}
      handleGroupSubmit={handleGroupSubmit}
    />
  );
};

export default GroupContainer;
