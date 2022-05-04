import { take, put } from "redux-saga/effects";
import {
  REQUEST_CARDS,
  SET_CARDS,
  toggleIsFetchingAC,
} from "./gallery-reducer";
import { getCards } from "../api/api";

export function* sagaWorker() {
  yield put(toggleIsFetchingAC(true));
  const data = yield getCards();
  yield put({ type: SET_CARDS, cards: data });
  yield put(toggleIsFetchingAC(false));
}

export function* sagaWatcher() {
  yield take(REQUEST_CARDS);
  yield sagaWorker();
}
