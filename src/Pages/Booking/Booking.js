import React from "react";
import styled from "styled-components";
import CategoryComboBox from "./CategoryComboBox";
import RoomList from "./RoomList";
import RoomInfo from "./RoomInfo";

const Root = styled.div`
  margin: 10px;
  border-bottom: 1px solid #cfd3dc;
`;
const RoomWrapper = styled.div`
  display:flex;
`;
const RoomLeft = styled.div`
  flex: 2;
  height: 100%;  
`;
const RoomRight = styled.div`
  flex: 1;
`;

const Booking = (props) => {
  return (
    <>
    <Root>
      <CategoryComboBox compCategoryList={props.compCategoryList}/>
      <RoomWrapper>
        <RoomLeft>
          {/* 회의실 리스트 영역 */}
          <RoomList compRoomList={props.compRoomList}/>  
        </RoomLeft>
        <RoomRight>
          {/* 회의실 정보 등 information 노출 영역 */}
          <RoomInfo/>
        </RoomRight>
      </RoomWrapper>
    </Root>    
    </>
  );
}

export default Booking;