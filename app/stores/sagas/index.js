import {all, call} from 'redux-saga/effects';
import fetchPictureSaga from './fetchPictureSaga';
import likePicturesSaga from './likePictureSaga';

export default function* root() {
  yield all([call(fetchPictureSaga), call(likePicturesSaga)]);
}
