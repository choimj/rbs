import React from "react";
import styled from "styled-components";

const Root = styled.div`
  font-size: 13px;
  margin-top: 15px;
`;

class CurrentTimeBox extends React.Component {
  state = {
    curTime: null,
    toDay: null
  }

  render() {
    const {curTime} = this.state;
    setInterval(() => {
      this.setState({curTime: new Date().toLocaleString()});
    }, 1000);
    
    return (
      <Root>current time {curTime}</Root>
    );
  }
}

export default CurrentTimeBox;