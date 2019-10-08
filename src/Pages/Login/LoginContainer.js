import React, { useState } from "react";
import LoginPresenter from "./LoginPresenter";
import { COMPARE_PASSWORD } from "./Query";
import { useMutation } from "@apollo/react-hooks";

const LoginContainer = () => {
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: ""
  });

  const [comparePassword] = useMutation(COMPARE_PASSWORD, {
    onCompleted: data => {
      getJwtToken(data);
    },
    onError: err => {
      console.log(err);
    }
  });

  const loginFormCheck = e => {
    const { email, password } = loginValues;
    const opts = {
      variables: { email: email, password: password }
    };
    if (email === "") {
      alert("Email을 입력하세요.");
      return false;
    } else if (password === "") {
      alert("Password를 입력하세요.");
      return false;
    }
    comparePassword(opts);
  };

  const handleChangeInput = e => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value });
  };

  const googleOauthLogin = () => {
    const url = process.env.REACT_APP_HEROKU_URL + "/auth/google";
    window.location.href = url;
  };

  const getJwtToken = data => {
    const { flag, message } = data.comparePassword;
    if (flag) {
      const obj = {
        method: "POST",
        body: JSON.stringify({
          email: loginValues.email
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
    } else {
      alert(message);
      return false;
    }
  };

  const param = {
    email: loginValues.email,
    password: loginValues.password,
    handleChangeInput: handleChangeInput,
    googleOauthLogin: googleOauthLogin,
    loginFormCheck: loginFormCheck
  };
  return <LoginPresenter {...param} />;
};

export default LoginContainer;
