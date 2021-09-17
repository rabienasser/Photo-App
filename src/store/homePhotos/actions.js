import axios from "axios";
import { fetchHomePhotos } from "utils/api";

import {
   LOAD_PHOTOS_PENDING,
   LOAD_HOME_PHOTOS_SUCCESS,
   LOAD_PHOTOS_ERROR,
   CHANGE_PAGE,
} from "./types";

export const loadHomePhotos = () => async (dispatch, getState) => {
   const state = getState();
   const { page } = state.homePhotos;
   try {
      dispatch({ type: LOAD_PHOTOS_PENDING });
      const { data } = await axios(fetchHomePhotos(page));
      dispatch({
         type: LOAD_HOME_PHOTOS_SUCCESS,
         payload: data,
      });
   } catch (err) {
      dispatch({
         type: LOAD_PHOTOS_ERROR,
         payload: err,
      });
   }
};

export const changePage = () => (dispatch, getState) => {
   dispatch({
      type: CHANGE_PAGE,
   });
   dispatch(loadHomePhotos());
};
