import React from "react";
import { connect } from "react-redux";
import Join from "../Join/Join";

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
      window.location.href = "http://localhost:4000/auth/google";
    }
  };

  componentWillMount = () => {
    const { email } = this.props;
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
    const url = "http://localhost:4000/auth/jwt";
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
      <Join
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
