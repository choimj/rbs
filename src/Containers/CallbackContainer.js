import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import { bindActionCreators } from "redux";
import * as joinActions from "../Store/Modules/Join";

import dotenv from "dotenv";
dotenv.config(); //.env 파일 로드

class CallbackContainer extends React.Component {
  componentWillMount = () => {
    const { history, location, match } = this.props;
    let params = queryString.parse(location.search);
    if (match.params.path === "login") {
      const obj = {
        method: "POST",
        body: JSON.stringify({
          email: params.email
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
    } else if (match.params.path === "join") {
      if (params !== "") {
        const { joinActions } = this.props;
        joinActions.setEmail(params.email);
        history.push("/join");
      } else {
        alert("구글 인증 후 회원가입이 가능합니다.");
        window.location.href =
          process.env.REACT_APP_HEROKU_URL + "/auth/google";
      }
    }
  };
  render() {
    return <div></div>;
  }
}
const mapStateToProps = state => {
  return {
    email: state.Join.email
  };
};
const mapDispatchToPros = dispatch => {
  return {
    joinActions: bindActionCreators(joinActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(withRouter(CallbackContainer));
