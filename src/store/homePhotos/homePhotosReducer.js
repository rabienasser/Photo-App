import {
   LOAD_PHOTOS_PENDING,
   LOAD_HOME_PHOTOS_SUCCESS,
   LOAD_PHOTOS_ERROR,
   CHANGE_PAGE,
} from "./types";

const initialState = {
   homePhotoData: [],
   isLoading: false,
   page: 1,
};

const homePhotosReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOAD_PHOTOS_PENDING:
         return {
            ...state,
            isLoading: true,
         };
      case LOAD_HOME_PHOTOS_SUCCESS:
         return {
            ...state,
            homePhotoData: [...state.homePhotoData, ...action.payload],
            isLoading: false,
         };
      case LOAD_PHOTOS_ERROR:
         return {
            ...state,
            isLoading: true,
         };
      case CHANGE_PAGE:
         return {
            ...state,
            page: state.page + 1,
         };
      default:
         return state;
   }
};

export default homePhotosReducer;
