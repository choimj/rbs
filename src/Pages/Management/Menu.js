import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Root = styled.div`
  width: 100%;
  border: 1px solid red;

  & a {
    width: 80%;
    border: 1px solid #cfd3dc;
    padding: 15px 10px;
    text-decoration: none;
    color: #000000;
    font-weight: bold;
    display: block;
    position: relative;
  }
  & a.active:after {
    content: "";
    width: 0px;
    height:0px;
    border-right:34px solid transparent;
    border-bottom:34px solid #1C90FB; 
    transform:rotate(225deg);
    -ms-transform:rotate(225deg);
    -webkit-transform:rotate(225deg);
    -moz-transform:rotate(225deg);
    -o-transform:rotate(225deg);
    position: absolute;
    top: 6px;
    right: -17px;
  }
`;


const Menu = (props) => {
  const {match} = props;
  const activeStyle = {
    backgroundColor: "#1C90FB",
    color: "#ffffff"    
  };
  return (
    <Root>      
      <NavLink to={`${match.url}/category`} activeStyle={activeStyle}>카테고리 관리</NavLink>
      <NavLink to={`${match.url}/room`} activeStyle={activeStyle}>회의실 관리</NavLink>
      <NavLink to={`${match.url}/bookform`} activeStyle={activeStyle}>예약폼 관리</NavLink>      
    </Root>
  );
}

export default Menu;