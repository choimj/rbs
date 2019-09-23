import React from "react";
import { withRouter } from "react-router-dom";
import Login from "../Pages/Login";

import dotenv from "dotenv";
dotenv.config(); //.env 파일 로드

class AuthContainer extends React.Component {
  state = {
    email: "",
    password: "",
    rememberChecked: false
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
    // window.location.href = "http://localhost:4000/auth/google";
    const url = process.env.REACT_APP_HEROKU_URL + "/auth/google";
    // const url = process.env.REACT_APP_LOCAL_URL + ":5000/auth/google";
    window.location.href = url;
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
      // const url = "http://localhost:4000/auth/jwt";
      const url = process.env.REACT_APP_HEROKU_URL + "/auth/jwt";
      fetch(url, obj)
        .then(response => response.json())
        .then(json => {
          const { flag, jwtToken } = json;
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
