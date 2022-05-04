import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import galleryReducer from "./gallery-reducer";
import detailsReducer from "./details-reducer";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "./sagas";
import thunk from "redux-thunk";

let reducers = combineReducers({
  homePage: galleryReducer,
  detailsPage: detailsReducer,
});

const saga = createSagaMiddleware();

let store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

saga.run(sagaWatcher);

window.store = store;

export default store;
