import { all } from "redux-saga/effects";
import { loginWatcher } from "./login-saga";
import { dashUpdateWatcher, dashWatcher } from "./dashboard-saga";

export default function* rootSaga() {
  yield all([loginWatcher(), dashWatcher(), dashUpdateWatcher()]);
}
