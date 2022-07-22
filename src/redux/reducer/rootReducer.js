import { combineReducers } from "redux";
import { mainReducer } from "./mainReducer";
import { loaderReducer } from "./loaderReducer";
import { checkoutTotalReducer } from './checkoutTotalReducer';

const rootReducer = combineReducers({
  mainReducer: mainReducer,
  loaderReducer: loaderReducer,
  checkoutTotal: checkoutTotalReducer,
});

export default rootReducer;
