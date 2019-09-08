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
  //   console.log(this.state);
  //   e.preventDefault();
  // };

  handelChangeInput = e => {
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

  render() {
    const { email, name, password } = this.state;
    return (
      <Join
        email={email}
        name={name}
        password={password}
        handleSubmit={this.handleSubmit}
        handelChangeInput={this.handelChangeInput}
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
