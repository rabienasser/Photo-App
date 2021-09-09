import {
   LOAD_PHOTOS_PENDING,
   LOAD_PHOTOS_SUCCESS,
   LOAD_PHOTOS_ERROR,
   CHANGE_PAGE,
   LOAD_MORE_PHOTOS_PENDING,
   LOAD_MORE_PHOTOS_SUCCESS,
   LOAD_MORE_PHOTOS_ERROR,
} from "./types";

const initialState = {
   photoData: null,
   isLoading: false,
   page: 1,
   active: false,
   total: null,
};

const searchResultsReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOAD_PHOTOS_PENDING:
         return {
            ...state,
            isLoading: true,
         };
      case LOAD_PHOTOS_SUCCESS:
         return {
            ...state,
            isLoading: false,
            photoData: action.payload.results,
            active: true,
            total: action.payload.total,
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
      case LOAD_MORE_PHOTOS_PENDING:
         return {
            ...state,
            isLoading: true,
         };
      case LOAD_MORE_PHOTOS_SUCCESS:
         return {
            ...state,
            isLoading: false,
            photoData: [...state.photoData, ...action.payload.results],
         };
      case LOAD_MORE_PHOTOS_ERROR:
         return {
            ...state,
            isLoading: true,
         };
      default:
         return state;
   }
};

export default searchResultsReducer;
