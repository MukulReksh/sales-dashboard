import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import Summaryreducer from "./Summaryreducer";
import PurchaseReducer from "./PurchaseReducer";

export default combineReducers({
  productReducer,
  cartReducer,
  Summaryreducer,
  PurchaseReducer,
});
