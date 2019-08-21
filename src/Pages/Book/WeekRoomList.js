import React from "react";
// import styled from "styled-components";
// import TimeBlock from "./TimeBlock";
import WeekRoomListContainer from "../../Containers/WeekRoomListContainer";

const WeekRoomList = (props) => {  
  const {openTime, closeTime, roomCode} = props;
  
  console.log("=============== WeekRoomList",roomCode);
  return (    
    <>    
    <WeekRoomListContainer openTime={openTime} closeTime={closeTime} roomCode={roomCode}/>   
    </>
    
  );
}

export default WeekRoomList;