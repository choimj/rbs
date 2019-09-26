import React from "react";
import EditPresenter from "./EditPresenter";
import { useQuery, useMutation } from "react-apollo";
import { GET_ROOM, GET_CATEGORY, CREATE_ROOM, UPDATE_ROOM } from "./Query";

const EditContainer = ({
  setRoom,
  editValues,
  setEditValues,
  handleRoomDeleteClick
}) => {
  useQuery(GET_ROOM, {
    variables: {
      id: editValues.roomId
    },
    onCompleted: data => {
      if (data.room) {
        const {
          name,
          startTime,
          endTime,
          minPerson,
          location,
          groupId,
          categoryId
        } = data.room;
        const stArr = startTime.split(":");
        const etArr = endTime.split(":");
        const startDate = new Date("", "", "", stArr[0], stArr[1]);
        const endDate = new Date("", "", "", etArr[0], etArr[1]);
        setEditValues({
          ...editValues,
          roomName: name,
          roomStartTime: startDate,
          roomEndTime: endDate,
          minPerson: minPerson,
          location: location ? location : "",
          groupId: groupId.id,
          groupName: groupId.name,
          categoryId: categoryId.id,
          categoryName: categoryId.name
        });
      }
    }
  });

  useQuery(GET_CATEGORY, {
    variables: {
      id: editValues.categoryId
    },
    onCompleted: data => {
      if (data.category) {
        const { id, name, groupId } = data.category;
        setEditValues({
          ...editValues,
          categoryId: id,
          categoryName: name,
          groupId: groupId.id,
          groupName: groupId.name
        });
      }
    },
    onError: err => {
      console.log("error !!", err);
    }
  });

  const [createRoom] = useMutation(CREATE_ROOM, {
    onCompleted: data => {
      const { id } = data.createRoom;
      alert("생성되었습니다.");

      setEditValues({
        ...editValues,
        roomId: id
      });
      setRoom(data.createRoom);
    }
  });

  const [updateRoom] = useMutation(UPDATE_ROOM, {
    onCompleted: data => {
      alert("수정되었습니다.");
    },
    onError: err => {
      console.log("updateRoom Error !! \n", err);
    }
  });

  const handleRoomSubmit = e => {
    const {
      roomId,
      roomName,
      roomStartTime,
      roomEndTime,
      minPerson,
      location,
      groupId,
      categoryId
    } = editValues;
    const opts = {};
    const startTime = new Date(roomStartTime).toTimeString().substring(0, 5);
    const endTime = new Date(roomEndTime).toTimeString().substring(0, 5);
    opts.variables = {
      data: {
        id: roomId,
        name: roomName,
        startTime: startTime,
        endTime: endTime,
        minPerson: Number(minPerson),
        location: location
      }
    };

    if (roomId && roomId !== "") {
      //수정
      updateRoom(opts);
    } else {
      //생성
      opts.variables.data.groupId = groupId;
      opts.variables.data.categoryId = categoryId;
      createRoom(opts);
    }
  };

  const handleInputChange = e => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
  };
  const handleTimeChange = (date, name) => {
    setEditValues({ ...editValues, [name]: date });
  };

  return (
    <EditPresenter
      editValues={editValues}
      handleInputChange={handleInputChange}
      handleRoomSubmit={handleRoomSubmit}
      handleTimeChange={handleTimeChange}
      handleRoomDeleteClick={handleRoomDeleteClick}
    />
  );
};

export default EditContainer;
