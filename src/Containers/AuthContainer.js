import React from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import Login from "../Pages/Login";
// import { GoogleOauthApi } from "../Api";

// import * as authActions from "../Store/Modules/Auth";

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
  handleMoveUrl = (e, url) => {
    window.location.href = url;
  };

  googleOauthLogin = () => {
    // GoogleOauthApi.getGoogleOauth();
    window.location.href = "http://localhost:4000/auth/google";
  };

  handleComparePassword = (data, err) => {
    // console.log(data.comparePassword);
    const { comparePassword } = data;
    if (comparePassword === "success") {
      const obj = {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      };
      const url = "http://localhost:4000/auth/jwt";
      fetch(url, obj)
        .then(response => response.json())
        .then(json => {
          const { message, jwtToken } = json;
          console.log(json);
          if (message === "success") {
            localStorage.setItem("jwtToken", jwtToken);
            // window.location.href="/";
          }
        })
        .catch(err => console.log(err));
      /**
       * jwt token 발급
       */
      console.log("Completed!!!!");
    } else {
    }

    console.log(data);
  };

  render() {
    const { email, password } = this.state;
    return (
      <Login
        email={email}
        password={password}
        handleChangeInput={this.handleChangeInput}
        handleChangeCheckbox={this.handleChangeCheckbox}
        handleMoveUrl={this.handleMoveUrl}
        handleLogin={this.handleLogin}
        handleComparePassword={this.handleComparePassword}
        googleOauthLogin={this.googleOauthLogin}
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

// const mapDispatchToPros = dispatch => {
//   return {
//     authActions: bindActionCreators(authActions, dispatch)
//   };
// };

export default connect(
  mapStateToProps,
  null
)(withRouter(AuthContainer));
