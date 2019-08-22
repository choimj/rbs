import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Root = styled.div`
  width: 100vw;
  height: 7vh;
  background-color: #1C90FB;
  position: relative;
  display: table;
  padding: 5px 10px;

  & div {    
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    width: 25%;
  }
  & div:first-child {
    text-align: left;
    font-size: 2em;
    color: #ffffff;
    font-weight: bold;
  }
  & div:last-child {
    text-align: right;
  }
  & div a {
    color: #000000;
    text-decoration: none;
  }
`;

const Header = (props) => {
  // console.log(props);
  return (    
    <Root>
      <div>RBS - {props.compInfo.compTitle}</div>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/Book">예약현황</Link></div>
      <div><Link to="/BookStep">예약</Link></div>
      <div><Link to="/Manage">관리</Link></div>
    </Root>
  );
}

export default Header;