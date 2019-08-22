import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Root = styled.div`
  width: 30%;
  border: 1px solid red;
`;

const Menu = (props) => {
  const {match} = props;
  return (
    <Root>
      <ul>
        <li><Link to={`${match.url}/category`}>Post1</Link></li>
        <li><Link to={`${match.url}/room`}>Post2</Link></li>
        <li><Link to={`${match.url}/bookform`}>Post3</Link></li>
      </ul>
    </Root>
  );
}

export default Menu;