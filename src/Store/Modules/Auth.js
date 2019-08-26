import { createAction } from "redux-actions";

const AUTH_LOGIN_CHECK = "auth/AUTH_LOGIN_CHECK";
const AUTH_LOGIN_SUCCESS = "auth/AUTH_LOGIN_SUCCESS";
const AUTH_LOGIN_FAILURE = "auth/AUTH_LOGIN_FAILURE";

export const authLoginCheck = createAction(AUTH_LOGIN_CHECK);
export const authLoginSuccess = createAction(AUTH_LOGIN_SUCCESS);
export const authLoginFailure = createAction(AUTH_LOGIN_FAILURE);

const initialState = {
  status: {}
}

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case "auth/AUTH_LOGIN_CHECK":
      return {
        ...state,
        status: {
          isLogin: false,
          message: action.payload.message
        }
      };
    case "auth/AUTH_LOGIN_SUCCESS":
      return {
        ...state,
        status: {
          isLogin: true,
          user: action.payload.user,
          group: action.payload.group,
          message: action.payload.message
        }
      };
    case "auth/AUTH_LOGIN_FAILURE":
        return {
          ...state,
          status: {
            isLogin: false,
            message: action.payload.message
          }
        };    
    default:
      return state;
  }
};

export default Auth;