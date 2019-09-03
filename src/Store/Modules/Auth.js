import { createAction } from "redux-actions";
import * as AuthApi from "../../Api/Auth/Auth";

export const CHECK_USER = "auth/CHECK_USER";
export const CHECK_USER_SUCCESS = "auth/CHECK_USER_SUCCESS";
export const CHECK_USER_FAIL = "auth/CHECK_USER_FAIL";
export const SET_USER = "auth/SET_USER";
export const LOGOUT = "auth/LOGOUT";

export const checkUser = createAction(CHECK_USER, AuthApi.checkUser);
export const checkUserSuccess = createAction(CHECK_USER_SUCCESS);
export const checkUserFail = createAction(CHECK_USER_FAIL);
export const setUser = createAction(SET_USER, AuthApi.setUser);
export const logout = createAction(LOGOUT, AuthApi.logout);

const initialState = {
  isLogin: false, // 로그인여부
  userInfo: {}, // 계정정보
  message: "" // 메세지
};

const Auth = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case "auth/CHECK_USER":
      return {
        ...state,
        isLogin: payload.isAuth,
        message: payload.message
      };
    case "auth/CHECK_USER_SUCCESS":
      return {
        ...state,
        isLogin: true
      };
    case "auth/CHECK_USER_FAIL":
      return {
        ...state,
        isLogin: false
      };
    case "auth/SET_USER":
      return {
        ...state,
        isLogin: payload.isAuth,
        message: payload.message
      };
    case "auth/LOGOUT":
      return {
        ...state,
        isLogin: payload.isAuth,
        message: payload.message
      };
    default:
      return state;
  }
};

export default Auth;
