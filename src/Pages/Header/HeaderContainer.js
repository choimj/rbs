import React from "react";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import * as authActions from "../../Store/Modules/Auth";

class HeaderContainer extends React.Component {
  componentDidMount = async () => {
    // console.log("componentDidMount");
    const { location, history } = this.props;
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
      await authActions.checkUserSuccess();
    }
    const re = /(login|join|callback)/;
    let isAuthPath = re.test(location.pathname);

    if (isAuthPath) {
      if (jwtToken) {
        alert("이미 로그인 되어 있습니다. 로그아웃 후 시도해주세요.");
        history.push("/");
      }
    } else {
      // console.log(jwtToken);
      const obj = {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + jwtToken
        }
      };
      // console.log(obj);
      if (jwtToken) {
        //token 이 있는 경우
        const url = "http://localhost:4000/auth/jwt/check";
        fetch(url, obj)
          .then(response => response.json())
          .then(json => {
            console.log("fetch Result >>> ", json);
          })
          .catch(err => {
            console.log(err);
            localStorage.clear();
            alert("접근권한이 없습니다. 다시 로그인 하세요.");
            window.location.href = "/login";
          });
      } else {
        window.location.href = "/login";
      }

      if (location.pathname !== "/" && location.pathname !== "/home") {
        if (!jwtToken) {
          alert("로그인 후 이용 가능합니다.");
          history.push("/login");
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
      <Header
        isLogin={jwtToken ? true : false}
        handleLogout={this.handleLogout}
      />
    );
  }
}

export default withRouter(HeaderContainer);
