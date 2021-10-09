import { HEART_PHOTO, UNHEART_PHOTO } from "./types";

const initialState = {
   heartedPhotos: [],
};

const heartedPhotosReducer = (state = initialState, action) => {
   switch (action.type) {
      case HEART_PHOTO:
         return {
            ...state,
            heartedPhotos: [...state.heartedPhotos, action.payload.id],
         };
      case UNHEART_PHOTO:
         return {
            ...state,
            heartedPhotos: state.heartedPhotos.filter(
               (el) => el !== action.payload.id
            ),
         };
      default:
         return state;
   }
};

export default heartedPhotosReducer;
