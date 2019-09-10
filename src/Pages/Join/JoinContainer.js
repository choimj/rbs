import React from "react";
import { connect } from "react-redux";
import Join from "../Join/Join";

class JoinContainer extends React.Component {
  state = {
    email: "",
    name: "",
    password: ""
  };

  // handleSubmit = e => {
  //   // const { email, name, password } = this.state;
  //   // console.log(this.state);
  //   const opts = {
  //     variables: { email, name, password },
  //     onCompleted: email => handleJoinCompleted(email)
  //   };

  //   createUser(opts);

  //   e.preventDefault();
  // };

  handleChangeInput = e => {
    // console.log(e.target.id);
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
