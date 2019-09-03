import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import Login from "../Pages/Login";

import * as authActions from "../Store/Modules/Auth";

class AuthContainer extends React.Component {
  state = {
    email: "",
    password: "",
    rememberChecked: false
  };

  componentDidUpdate = (prevProps, prevState) => {
    // prevProps, prevState > 이전에 가졌던 props, state
    const { isLogin } = this.props;
    if (prevProps.isLogin !== isLogin && isLogin) {
      localStorage.setItem("isLogin", isLogin);
    } else {
    }
  };

  handleChangeInput = e => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };
  handleChangeCheckbox = e => {
    this.setState({
      rememberChecked: e.target.checked
    });
  };
  handleMoveUrl = e => {
    const { history } = this.props;
    history.push("/join");
  };
  handleLogin = async e => {
    const { authActions, history } = this.props;
    const { email, password } = this.state;
    if (email === "") {
      alert("Email을 입력하세요.");
      return false;
    } else if (password === "") {
      alert("Password를 입력하세요.");
      return false;
    }

    try {
      await authActions.checkUser(email, password);
      const { isLogin, message } = this.props;
      alert(message);
      if (isLogin) {
        await authActions.checkUserSuccess();
        await authActions.setUser(email);
        history.push("/");
      }
      // console.log(isLogin);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <Login
        handleChangeInput={this.handleChangeInput}
        handleChangeCheckbox={this.handleChangeCheckbox}
        handleMoveUrl={this.handleMoveUrl}
        handleLogin={this.handleLogin}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.Auth.isLogin,
    userInfo: state.Auth.userInfo,
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
)(withRouter(AuthContainer));
