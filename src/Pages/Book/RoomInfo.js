import React from "react";
import styled from "styled-components";

const Root = styled.div`  
  & > h1 {
    background-color: #1C90FB;
    padding: 10px 10px;    
    color: #ffffff;
  }
  & > div {    
    width: 100%;
    height: 500px;
    padding: 5px;
  }
`;
const InfoBox = styled.table`  
  width: 100%;
  & > tbody > tr {
    border-bottom: 1px solid rgb(98, 199, 246);
  }
  & > tbody > tr:last-child {
    border-bottom: none;
  }

  & > tbody > tr > th {
    background-color: rgb(213, 235, 255);    
    border-right: 3px solid #1C90FB; 
    width: 30%;
    font-size: 15px;
  }
  & > tbody > tr > td {
    font-size: 13px;
    padding: 10px;
  }  
`;
const BookInfoBox = styled.table`
  margin-top: 15px;
  width: 100%;
  & > tbody > tr {
    border-bottom: 1px solid rgb(98, 199, 246);
  }
  & > tbody > tr:last-child {
    border-bottom: none;
  }
  & > tbody > tr > th {
    background-color: rgb(213, 235, 255);    
    border-right: 3px solid #1C90FB; 
    width: 30%;
    font-size: 15px;
  }
  & > tbody > tr > td {
    font-size: 13px;
    padding: 10px;
  }
`;

const RoomInfo = (props) => {
  return (
    <Root>
      <h1>회의실 정보</h1>
      <div>
        <InfoBox>
          <tbody>
            <tr>
              <th>회의실 명</th>
              <td>111111</td>
            </tr>
            <tr>
              <th>운영 시간</th>
              <td>111111</td>
            </tr>
            <tr>
              <th>수용 인원</th>
              <td>11111</td>
            </tr>
            <tr>
              <th>위    치</th>
              <td>11111</td>
            </tr>
            <tr>
              <th>이용 불가</th>
              <td>111111</td>
            </tr>
          </tbody>
        </InfoBox>
        <BookInfoBox>
          <tbody>
            <tr>
              <th>회의 제목</th>
              <td>UI/UX 바닐라스크립트 관련 스터디</td>
            </tr>
            <tr>
              <th>부    서</th>
              <td>UI/UX Core 부산</td>
            </tr>
            <tr>
              <th>이    름</th>
              <td>최 민 지</td>
            </tr>
          </tbody>
        </BookInfoBox>
      </div>
    </Root>
  );
}

export default RoomInfo;