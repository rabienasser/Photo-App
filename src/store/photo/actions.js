import {
   OPEN_PHOTO,
   CLOSE_PHOTO,
   CLICK_NEXT_PHOTO,
   CLICK_PREVIOUS_PHOTO,
   COLLECT_PHOTO_ARRAY,
} from "./types";

export const openPhoto = (photoIndex) => {
   return {
      type: OPEN_PHOTO,
      payload: photoIndex,
   };
};

export const collectPhotos = (photoArr) => {
   return {
      type: COLLECT_PHOTO_ARRAY,
      payload: photoArr,
   };
};

export const closePhoto = () => {
   return {
      type: CLOSE_PHOTO,
   };
};

export const clickNextPhoto = () => {
   return {
      type: CLICK_NEXT_PHOTO,
   };
};

export const clickPreviousPhoto = () => (dispatch, getState) => {
   const state = getState();
   const photoData = state.homePhotos.homePhotoData;
   dispatch({
      type: CLICK_PREVIOUS_PHOTO,
      payload: photoData,
   });
};
