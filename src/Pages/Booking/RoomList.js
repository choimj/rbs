import React from "react";
import styled from "styled-components";
import WeekRoomList from "./WeekRoomList";
import * as Utils from "../../Utils/Date";

const Accordion = styled.div` 
  padding-top: 20px;
  
  & > ul {    
    border-left: 1px solid #cfd3dc;
    border-right: 1px solid #cfd3dc;
  }
  & > ul > li {    
    background-color:#1C90FB;
    border-bottom: 1px solid #cfd3dc;
    position: relative;
  }
  & > ul > li > div a > span:first-child {
    display: inline-block;
    overflow: hidden;
    background: url(https://static.wehago.com/imgs/common/sp_lux.png) -275px -260px;   
    vertical-align: middle;
    width: 12px;
    height: 6px;  
    margin-right: 10px;
  }  
  & > ul > li > div a > span:last-child {
    font-size: 10px;
    float:right;
    text-decoration: underline;
  }
  & > ul > li:last-child {
    border-bottom: none;
  }
  /* 아코디언 스타일 */
  & > ul > li  a + div {        
    height: 0;
    overflow: hidden;  
  }
  & > ul > li a {
    text-decoration: none;
    color: #ffffff;
    display: block;
    padding: 15px 10px;
  }
  & > ul > li :target a + div{    
    height: 400px; 
    background-color: #ffffff;
    padding: 10px;
    text-align: center;
    overflow: auto;
  }
  & > ul > li :target a span:first-child{
    background: url(https://static.wehago.com/imgs/common/sp_lux.png) -275px -250px;
  }
  & > ul > li a + div h1 {
    padding: 10px 0;
    font-size: 24px;
  }

  & > ul > li a + div p:nth-child(2) {
    float: right;    
  }
  & > ul > li a + div > p > span {
    font-size: 12px;
    display: inline-block;
    vertical-align: middle;
  }
  & > ul > li a + div > p > span:nth-child(2n-1) {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
  & > ul > li a + div > p > span:nth-child(1) {    
    background-color: #A81515;
  }
  & > ul > li a + div > p > span:nth-child(3) {    
    background-color: #ffffff;
    border: 1px solid #cfd3dc;
    margin-left: 10px;
  }  
`;
const WeekRoomListBox = styled.div`
  padding-top: 15px;
  clear: both;
`;

const RoomList = ({compRoomList}) => {
 
 const thisMonth = Utils.getMonth();
 
  return (
    <Accordion>
      <ul>
        {compRoomList.map((item, i) => (
          <li key={i}>
            <div id={"room_"+i}>
            <a href={"#room_"+i}>
              <span></span>
              <span>{item.roomTitle}</span>
              <span>회의실 정보 자세히보기</span>
            </a>
            <div>
              <h1>{thisMonth}월</h1>
              <p>
                <span></span>
                <span>예약불가</span>
                <span></span>
                <span>예약가능</span>
              </p>
              <WeekRoomListBox>
                <WeekRoomList openTime={item.roomOpenTime} closeTime={item.roomCloseTime} roomCode={item.roomCode}/>                
              </WeekRoomListBox>
            </div>              
           </div>           
          </li>   
        ))}
      </ul>
    </Accordion>
  );
}

export default RoomList;