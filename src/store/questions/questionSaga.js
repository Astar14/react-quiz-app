import axios from "axios";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

const apiUrl = "http://localhost:5000/questions";

function* fetchQuestions() {
  try {
      const response = yield call(axios.get, apiUrl);
      console.log({response })
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
      const response = yield call(axios.post, apiUrl, action.payload);
      console.log({response })
    yield put({ type: "ADD_QUESTION_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "ADD_QUESTION_FAILURE", payload: error.message });
  }
}

function* watchaddQuestions() {
  yield takeLatest("ADD_QUESTION_REQUEST", addQuestions);
}

export default function* questionSaga() {
  yield all([fork(watchfetchQuestions), fork(watchaddQuestions)]);
}