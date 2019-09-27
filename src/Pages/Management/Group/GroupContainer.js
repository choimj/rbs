import React, { useState } from "react";
import GroupPresenter from "./GroupPresenter";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  GET_GROUP,
  GET_USERS,
  CREATE_GROUP,
  CREATE_GROUP_PARTICIPANT,
  UPDATE_GROUP,
  DELETE_GROUP
} from "./Query";

import DialogBox from "../../../Components/DialogBox";

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
  const [dialogOpen, setDialogOpen] = useState(false);

  const variables = groupId ? { id: groupId } : { id: "" };

  useQuery(GET_GROUP, {
    variables: variables,
    onCompleted: data => {
      // console.log("GET_GROUP", data);
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

  const handleGroupEditClick = (e, id) => {
    e.preventDefault();
    setGroupId(id);
  };
  const handleGroupDeleteClick = (e, id) => {
    e.preventDefault();
    setGroupId(id);
    setDialogOpen(true);
  };

  const handleSelectChange = selectedOption => {
    setSelectParticipantOption(selectedOption);
  };
  const handleGroupNameChange = e => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
  };

  const [createGroup] = useMutation(CREATE_GROUP, {
    onCompleted: data => {
      selectParticipantOption.forEach(element => {
        const opt = {
          variables: {
            data: {
              groupId: data.createGroup.id,
              userId: element.value,
              name: element.label
            }
          }
        };
        createGroupParticipant(opt);
      });

      alert(data.createGroup.name + "이 생성되었습니다.");
      setGroupId(data.createGroup.id);
    },
    onError: err => {
      console.log(err);
    }
  });

  const [createGroupParticipant] = useMutation(CREATE_GROUP_PARTICIPANT, {
    onCompleted: data => {},
    onError: err => {
      alert("그룹 멤버 등록에 실패했습니다. 다시 시도해주세요.");
      console.log("createGroupParticipant error!! ", err);
    }
  });

  const [updateGroup] = useMutation(UPDATE_GROUP, {
    onCompleted: data => {
      alert("수정되었습니다.");
    },
    onError: err => {
      console.log("UPDATE_GROUP error!! ", err);
    }
  });

  const [deleteGroup] = useMutation(DELETE_GROUP, {
    onCompleted: data => {
      alert("삭제되었습니다.");
      setGroupId("delete");
      setInputEdit();
    },
    onError: err => {
      console.log("DELETE_GROUP error!! ", err);
    }
  });

  const handleGroupSubmit = e => {
    const { groupId, groupName } = editValues;
    const opts = {};
    let action = "";
    let tmpParticipants = [];

    if (groupId && groupId !== "") {
      // 수정
      if (selectParticipantOption) {
        selectParticipantOption.forEach(element => {
          tmpParticipants = [
            ...tmpParticipants,
            { groupId: groupId, userId: element.value, name: element.label }
          ];
        });
      }
      action = "update";
      opts.variables = {
        data: {
          id: groupId,
          name: groupName,
          groupParticipants: tmpParticipants
        }
      };
    } else {
      // 생성
      const userId = localStorage.getItem("userId");
      action = "create";
      opts.variables = {
        data: {
          name: groupName,
          userId: userId
        }
      };
    }

    if (!groupName || groupName === "") {
      alert("그룹 명을 입력하세요.");
    } else {
      submitAction(action, opts);
    }
  };

  const submitAction = (action, opts) => {
    if (action === "create") {
      createGroup(opts);
    } else if (action === "update") {
      updateGroup(opts);
    }
  };

  const handleAddGroup = e => {
    setInputEdit();
  };

  const setInputEdit = () => {
    setEditValues({
      groupId: "",
      groupName: "",
      participants: []
    });
  };

  const handleConfirm = op => {
    if (op === "yes") {
      setDialogOpen(false);
      const opts = {
        variables: {
          id: groupId
        }
      };
      deleteGroup(opts);
    } else if (op === "no") {
      setDialogOpen(false);
    }
  };

  return (
    <>
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
        handleGroupEditClick={handleGroupEditClick}
        handleSelectChange={handleSelectChange}
        handleGroupNameChange={handleGroupNameChange}
        handleGroupSubmit={handleGroupSubmit}
        handleAddGroup={handleAddGroup}
        handleGroupDeleteClick={handleGroupDeleteClick}
      />
      <DialogBox
        open={dialogOpen}
        title="정말로 삭제하시겠습니까?"
        text="삭제 시 복구가 불가합니다."
        handleConfirm={handleConfirm}
      />
    </>
  );
};

export default GroupContainer;
