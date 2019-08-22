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

const Title = styled.h3`
  font-size: 18px;
  padding: 20px 0;
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

const ButtonArea = styled.div`
  display: flex;
  & > h3 {
    padding: 10px 0;
  }
  & > button {
    padding: 5px;
    flex: 1;
  }
  & > button:last-child {
    margin-right: 0;
  }
`;
const TimeArea = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 25px;
  overflow: hidden;
  position: relative;
  & > div {
    width: 90%;
    /* border: 1px solid blue; */
    margin: auto;
  }
  & > span {
    /* border: 1px solid greenyellow; */
  }
  & > span:first-child {
    position: absolute;
    top: 7px;
    left: 0;
  }
  & > span:last-child {
    position: absolute;
    top: 7px;
    right: 0;    
  }
`;
const TimeElement = styled.div`
  position: relative;
  width: 50px;
  height: 25px;
  display: inline-block;
  margin: 0 2px;
  background-color: ${props => (props.istoday === 1) ? "rgb(251, 247, 209)" : ""};
  
  &:first-child {
    margin-left: 15px;
  }
  & > p > span {
    width: 25px;
    height: 25px;
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
          <span>&#60;</span>   
              <div>
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
            <TimeElement>
              <p>
                <span></span>
                <span></span>
              </p>
              <p>12</p>
            </TimeElement>
            <TimeElement>
              <p>
                <span></span>
                <span></span>
              </p>
              <p>13</p>
            </TimeElement>
            <TimeElement>
              <p>
                <span></span>
                <span></span>
              </p>
              <p>14</p>
            </TimeElement>
            <TimeElement>
              <p>
                <span></span>
                <span></span>
              </p>
              <p>15</p>
            </TimeElement>
            <TimeElement>
              <p>
                <span></span>
                <span></span>
              </p>
              <p>16</p>
            </TimeElement>
            <TimeElement>
              <p>
                <span></span>
                <span></span>
              </p>
              <p>17</p>
            </TimeElement>  
            </div> 
            <span>&#62;</span>                   
          </TimeArea>
            
          <div>         
            <Title>> 시간 간편 선택</Title>     
            <ButtonArea>                
              <button>30분</button>
              <button>1시간</button>
              <button>1시간 30분</button>
              <button>2시간</button>
            </ButtonArea>
          </div>          
        </ChoiceTimeBox>
        <Title>> 예약폼 작성</Title>
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
          <li>회사명 : </li>
          <li></li>
          <li>카테고리 : </li>
          <li></li>
          <li>회의실 : </li>
          <li></li>
          {/* <li>시간 : </li>
          <li></li> */}
        </ul>
      </RightArea>
    </Root>
  );
}

export default BookStep;