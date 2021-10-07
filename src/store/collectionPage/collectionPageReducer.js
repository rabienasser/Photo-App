import {
   LOAD_COLLECTION_PENDING,
   LOAD_COLLECTION_DATA_SUCCESS,
   LOAD_COLLECTION_PHOTOS_SUCCESS,
   LOAD_COLLECTION_ERROR,
   CHANGE_PAGE,
   COLLECT_ID,
   CLEAR_PHOTOS,
} from "./types";

const initialState = {
   collectionData: {},
   collectionPhotos: [],
   isLoading: false,
   page: 1,
   collectionId: "",
   error: false,
};

const collectionPageReducer = (state = initialState, action) => {
   switch (action.type) {
      case COLLECT_ID:
         return {
            ...state,
            collectionId: action.payload,
         };
      case LOAD_COLLECTION_PENDING:
         return {
            ...state,
            isLoading: true,
         };
      case LOAD_COLLECTION_DATA_SUCCESS:
         return {
            ...state,
            isLoading: false,
            collectionData: action.payload,
         };
      case LOAD_COLLECTION_PHOTOS_SUCCESS:
         return {
            ...state,
            isLoading: false,
            collectionPhotos: [...state.collectionPhotos, ...action.payload],
         };
      case LOAD_COLLECTION_ERROR:
         return {
            ...state,
            isLoading: false,
            error: true,
         };
      case CHANGE_PAGE:
         return {
            ...state,
            isLoading: true,
            page: state.page + 1,
         };
      case CLEAR_PHOTOS:
         return {
            ...state,
            collectionData: {},
            collectionPhotos: [],
            page: 1,
         };
      default:
         return state;
   }
};

export default collectionPageReducer;
