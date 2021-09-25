import axios from "axios";
import { searchPhoto } from "utils/api";

import {
   LOAD_PHOTO_PENDING,
   LOAD_PHOTO_SUCCESS,
   LOAD_PHOTO_ERROR,
} from "./types";

export const loadPhoto = (photoId) => async (dispatch, getState) => {
   try {
      dispatch({ type: LOAD_PHOTO_PENDING });

      const { data } = await axios(searchPhoto(photoId));

      dispatch({
         type: LOAD_PHOTO_SUCCESS,
         payload: data,
      });
   } catch (err) {
      dispatch({
         type: LOAD_PHOTO_ERROR,
      });
   }
};
