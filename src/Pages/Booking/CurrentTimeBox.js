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
  setIntervalEvent = null;

  componentWillUnmount = () => {
    if(this.setIntervalEvent !== null){
      clearInterval(this.setIntervalEvent);
    }     
  }

  componentDidMount = () => {
    this.setIntervalEvent = setInterval(() => {
      this.setState({curTime: new Date().toLocaleString()});
    }, 1000);
  }

  render() {
    const {curTime} = this.state;
    
    
    return (
      <Root>current time {curTime}</Root>
    );
  }
}

export default CurrentTimeBox;