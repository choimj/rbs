import React, { useState } from "react";
import RoomPresenter from "./RoomPresenter";
import { DELETE_ROOM } from "./Query";
import { useMutation } from "react-apollo";

const RoomContainer = () => {
  const curDate = new Date();
  const [room, setRoom] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editValues, setEditValues] = useState({
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
      roomId: "",
      roomName: "",
      roomStartTime: curDate,
      roomEndTime: curDate,
      minPerson: 0,
      location: ""
    });
  };

  const handleAddRoom = e => {
    e.preventDefault();
    setInputEdit();
  };

  const handleRoomEditClick = (e, id) => {
    e.preventDefault();
    setEditValues({ ...editValues, roomId: id });
  };

  const handleRoomDeleteClick = (e, id) => {
    e.preventDefault();
    setEditValues({
      ...editValues,
      roomId: id
    });
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

  return (
    <RoomPresenter
      dialogOpen={dialogOpen}
      room={room}
      setRoom={setRoom}
      editValues={editValues}
      setEditValues={setEditValues}
      handleAddRoom={handleAddRoom}
      handleRoomEditClick={handleRoomEditClick}
      handleRoomDeleteClick={handleRoomDeleteClick}
      handleConfirm={handleConfirm}
    />
  );
};

export default RoomContainer;
