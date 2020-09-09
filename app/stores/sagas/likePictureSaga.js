import {LIKE_PICTURES} from '../actions/types';
import {put, takeLatest, call} from 'redux-saga/effects';
import * as ProfileAction from '../actions/profile';

function* likePicturesSaga(action) {
  //dummy call api
  const {picture, like} = action.payload;
  yield put(ProfileAction.likeSuccess(picture, like));
}

export default function* root() {
  yield [yield takeLatest(LIKE_PICTURES.ATTEMPT, likePicturesSaga)];
}
