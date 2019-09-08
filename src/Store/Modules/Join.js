import { createAction } from "redux-actions";

const SET_EMAIL = "SET_EMAIL";

export const setEmail = createAction(SET_EMAIL);

const initialState = {
  email: ""
};

const Join = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload
      };
    default:
      return state;
  }
};

export default Join;
