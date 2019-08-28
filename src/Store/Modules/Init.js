import { createAction } from "redux-actions";

const SET_COMPANY = "SET_COMPANY";
const SET_CATEGORY = "SET_CATEGORY";
const SET_ROOMLIST = "SET_ROOMLIST";
const SET_BOOKLIST = "SET_BOOKLIST";

export const setCompany = createAction(SET_COMPANY);
export const setCategory = createAction(SET_CATEGORY);
export const setRoomList = createAction(SET_ROOMLIST);
export const setBookList = createAction(SET_BOOKLIST);

const initialState = {
  isLogin: false,
  compInfo: {},
  compCategoryList: [],
  compRoomList: []
};

const Init = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COMPANY":
      return {
        ...state,
        compInfo: action.payload
      };
    case "SET_CATEGORY":
      return {
        ...state,
        compCategoryList: action.payload
      };
    case "SET_ROOMLIST":
      return {
        ...state,
        compRoomList: action.payload
      };
    default:
      return state;
  }
};

export default Init;
