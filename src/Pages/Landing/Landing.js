import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import * as authActions from "../../Store/Modules/Auth";
// import Home from "./Home";
// import Main from "../Main";

class Landing extends React.Component {
  componentDidMount = async () => {
    const { isLogin } = this.props;
    // console.log(isLogin);
    if (!isLogin) {
      // history.push("/home");
      window.location.href = "/home";
    } else {
      // history.push("/main");
      window.location.href = "/main";
    }
  };

  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.Auth.isLogin,
    message: state.Auth.message
  };
};
const mapDispatchToPros = dispatch => {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(withRouter(Landing));
