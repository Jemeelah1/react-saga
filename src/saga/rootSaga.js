import {all} from "redux-saga/effects";
import watchUserSaga from "./handleUsers";

export default function* rootSaga() {
    yield all ([watchUserSaga()]);
}
