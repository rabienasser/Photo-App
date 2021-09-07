import {
   OPEN_PHOTO,
   CLOSE_PHOTO,
   CLICK_NEXT_PHOTO,
   CLICK_PREVIOUS_PHOTO,
} from "./types";

const initialState = {
   active: false,
   activePhoto: "",
};

const photoReducer = (state = initialState, action) => {
   switch (action.type) {
      case OPEN_PHOTO:
         return {
            ...state,
            active: true,
            activePhoto: action.payload,
         };
      case CLOSE_PHOTO:
         return {
            ...state,
            active: false,
         };
      case CLICK_NEXT_PHOTO:
         return {};
      case CLICK_PREVIOUS_PHOTO:
         return {};
      default:
         return state;
   }
};

export default photoReducer;
