import React from "react";
// import styled from "styled-components";
// import TimeBlock from "./TimeBlock";
import WeekRoomListContainer from "../../../Containers/WeekRoomListContainer";

const WeekRoomList = props => {
  const { openTime, closeTime, roomCode } = props;

  // console.log("=============== WeekRoomList",roomCode);
  return (
    <div>
      <WeekRoomListContainer
        openTime={openTime}
        closeTime={closeTime}
        roomCode={roomCode}
      />
    </div>
  );
};

export default WeekRoomList;
