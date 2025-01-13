import axios from "axios";
import { all, call, fork, put, take, takeLatest } from "redux-saga/effects";

const apiUrl = "http://localhost:5000/users";

function* fetchUsers() {
  try {
    const response = yield call(axios.get, apiUrl);
    yield put({ type: "FETCH_USER_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "FETCH_USER_FAILURE", payload: error.message });
  }
}

function* watchfetchUsers() {
  yield takeLatest("FETCH_USER_REQUEST", fetchUsers);
}

function* addUsers(action) {
    try {
      const response = yield call(axios.post, apiUrl, action.payload);
      yield put({ type: "ADD_USER_SUCCESS", payload: response.data });
    } catch (error) {
      yield put({ type: "ADD_USER_FAILURE", payload: error.message });
    }
  }
  
  function* watchaddUsers() {
    yield takeLatest("ADD_USER_REQUEST", addUsers);
  }
export default function* userSaga() {
  yield all([fork(watchfetchUsers),fork(watchaddUsers)]);
}
