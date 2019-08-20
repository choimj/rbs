import React from "react";
import styled from "styled-components";

const Root = styled.div`  
  position: relative;
  width: 40px;
  height: 20px;
  display: inline-block;
  margin: 5px;
  
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

const createTimeBlock = (openTime, closeTime) => {  
  const resultArray = [];  

  for(let i=openTime; i<closeTime; i++){
    //let spanColor = "";
    resultArray.push(<Root key={i}>
                        <p>
                          <span stime={i+":00"} etime={i+":30"}></span>
                          <span stime={i+":31"} etime={i+":59"}></span>
                        </p>      
                        <p>{i}</p>
                      </Root>);
  }

  return resultArray;
}

const TimeBlock = (props) => {
  const {openTime, closeTime, bookingList} = props;
  //console.log(day);
  
  //console.log(bookingList);
  const timeBlockTags = createTimeBlock(openTime, closeTime);
  return (
    <>
    {timeBlockTags}
    </>
  );
}

export default TimeBlock;