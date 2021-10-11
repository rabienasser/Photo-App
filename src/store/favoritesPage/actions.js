import { SAVE_PHOTO, UNSAVE_PHOTO } from "./types";

export const savePhoto = (photo) => {
   return {
      type: SAVE_PHOTO,
      payload: photo,
   };
};

export const unSavePhoto = (photo) => {
   return {
      type: UNSAVE_PHOTO,
      payload: photo,
   };
};
