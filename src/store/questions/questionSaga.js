import axios from "axios";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import http from "../../libraries/axios";

//const apiUrl = "http://localhost:5000/questions";
const apiUrl = `${ApiConstants.questionsApi}`

function* fetchQuestions() {
  try {
    const response = yield call(http.get, apiUrl);
    console.log({ response });
    yield put({ type: "FETCH_QUESTION_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "FETCH_QUESTION_FAILURE", payload: error.message });
  }
}

function* watchfetchQuestions() {
  yield takeLatest("FETCH_QUESTION_REQUEST", fetchQuestions);
}

function* addQuestions(action) {
  try {
    const response = yield call(http.post, apiUrl, action.payload);
    console.log({ response });
    yield put({ type: "ADD_QUESTION_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "ADD_QUESTION_FAILURE", payload: error.message });
  }
}

function* watchaddQuestions() {
  yield takeLatest("ADD_QUESTION_REQUEST", addQuestions);
}

function* deleteQuestions(action) {
  try {
    const response = yield call(http.delete, `${apiUrl}/${action.id}`);
    console.log({ response });
    yield put({ type: "DELETE_QUESTION_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "DELETE_QUESTION_FAILURE", payload: error.message });
  }
}

function* watchdeleteQuestions() {
  yield takeLatest("DELETE_QUESTION_REQUEST", deleteQuestions);
}

function* upadteQuestion(action) {
  console.log(action.payload.id);
  try {
    const response = yield call(
      http.put,
      `${apiUrl}/${action.payload.id}`,
      action.payload
    );
    yield put({ type: "UPDATE_QUESTION_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "UPDATE_QUESTION_FAILURE", payload: error.message });
  }
}

function* watchupdateQuestion() {
  yield takeLatest("UPDATE_QUESTION_REQUEST", upadteQuestion);
}

export default function* questionSaga() {
  yield all([
    fork(watchfetchQuestions),
    fork(watchaddQuestions),
    fork(watchdeleteQuestions),
    fork(watchupdateQuestion),
  ]);
}
