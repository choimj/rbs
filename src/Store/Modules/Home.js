import { createAction } from "redux-actions";

const SET_COMPANY = "home/SET_COMPANY";
const SET_CATEGORY = "home/SET_CATEGORY";
const SET_ROOMLIST = "home/SET_ROOMLIST";
const SET_BOOKLIST = "home/SET_BOOKLIST";

export const setCompany = createAction(SET_COMPANY);
export const setCategory = createAction(SET_CATEGORY);
export const setRoomList = createAction(SET_ROOMLIST);
export const setBookList = createAction(SET_BOOKLIST);

const initialState = {
  compInfo: {},
  compCategoryList: [],
  compRoomList: []
}

const Home = (state = initialState, action) => {
  switch (action.type) {
    case "home/SET_COMPANY":
      return {
        ...state,
        compInfo: action.payload
      };
    case "home/SET_CATEGORY":
        return {
          ...state,
          compCategoryList: action.payload
        };
    case "home/SET_ROOMLIST":
        return {
          ...state,
          compRoomList: action.payload
        };    
    default:
      return state;
  }
};

export default Home;