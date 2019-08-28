import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
// import App from "../Pages/App";
import Login from "../Pages/Login";

import * as authActions from "../Store/Modules/";

class AuthContainer extends React.Component {
  state = {
    email: "",
    userName: "",
    password: "",
    rememberChecked: false
  };

  componentDidUpdate = (prevProps, prevState) => {
    // prevProps, prevState > 이전에 가졌던 props, state
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
    console.log("handleLogin");
    try {
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    // const { authActions } = this.props;
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

const mapDispatchToPros = dispatch => {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
};

export default connect(
  null,
  mapDispatchToPros
)(withRouter(AuthContainer));
