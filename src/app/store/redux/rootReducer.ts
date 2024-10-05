// libraries
import { combineReducers } from "redux";

// slices

// apis
import { emptySplitApi } from "./rtk/emptySplitApi";

// combine
const rootReducer = combineReducers({
  [emptySplitApi.reducerPath]: emptySplitApi.reducer,
});

export default rootReducer;
