import {
   OPEN_PHOTO,
   CLOSE_PHOTO,
   CLICK_NEXT_PHOTO,
   CLICK_PREVIOUS_PHOTO,
} from "./types";

export const openPhoto = (photo) => {
   return {
      type: OPEN_PHOTO,
      payload: photo,
   };
};

export const closePhoto = () => {
   return {
      type: CLOSE_PHOTO,
   };
};

export const clickNextPhoto = (photo) => {
   return {
      type: CLICK_NEXT_PHOTO,
      payload: photo,
   };
};

export const clickPreviousPhoto = (photo) => {
   return {
      type: CLICK_PREVIOUS_PHOTO,
      payload: photo,
   };
};
