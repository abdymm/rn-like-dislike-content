import {FETCH_PICTURES} from '../actions/types';
import {put, takeLatest, call} from 'redux-saga/effects';
import * as ProfileAction from '../actions/profile';
import Consts from '../../utils/Consts';

function* fetchPicturesSaga(action) {
  //dummy call api
  const pictures = Consts.pictures;
  yield put(ProfileAction.fetchSuccess(action.isLoadMore, pictures));
}

export default function* root() {
  yield [yield takeLatest(FETCH_PICTURES.ATTEMPT, fetchPicturesSaga)];
}
