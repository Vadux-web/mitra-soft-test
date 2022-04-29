import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import galleryReducer from "./gallery-reducer";
import detailsReducer from "./details-reducer";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "./sagas";

let reducers = combineReducers({
  homePage: galleryReducer,
  detailsPage: detailsReducer,
});

const saga = createSagaMiddleware();

let store = createStore(reducers, compose(applyMiddleware(saga)));

saga.run(sagaWatcher);

window.store = store;

export default store;
