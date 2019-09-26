import React, { useState } from "react";
import RoomPresenter from "./RoomPresenter";
import { DELETE_ROOM } from "./Query";
import { useMutation } from "react-apollo";

const RoomContainer = () => {
  const curDate = new Date();
  const [room, setRoom] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editValues, setEditValues] = useState({
    groupId: "",
    groupName: "",
    categoryId: "",
    categoryName: "",
    roomId: "",
    roomName: "",
    roomStartTime: curDate,
    roomEndTime: curDate,
    minPerson: 0,
    location: ""
  });

  const [deleteRoom] = useMutation(DELETE_ROOM, {
    onCompleted: data => {
      alert("삭제되었습니다.");
      setInputEdit();
      setRoom({});
    },
    onError: err => {
      console.log("deleteRoom Error !! \n", err);
    }
  });

  const setInputEdit = () => {
    setEditValues({
      groupId: "",
      groupName: "",
      categoryId: "",
      categoryName: "",
      roomId: "",
      roomName: "",
      roomStartTime: curDate,
      roomEndTime: curDate,
      minPerson: 0,
      location: ""
    });
  };

  const handleRoomDeleteClick = (e, id) => {
    e.preventDefault();
    setDialogOpen(true);
  };

  const handleConfirm = op => {
    if (op === "yes") {
      setDialogOpen(false);
      const opts = {
        variables: {
          id: editValues.roomId
        }
      };
      deleteRoom(opts);
    } else if (op === "no") {
      setDialogOpen(false);
    }
  };

  const handleGroupClick = (e, groupId) => {
    e.preventDefault();

    setEditValues({
      ...editValues,
      groupId: groupId,
      groupName: "",
      categoryId: "",
      categoryName: "",
      roomId: "",
      roomName: "",
      roomStartTime: curDate,
      roomEndTime: curDate,
      minPerson: 0,
      location: ""
    });
  };

  const handleCategoryClick = (e, categoryId) => {
    e.preventDefault();
    setEditValues({
      ...editValues,
      categoryId: categoryId,
      roomId: "",
      roomName: "",
      roomStartTime: curDate,
      roomEndTime: curDate,
      minPerson: 0,
      location: ""
    });
  };

  const handleRoomClick = (e, roomId) => {
    e.preventDefault();
    setEditValues({
      ...editValues,
      roomId: roomId,
      participants: []
    });
  };

  return (
    <RoomPresenter
      dialogOpen={dialogOpen}
      room={room}
      setRoom={setRoom}
      editValues={editValues}
      setEditValues={setEditValues}
      handleRoomDeleteClick={handleRoomDeleteClick}
      handleConfirm={handleConfirm}
      handleGroupClick={handleGroupClick}
      handleCategoryClick={handleCategoryClick}
      handleRoomClick={handleRoomClick}
    />
  );
};

export default RoomContainer;
