import React from "react";
import { withRouter } from "react-router-dom";
import Login from "../Pages/Login";

class AuthContainer extends React.Component {
  state = {
    email: "",
    password: "",
    rememberChecked: false
  };

  componentDidUpdate = (prevProps, prevState) => {
    // prevProps, prevState > 이전에 가졌던 props, state
    // const { isLogin } = this.props;
    // if (prevProps.isLogin !== isLogin && isLogin) {
    //   localStorage.setItem("isLogin", isLogin);
    // } else {
    // }
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
    window.location.href = "http://localhost:4000/auth/google";
  };

  handleComparePassword = (data, err) => {
    const { flag, message } = data.comparePassword;
    if (flag) {
      const obj = {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      };
      /**
       * jwt token 발급
       */
      const url = "http://localhost:4000/auth/jwt";
      fetch(url, obj)
        .then(response => response.json())
        .then(json => {
          const { flag, jwtToken } = json;
          // console.log(json);
          if (flag) {
            localStorage.setItem("jwtToken", jwtToken);
            window.location.href = "/main";
          }
        })
        .catch(err => console.log(err));
    } else {
      alert(message);
      return false;
    }
    // console.log(data);
  };

  render() {
    const { email, password } = this.state;
    const param = {
      email: email,
      password: password,
      handleChangeInput: this.handleChangeInput,
      handleComparePassword: this.handleComparePassword,
      googleOauthLogin: this.googleOauthLogin
    };
    return <Login {...param} />;
  }
}

export default withRouter(AuthContainer);
