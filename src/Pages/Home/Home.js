import React from "react";
import styled from "styled-components";

const Root = styled.div`  
  position: relative;
  width: 100%;
  height: 93vh;  
`;
const Inner = styled.div`
  position: absolute;
  width: 80%;  
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);      
  border: none;
  background-color : #1C90FB;
  text-align: center;
  padding-top: 20px;
`;

const Home = () => {
  return (
    <Root>
      <Inner>DashBoard</Inner>
    </Root>
  );
}

export default Home;