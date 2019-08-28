import React from "react";
import Home from "./Home";
import Main from "../Main";

// const Landing = () => {
//   return <div>랜딩 진입 페이지</div>;
// };

class Landing extends React.Component {
  state = {
    isAuth: false
  };
  componentDidMount = () => {
    this.setState({
      isAuth: true
    });
  };
  render() {
    // const { match } = this.props;
    const { isAuth } = this.state;
    if (isAuth) {
      return <Main />;
    } else {
      return <Home />;
    }
  }
}

export default Landing;
