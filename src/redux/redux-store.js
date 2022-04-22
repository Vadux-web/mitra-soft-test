import { combineReducers, createStore } from "redux";
import galleryReducer from "./gallery-reducer";
import detailsReducer from "./details-reducer";

let reducers = combineReducers({
  homePage: galleryReducer,
  detailsPage: detailsReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
