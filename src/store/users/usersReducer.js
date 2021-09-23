import {
   LOAD_USERS_SUCCESS,
   LOAD_USERS_PENDING,
   LOAD_USERS_ERROR,
   CHANGE_USERS_PAGE,
   CAPTURE_SEARCH_TERM,
   NEW_SEARCH_SUCCESS,
} from "./types";

const initialState = {
   searchTerm: "",
   usersData: [],
   isLoading: false,
   page: 1,
   total: 0,
   error: false,
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOAD_USERS_PENDING:
         return {
            ...state,
            isLoading: true,
         };
      case LOAD_USERS_SUCCESS:
         return {
            ...state,
            isLoading: false,
            usersData: [...state.usersData, ...action.payload.results],
            total: action.payload.total,
         };
      case LOAD_USERS_ERROR:
         return {
            ...state,
            error: true,
            isLoading: false,
         };
      case CHANGE_USERS_PAGE:
         return {
            ...state,
            page: state.page + 1,
         };
      case CAPTURE_SEARCH_TERM:
         return {
            ...state,
            searchTerm: action.payload,
         };
      case NEW_SEARCH_SUCCESS:
         return {
            ...state,
            isLoading: false,
            usersData: [...action.payload.results],
            total: action.payload.total,
         };
      default:
         return state;
   }
};

export default usersReducer;
