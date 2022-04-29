import { takeEvery, call, put } from "redux-saga/effects";
import { REQUEST_DETAILS, SET_DETAILS } from "./details-reducer";
import { getDetails } from "../api/api";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_DETAILS, sagaWorker);
}

function* sagaWorker() {
  const payload = yield call(getDetails);
  yield put({ type: SET_DETAILS, payload });
}
