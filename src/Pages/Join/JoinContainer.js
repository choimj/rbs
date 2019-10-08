import React from "react";
import { connect } from "react-redux";
import JoinPresenter from "../Join/JoinPresenter";

import dotenv from "dotenv";
dotenv.config(); //.env 파일 로드

class JoinContainer extends React.Component {
  state = {
    email: "",
    name: "",
    password: ""
  };

  handleChangeInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  isEmailCheck = email => {
    if (email === "") {
      alert("구글 인증 후 진행해주세요.");
      window.location.href = process.env.REACT_APP_HEROKU_URL + "/auth/google";
    }
  };

  componentWillMount = () => {
    const email = localStorage.getItem("email");
    this.isEmailCheck(email);
    this.setState({
      email: email
    });
  };

  handleJoinCompleted = data => {
    alert("회원가입이 완료되었습니다.");
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
  };

  render() {
    const { email, name, password } = this.state;
    return (
      <JoinPresenter
        email={email}
        name={name}
        password={password}
        handleSubmit={this.handleSubmit}
        handleChangeInput={this.handleChangeInput}
        handleJoinCompleted={this.handleJoinCompleted}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.Join.email
  };
};
export default connect(
  mapStateToProps,
  null
)(JoinContainer);
