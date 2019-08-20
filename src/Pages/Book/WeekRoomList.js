import React from "react";
import styled from "styled-components";
import TimeBlock from "./TimeBlock";

const Root = styled.div`
  clear: both;
  text-align: left;
  padding-top: 5px;
  
  & > ul > li > span:first-child {   
    display: block;      
    font-size: 15px;
    width:15%;
    text-align: center;
    float: left;
    padding: 8px 0;
  }
  & > ul > li > span:nth-child(2) {
    border: 1px solid #cfd3dc;
    display: block;
    width: 80%;
    height: 100%;  
    border-radius: 20px / 20px;
    float: left;
  }
`;

const DayColor = styled.span`
  display: block;
  border-radius: 20px / 20px;
  background-color: ${props => {
    switch(props.dayofweek){
        case 0:
        case 6:
          return "#ffffff";
        default:
          return "#1C90FB";
      }
  }};
  color: ${props => {
      switch(props.dayofweek){
        case 0:
          return "#A81515";
        case 6:
          return "blue";
        default:
          return "#ffffff";
      }
    }};    
    border:  ${props => {
      switch(props.dayofweek){
          case 0:
              case 6:
          return "1px solid #1C90FB";
          default:
            return "none";
        }
    }};      
    font-size: 15px;
    width:15%;
    text-align: center;
    float: left;
    padding: 8px 0;
`;
const WeekSpan = styled.span`
  background-color: ${props => (props.istoday === 1 ? "rgb(251, 247, 209)" : "")};
`;


const WeekRoomList = (props) => {  
  const {thisWeek, openTime, closeTime, roomCode} = props;
  //query
  //각 회의실의 일자에 예약된 내용이 있는가
  /**
   * select * 
   * from bookingTable
   * where roomCode="r1" 
   * and (bookDate >= 2019-08-18 and bookDate <= 2019-08-24)
   * order by bookDate, startTime
   */
  const bookingList = [
    {bookDate: "2019-08-19", bookTitle: "Title1", bookDept: "UI/UX Core", bookName: "홍길동",  startTime: "09:00", endTime: "10:00"},
    {bookDate: "2019-08-20",bookTitle: "Title2", bookDept: "Cell6", bookName: "최민지", startTime: "13:00", endTime: "15:00"},
    {bookDate: "2019-08-20",bookTitle: "Title3", bookDept: "경영관리", bookName: "홍길동", startTime: "16:00", endTime: "16:30"}    
  ];

  // const bookingList = {
  //   "r1" : [
  //     {"2019-08-18" : []},
  //     {
  //       "2019-08-19" : [
  //         {bookTitle: "Title1", bookDept: "UI/UX Core", bookName: "홍길동",  startTime: "09:00", endTime: "10:00"},
  //         {bookTitle: "Title2", bookDept: "Cell6", bookName: "최민지", startTime: "13:00", endTime: "15:00"},
  //         {bookTitle: "Title3", bookDept: "경영관리", bookName: "홍길동", startTime: "16:00", endTime: "16:30"} 
  //       ]
  //     },
  //     {"2019-08-18" : []},
  //   ]
  // };
  

  return (    
    <>
    {thisWeek.map((item, i) => (      
      <Root key={i}>      
        <ul>
          <li>         
              <DayColor dayofweek={item.dayOfWeek}>{item.day}</DayColor>
              <WeekSpan istoday={item.isToday}><TimeBlock openTime={openTime} closeTime={closeTime} /></WeekSpan>         
          </li>
        </ul>
      </Root>   
    ))}
    </>
    
  );
}

export default WeekRoomList;