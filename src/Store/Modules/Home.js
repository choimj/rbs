import { createAction } from "redux-actions";

const SET_COMPANY = "home/SET_COMPANY";
const SET_CATEGORY = "home/SET_CATEGORY";
const SET_ROOM = "home/SET_ROOM";

export const setCompany = createAction(SET_COMPANY);
export const setCategory = createAction(SET_CATEGORY);
export const setRoom = createAction(SET_ROOM);

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
    case "home/SET_ROOM":
        return {
          ...state,
          compRoomList: action.payload
        };
    default:
      return state;
  }
};

export default Home;