import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import compareReducer from "./compareReducer";
import wishlistReducer from "./wishlistReducer";
import shopReducer from "./shopReducer";
import shopFilterReducer from "./shopFilterReducer";

const rootReducer = combineReducers({
  shopReducer,
  shopFilterReducer,
  compareReducer,
  cartReducer,
  wishlistReducer,
});

export default rootReducer;
