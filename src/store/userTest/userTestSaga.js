import axios from "axios";
import { all, call, fork, put, take, takeLatest } from "redux-saga/effects";
import { ApiConstants } from "../../constant/ApiConstant";
import http from "../../libraries/axios";

//const apiUrl = "http://localhost:5000/userTests";
const apiUrl = `${ApiConstants.userTestsApi}`

function* fetchUserTests() {
  try {
    const response = yield call(http.get, apiUrl);
    yield put({ type: "FETCH_USERTEST_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "FETCH_USERTEST_FAILURE", payload: error.message });
  }
}

function* watchfetchUserTests() {
  yield takeLatest("FETCH_USERTEST_REQUEST", fetchUserTests);
}

function* addUserTests(action) {
  try {
    const response = yield call(http.post, apiUrl, action.payload);
    yield put({ type: "ADD_USERTEST_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "ADD_USERTEST_FAILURE", payload: error.message });
  }
}

function* watchaddUserTests() {
  yield takeLatest("ADD_USERTEST_REQUEST", addUserTests);
}

function* upadteUserTests(action) {
  try {
    const response = yield call(
      http.put,
      `${apiUrl}/${action.payload.id}`,
      action.payload
    );
    yield put({ type: "UPDATE_USERTEST_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "UPDATE_USERTEST_FAILURE", payload: error.message });
  }
}

function* watchupdateUserTests() {
  yield takeLatest("UPDATE_USERTEST_REQUEST", upadteUserTests);
}

export default function* userTestsSaga() {
  yield all([
    fork(watchfetchUserTests),
    fork(watchaddUserTests),
    fork(watchupdateUserTests),
  ]);
}
