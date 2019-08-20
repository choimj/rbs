import React from "react";
import styled from "styled-components";
import CurrentTimeBox from "./CurrentTimeBox";

const WrapperBox = styled.div`
  width: 30%;

  & select {
    width: 100%;
    font-size: 1.5em;
  }
`;
const CategoryComboBox = ({compCategoryList}) => {
  return (
    <WrapperBox>
      <select>
      {compCategoryList.map((item, i) => (          
        <option key={i} value={"cate_"+item.cateCode}>{item.cateTitle}</option>
      ))}
      </select> 
      <CurrentTimeBox />    
    </WrapperBox>
  );
}

export default CategoryComboBox;