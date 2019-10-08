import React from "react";
import { withRouter } from "react-router-dom";
import HeaderPresenter from "./HeaderPresenter";

import dotenv from "dotenv";
dotenv.config(); //.env 파일 로드

class HeaderContainer extends React.Component {
  componentDidMount = async () => {
    const { location, history } = this.props;
    const jwtToken = localStorage.getItem("jwtToken");

    const re = /(login|join|callback)/;
    let isAuthPath = re.test(location.pathname);
    // 인증이 필요한 페이지
    if (isAuthPath) {
      if (jwtToken) {
        alert("이미 로그인 되어 있습니다. 로그아웃 후 시도해주세요.");
        history.push("/");
      }
    } else {
      const obj = {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + jwtToken
        }
      };
      if (jwtToken) {
        //token 이 있는 경우
        const url = process.env.REACT_APP_HEROKU_URL + "/auth/jwt/check";
        await fetch(url, obj)
          .then(response => response.json())
          .then(json => {
            const { user } = json;
            localStorage.setItem("userId", user.id);
          })
          .catch(err => {
            console.log(err);
            localStorage.clear();
            alert("접근권한이 없습니다. 다시 로그인 하세요.");
            window.location.href = "/login";
          });
      }

      if (location.pathname !== "/" && location.pathname !== "/home") {
        if (!jwtToken) {
          alert("로그인 후 이용 가능합니다.");
          history.push("/login");
        }
      } else if (location.pathname === "/") {
        if (jwtToken) {
          history.push("/main");
        }
      }
    }
  };
  handleLogout = async e => {
    e.preventDefault();
    localStorage.clear();
    alert("로그아웃 되었습니다.");
    window.location.href = "/";
  };

  render() {
    const jwtToken = localStorage.getItem("jwtToken");
    return (
      <HeaderPresenter
        isLogin={jwtToken ? true : false}
        handleLogout={this.handleLogout}
      />
    );
  }
}

export default withRouter(HeaderContainer);
