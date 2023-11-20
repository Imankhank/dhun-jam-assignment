import { call, takeLatest } from "redux-saga/effects";
import { DASH_ACTION, DASH_UPDATE, LOGIN_ACTION } from "../types";
import { dashApi, dashUpdateApi } from "../apis/dashboard-api";

export function* dashWorker(action) {
  try {
    const res = yield call(dashApi, action.id);
    if (res.data?.status === 200) {
      yield action.onSuccess(res?.data);
      localStorage.setItem("token", res?.data?.data?.token);
    } else {
      yield action.onError(res?.data);
    }
  } catch (error) {
    yield action.onError(error?.response?.data);
  }
}

export function* dashUpdateWorker(action) {
  console.log(action?.data);
  try {
    const res = yield call(dashUpdateApi, action.id, action.data);
    if (res.data?.status === 200) {
      yield action.onSuccess(res?.data);
    } else {
      yield action.onError(res?.data);
    }
  } catch (error) {
    yield action.onError(error?.response?.data);
  }
}

export function* dashWatcher() {
  yield takeLatest(DASH_ACTION, dashWorker);
}

export function* dashUpdateWatcher() {
  yield takeLatest(DASH_UPDATE, dashUpdateWorker);
}
