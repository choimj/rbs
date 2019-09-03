import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class LandingContainer extends React.Component {
  componentDidMount = () => {
    const { pathname } = this.props.location;
    //console.log(this.props.location.pathname);
    this.checkUser();
  };

  checkUser = () => {
    const { history, isLogin } = this.props;
    if (isLogin) {
      history.push("/");
    } else {
      history.push("/landing");
    }
  };

  render() {
    // 로그인 여부 확인
    return <div>LandingContainer</div>;
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.Auth.isLogin
  };
};

export default connect(
  mapStateToProps,
  null
)(withRouter(LandingContainer));
