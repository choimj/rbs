import React from "react";
import styled from "styled-components";
import * as Utils from "../../Utils/Date";

const Root = styled.div`
  width:70%;
  margin: 20px auto;
  border: 1px solid #cfd3dc;
  height: 80vh;
  padding: 20px;
  position: relative;
  
  & h1 {
    font-size: 24px;
  }
`;
const LeftArea = styled.div`
  padding: 20px;
  width: 70%;
  & > table {
    width: 100%;
  }
  & > table > tbody > tr {
    border-bottom: 1px solid rgb(98, 199, 246);
    
  }
  & > table > tbody > tr:last-child {
    border-bottom: none;
  }
  & > table > tbody > tr > th {
    background-color: rgb(213, 235, 255);    
    border-right: 3px solid #1C90FB; 
    width: 40%;
    font-size: 15px;
    padding: 5px;
  }
  & > table > tbody > tr > td {
    font-size: 13px;
    padding: 10px;
  }
  & > table > tbody > tr > td > input {
    width: 100%;
    padding: 2px;
  }
  
`;

const ChoiceTimeBox = styled.div`
  & > h1 {
    text-align:center;
  }
`;
const ThisWeekBox = styled.div`
  text-align: center;
  padding: 20px 0;
  & > span {
    font-size: 20px;
    margin-right: 25px;
  }
  & > span:last-child {
    margin: 0;
  }
`;

const ThisWeekSpan = styled.span`
  color: ${props => (props.istoday === 1) ? "#1C90FB" : ""};
`;

const RightArea = styled.div`
  width: 30%;
  position: absolute;
  top: 10px;
  right: 10px;
  border: 1px solid #1C90FB;
  height: 90%;

  & ul {
    padding: 20px 10px;
  }
  & ul li {
    padding: 10px 0;
  }
`;
const TimeArea = styled.div`
  margin: 30px 0;
  
`;
const ButtonArea = styled.div`
  margin-top: 30px;
  & > h3 {
    padding: 10px 0;
  }
  & > button {
    padding: 5px 20px;
    margin-right: 30px;
    
  }
  & > button:last-child {
    margin-right: 0;
  }
`;
const TimeElement = styled.div`
  position: relative;
  width: 40px;
  height: 20px;
  display: inline-block;
  margin: 5px;
  background-color: ${props => (props.istoday === 1) ? "rgb(251, 247, 209)" : ""};
  
  &:first-child {
    margin-left: 15px;
  }
  & > p > span {
    width: 20px;
    height: 20px;
    border: 1px solid #cfd3dc;
    display: inline-block;
    cursor: pointer;
    background-color: #ffffff;
  }
  & > p:last-child {    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 3px;
    font-size: 13px;
  }  
`;

const BookStep = (props) => {
  const thisMonth = Utils.getMonth();
  const thisWeek = Utils.getWeek();
  return(
    <Root>      
      <h1>시간 선택 및 예약폼 작성</h1>
      <LeftArea>
        <ChoiceTimeBox>
          <h1>{thisMonth}월</h1>
          <ThisWeekBox>
            {thisWeek.map((item, i) => (
              <ThisWeekSpan key={i} istoday={item.isToday}>{item.date}</ThisWeekSpan>
            ))}
          </ThisWeekBox>
          <TimeArea>
            <TimeElement>
              <p>
                <span></span>
                <span></span>
              </p>
              <p>9</p>
            </TimeElement>
            <TimeElement>
              <p>
                <span></span>
                <span></span>
              </p>
              <p>10</p>
            </TimeElement>
            <TimeElement>
              <p>
                <span></span>
                <span></span>
              </p>
              <p>11</p>
            </TimeElement>
            <div>              
              <ButtonArea>
                <h3>시간 간편 선택</h3>
                <button>30분</button>
                <button>1시간</button>
                <button>1시간 30분</button>
                <button>2시간</button>
              </ButtonArea>
            </div>
          </TimeArea>
          
        </ChoiceTimeBox>
        <h3>예약폼 작성</h3>
        <table>
          <tbody>
            <tr>
              <th>회의 제목</th>
              <td><input/></td>
            </tr>
            <tr>
              <th>부 서</th>
              <td><input/></td>
            </tr>
            <tr>
              <th>이 름</th>
              <td><input/></td>
            </tr>
          </tbody>
        </table>
      </LeftArea>
      <RightArea>
        <ul>
          <li>카테고리 : </li>
          <li></li>
          <li>회의실 : </li>
          <li></li>
          <li>시간 : </li>
          <li></li>
        </ul>
      </RightArea>
    </Root>
  );
}

export default BookStep;