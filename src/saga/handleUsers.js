import { call, put, takeLatest} from "redux-saga/effects";
import { ON_LOAD, ON_LOAD_SUCCESS } from "../action/types";
import fetchGetUsers from "./fetchUsers";
import { onLoadSuccess } from "../action/action";

function* handleGetUsers() {
  let users = yield call(fetchGetUsers);
  console.log(users);
  yield put(onLoadSuccess(users));
}

function* watchUserSaga() {
    yield takeLatest(ON_LOAD, handleGetUsers);
}

export default watchUserSaga;