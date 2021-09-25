import {
   LOAD_PHOTO_PENDING,
   LOAD_PHOTO_SUCCESS,
   LOAD_PHOTO_ERROR,
} from "./types";

const initialState = {
   data: {},
   isLoading: false,
   error: false,
};

const photoPageReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOAD_PHOTO_PENDING:
         return {
            ...state,
            isLoading: true,
         };
      case LOAD_PHOTO_SUCCESS:
         return {
            ...state,
            data: action.payload,
            isLoading: false,
         };
      case LOAD_PHOTO_ERROR:
         return {
            ...state,
            error: true,
            isLoading: false,
         };
      default:
         return state;
   }
};

export default photoPageReducer;
