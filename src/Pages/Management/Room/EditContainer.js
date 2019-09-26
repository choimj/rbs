import React from "react";
import EditPresenter from "./EditPresenter";
import { useQuery, useMutation } from "react-apollo";
import { GET_ROOM, CREATE_ROOM, UPDATE_ROOM } from "./Query";

const EditContainer = ({ setRoom, editValues, setEditValues }) => {
  useQuery(GET_ROOM, {
    variables: {
      id: editValues.roomId
    },
    onCompleted: data => {
      if (data.room) {
        const { name, startTime, endTime, minPerson, location } = data.room;
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
          location: location ? location : ""
        });
      }
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
      location
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
      setEditValues={setEditValues}
      handleInputChange={handleInputChange}
      handleRoomSubmit={handleRoomSubmit}
      handleTimeChange={handleTimeChange}
    />
  );
};

export default EditContainer;
