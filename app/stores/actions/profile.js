// index.js
import {FETCH_PICTURES, LIKE_PICTURES} from './types';

export const fetchAttemp = (isLoadMore) => {
  return {
    type: FETCH_PICTURES.ATTEMPT,
    isLoadMore,
  };
};

export const fetchSuccess = (isLoadMore, pictures) => {
  return {
    type: FETCH_PICTURES.SUCCESS,
    payload: {isLoadMore, pictures},
  };
};

export const likeAttemp = (picture, like) => {
  return {
    type: LIKE_PICTURES.ATTEMPT,
    payload: {picture, like},
  };
};

export const likeSuccess = (picture, like) => {
  return {
    type: LIKE_PICTURES.SUCCESS,
    payload: {picture, like},
  };
};
