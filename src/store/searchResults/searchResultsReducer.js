import {
   LOAD_PHOTOS_SUCCESS,
   LOAD_PHOTOS_PENDING,
   LOAD_PHOTOS_ERROR,
   CHANGE_SEARCH_PAGE,
   CAPTURE_SEARCH_TERM,
   NEW_SEARCH_SUCCESS,
} from "./types";

const initialState = {
   searchTerm: "",
   photoData: [],
   isLoading: false,
   page: 1,
   active: false,
   total: null,
   error: false,
};

const searchResultsReducer = (state = initialState, action) => {
   switch (action.type) {
      case CAPTURE_SEARCH_TERM:
         return {
            ...state,
            searchTerm: action.payload,
         };
      case LOAD_PHOTOS_PENDING:
         return {
            ...state,
            isLoading: true,
         };
      case LOAD_PHOTOS_SUCCESS:
         return {
            ...state,
            isLoading: false,
            photoData: [...state.photoData, ...action.payload.results],
            active: true,
            total: action.payload.total,
         };
      case LOAD_PHOTOS_ERROR:
         return {
            ...state,
            error: true,
            isLoading: false,
         };
      case CHANGE_SEARCH_PAGE:
         return {
            ...state,
            page: state.page + 1,
         };
      case NEW_SEARCH_SUCCESS:
         return {
            ...state,
            isLoading: false,
            photoData: [...action.payload.results],
         };
      default:
         return state;
   }
};

export default searchResultsReducer;
