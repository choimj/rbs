import React from "react";
import useReactRouter from "use-react-router";
import queryString from "query-string";
import dotenv from "dotenv";
dotenv.config(); //.env 파일 로드

const CallbackContainer = () => {
  const { history, location, match } = useReactRouter();
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
          const obj = {
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: "Bearer " + jwtToken
            }
          };
          const url = process.env.REACT_APP_HEROKU_URL + "/auth/jwt/check";
          fetch(url, obj)
            .then(response => response.json())
            .then(json => {
              const { user } = json;
              localStorage.setItem("userId", user.id);
              window.location.href = "/main";
            })
            .catch(err => {
              console.log(err);
              localStorage.clear();
              alert("접근권한이 없습니다. 다시 로그인 하세요.");
              window.location.href = "/login";
            });
        }
      })
      .catch(err => console.log(err));
  } else if (match.params.path === "join") {
    if (params !== "") {
      localStorage.setItem("email", params.email);
      history.push("/join");
    } else {
      alert("구글 인증 후 회원가입이 가능합니다.");
      window.location.href = process.env.REACT_APP_HEROKU_URL + "/auth/google";
    }
  }
  return <div></div>;
};

export default CallbackContainer;
