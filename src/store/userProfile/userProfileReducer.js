import {
   LOAD_PROFILE_SUCCESS,
   LOAD_PROFILE_PENDING,
   LOAD_PROFILE_ERROR,
   LOAD_USER_PHOTOS_SUCCESS,
   CAPTURE_USERNAME,
   CHANGE_PAGE,
   CLEAR_PHOTOS,
} from "./types";

const initialState = {
   profileData: {},
   userPhotos: [],
   user: "",
   isLoading: false,
   page: 1,
   error: false,
};

const userProfileReducer = (state = initialState, action) => {
   switch (action.type) {
      case CAPTURE_USERNAME:
         return {
            ...state,
            user: action.payload,
         };
      case LOAD_PROFILE_PENDING:
         return {
            ...state,
            isLoading: true,
         };
      case LOAD_PROFILE_SUCCESS:
         return {
            ...state,
            isLoading: false,
            profileData: action.payload,
         };
      case LOAD_PROFILE_ERROR:
         return {
            ...state,
            isLoading: false,
            error: true,
         };
      case LOAD_USER_PHOTOS_SUCCESS:
         return {
            ...state,
            isLoading: false,
            userPhotos: [...state.userPhotos, ...action.payload],
         };
      case CHANGE_PAGE:
         return {
            ...state,
            page: state.page + 1,
         };
      case CLEAR_PHOTOS:
         return {
            ...state,
            userPhotos: [],
         };
      default:
         return state;
   }
};

export default userProfileReducer;
