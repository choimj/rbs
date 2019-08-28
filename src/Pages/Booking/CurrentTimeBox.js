import React from "react";

class CurrentTimeBox extends React.Component {
  state = {
    curTime: null,
    toDay: null
  };
  setIntervalEvent = null;

  componentWillUnmount = () => {
    if (this.setIntervalEvent !== null) {
      clearInterval(this.setIntervalEvent);
    }
  };

  componentDidMount = () => {
    this.setIntervalEvent = setInterval(() => {
      this.setState({ curTime: new Date().toLocaleString() });
    }, 1000);
  };

  render() {
    const { curTime } = this.state;

    return <span>current time {curTime}</span>;
  }
}

export default CurrentTimeBox;
