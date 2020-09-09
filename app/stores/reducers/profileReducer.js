import consts from '../../utils/Consts';
import {FETCH_PICTURES, LIKE_PICTURES} from '../actions/types';

const defaultState = {
  attemp: false,
  detail: consts.profile,
  pictures: [],
};
export default function profileReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_PICTURES.ATTEMP:
      return {
        ...state,
        attemp: true,
      };
    case FETCH_PICTURES.SUCCESS:
      let listPicture = [];

      if (action.payload.isLoadMore) {
        listPicture = [...state.pictures, ...action.payload.pictures];
      } else {
        listPicture = action.payload.pictures;
      }

      // const {pictures} = action;
      return {
        ...state,
        attemp: false,
        pictures: listPicture,
      };
    case LIKE_PICTURES.ATTEMP:
      return {
        ...state,
        attemp: true,
      };
    case LIKE_PICTURES.SUCCESS:
      let {detail} = state;
      let pictures = state.pictures;

      const {picture, like} = action.payload;
      console.log('red-action', action.payload);

      pictures = pictures.map((item) =>
        item.id === picture.id
          ? {
              ...item,
              like: like > 0 ? item.like + 1 : item.like,
              dislike: like < 0 ? item.dislike + 1 : item.dislike,
            }
          : item,
      );
      if (like > 0) {
        detail.like++;
      } else {
        detail.dislike--;
      }

      return {
        ...state,
        attemp: false,
        detail,
        pictures,
      };

    default:
      return state;
  }
}
