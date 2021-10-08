import { HEART_PHOTO, UNHEART_PHOTO } from "./types";

export const heartPhoto = (photo) => {
   return {
      type: HEART_PHOTO,
      payload: photo,
   };
};

export const unHeartPhoto = (photo) => {
   return {
      type: UNHEART_PHOTO,
      payload: photo,
   };
};
