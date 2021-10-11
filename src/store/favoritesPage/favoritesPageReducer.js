import { SAVE_PHOTO, UNSAVE_PHOTO } from "./types";

const initialState = {
   savedPhotos: [],
};

const favoritesPageReducer = (state = initialState, action) => {
   switch (action.type) {
      case SAVE_PHOTO:
         return {
            ...state,
            savedPhotos: [...state.savedPhotos, action.payload],
         };
      case UNSAVE_PHOTO:
         return {
            ...state,
            savedPhotos: state.savedPhotos.filter(
               (el) => el.id !== action.payload.id
            ),
         };
      default:
         return state;
   }
};

export default favoritesPageReducer;
