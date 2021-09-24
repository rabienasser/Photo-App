import {
   LOAD_PROFILE_PENDING,
   LOAD_PROFILE_SUCCESS,
   LOAD_PROFILE_ERROR,
   LOAD_USER_PHOTOS_SUCCESS,
   LOAD_USER_LIKES_SUCCESS,
   LOAD_USER_COLLECTIONS_SUCCESS,
   CAPTURE_USERNAME,
   CHANGE_PHOTOS_PAGE,
   CHANGE_LIKES_PAGE,
   CHANGE_COLLECTIONS_PAGE,
   CLEAR_PHOTOS,
} from "./types";

const initialState = {
   profileData: {},
   userPhotos: [],
   userLikes: [],
   userCollections: [],
   user: "",
   isLoading: false,
   photosPage: 1,
   likesPage: 1,
   collectionsPage: 1,
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
            likesPage: 1,
            collectionsPage: 1,
         };
      case LOAD_USER_LIKES_SUCCESS:
         return {
            ...state,
            isLoading: false,
            userLikes: [...state.userLikes, ...action.payload],
            photosPage: 1,
            collectionsPage: 1,
         };
      case LOAD_USER_COLLECTIONS_SUCCESS:
         return {
            ...state,
            isLoading: false,
            userCollections: [...state.userCollections, ...action.payload],
            likesPage: 1,
            photosPage: 1,
         };
      case CHANGE_PHOTOS_PAGE:
         return {
            ...state,
            photosPage: state.photosPage + 1,
         };
      case CHANGE_LIKES_PAGE:
         return {
            ...state,
            likesPage: state.likesPage + 1,
         };
      case CHANGE_COLLECTIONS_PAGE:
         return {
            ...state,
            collectionsPage: state.collectionsPage + 1,
         };
      case CLEAR_PHOTOS:
         return {
            ...state,
            userPhotos: [],
            userLikes: [],
            collectionsLikes: [],
            page: 1,
            likesPage: 1,
            collectionsPage: 1,
         };
      default:
         return state;
   }
};

export default userProfileReducer;
