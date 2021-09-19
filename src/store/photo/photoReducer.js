import {
   OPEN_PHOTO,
   CLOSE_PHOTO,
   CLICK_NEXT_PHOTO,
   CLICK_PREVIOUS_PHOTO,
} from "./types";

const initialState = {
   selectedPhoto: -1,
};

const photoReducer = (state = initialState, action) => {
   let oldIndex = state.selectedPhoto;
   switch (action.type) {
      case OPEN_PHOTO:
         return {
            ...state,
            selectedPhoto: action.payload,
         };
      case CLOSE_PHOTO:
         return {
            ...state,
            selectedPhoto: -1,
         };
      case CLICK_NEXT_PHOTO:
         const nextIndex = oldIndex + 1;
         return {
            ...state,
            selectedPhoto: nextIndex,
         };
      case CLICK_PREVIOUS_PHOTO:
         const prevIndex =
            oldIndex === 0 ? action.payload.length - 1 : oldIndex - 1;
         return {
            ...state,
            selectedPhoto: prevIndex,
         };
      default:
         return state;
   }
};

export default photoReducer;
