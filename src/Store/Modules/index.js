import { combineReducers } from "redux";

import Init from "./Init";
import Auth from "./Auth";
import Join from "./Join";

export default combineReducers({ Init, Auth, Join });
