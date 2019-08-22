import React from "react";
import styled from "styled-components";

const Root = styled.div`  
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

const createTimeBlock = (openTime, closeTime, day, bookingList) => {  
  const resultArray = [];
  const timeSpan = []; 
  const bookElement = (bookingList.length > 0) ? [bookingList.shift()] : [];

  //console.log(day, bookElement, bookElement.length);
  
  for(let i=openTime; i<=closeTime-1; i++){
   
    let leftSpanStartTime = new Date(day + " " + i + ":0");
    // let leftSpanEndTime = new Date(day + " " + i + ":29");
    // let rightSpanStartTime = new Date(day + " " + i + ":30");
    // let rightSpanEndTime = new Date(day + " " + i + ":59");
    const tmp = [];
    //console.log(bookElement.length);
    if(bookElement.length>0) {
      //console.log("aaaa");
      let bookStartTime = new Date(day + " " + bookElement[0].startHour + ":" + bookElement[0].startMinute);
      console.log(bookStartTime);
      if(leftSpanStartTime >= bookStartTime){
        tmp.push(<span >{bookElement[0].startHour + ":" + bookElement[0].startMinute}</span>);
      }
    }else {

    }

    //console.log(tmp.length);
    timeSpan.push(
        <>
        <p>            
          {/* {tmp} */}
          <span ></span>
          <span ></span>
        </p>
        <p>{i}</p>
        </>
    );
   
  }

  

  // console.log(timeSpan);
  timeSpan.map((item, i) => {
    resultArray.push(
      <Root key={i}>        
          {item}       
      </Root>
    );
    return resultArray;
  });
  // resultArray.push()

  return resultArray;
}

const TimeBlock = (props) => {
  const {openTime, closeTime, day, bookingList} = props;
  const timeBlockTags = createTimeBlock(openTime, closeTime, day, bookingList);
  // const timeBlock = createTimeBlock(openTime, closeTime, day, bookingList);
  return (
    <>
    {timeBlockTags}
    {/* {timeBlock.length} */}
    </>
  );
}

export default TimeBlock;