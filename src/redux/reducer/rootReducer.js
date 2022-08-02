import { combineReducers } from "redux";
import { mainReducer } from "./mainReducer";
import { loaderReducer } from "./loaderReducer";
import checkoutArticlesReducer from "./checkoutArticlesReducer";
import { checkoutTotalReducer } from './checkoutTotalReducer';

const reducer = combineReducers({
  info: mainReducer,
  loader: loaderReducer,
  checkoutArticles: checkoutArticlesReducer,
  checkoutTotal: checkoutTotalReducer,
});

export default reducer;
