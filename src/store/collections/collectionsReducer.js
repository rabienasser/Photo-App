import {
   LOAD_COLLECTIONS_PENDING,
   LOAD_COLLECTIONS_SUCCESS,
   LOAD_COLLECTIONS_ERROR,
   CHANGE_PAGE,
   CAPTURE_SEARCH_TERM,
   NEW_SEARCH_SUCCESS,
} from "./types";

const initialState = {
   searchTerm: "",
   collectionsData: [],
   isLoading: false,
   page: 1,
   total: null,
   error: false,
};

const collectionsReducer = (state = initialState, action) => {
   switch (action.type) {
      case CAPTURE_SEARCH_TERM:
         return {
            ...state,
            searchTerm: action.payload,
         };
      case LOAD_COLLECTIONS_PENDING:
         return {
            ...state,
            isLoading: true,
         };
      case LOAD_COLLECTIONS_SUCCESS:
         console.log(action.payload.results);
         return {
            ...state,
            isLoading: false,
            collectionsData: [
               ...state.collectionsData,
               ...action.payload.results,
            ],
            total: action.payload.total,
         };
      case LOAD_COLLECTIONS_ERROR:
         return {
            ...state,
            error: true,
            isLoading: false,
         };
      case CHANGE_PAGE:
         return {
            ...state,
            page: state.page + 1,
         };
      case NEW_SEARCH_SUCCESS:
         return {
            ...state,
            isLoading: false,
            collectionsData: [...action.payload.results],
            total: action.payload.total,
         };
      default:
         return state;
   }
};

export default collectionsReducer;
