import React from "react";
import {Route} from "react-router-dom";
// import ManagementContainer from "../../Containers/ManagementContainer";
import CategoryManagement from "./CategoryManagement";
import RoomManagement from "./RoomManagement";
import BookFormManagement from "./BookFormManagement";
import Menu from "./Menu";
import styled from "styled-components";

const Root = styled.div`
  border: 1px solid red;
  width: 90%;
  margin: auto;
  padding: 20px;
  height: 93vh;
`;

const Management = ({match}) => {
  // console.log(match);
  return (
    <Root>
      <Menu match={match}/>      
      <Route exact path={`${match.url}/category`} component={CategoryManagement}/>
      <Route exact path={`${match.url}/room`} component={RoomManagement}/>
      <Route exact path={`${match.url}/bookform`} component={BookFormManagement}/>
    </Root>
  );
}

export default Management;