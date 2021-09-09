import axios from "axios";
import { searchPhotos } from "utils/api";

import {
   LOAD_PHOTOS_SUCCESS,
   LOAD_PHOTOS_PENDING,
   LOAD_PHOTOS_ERROR,
   CHANGE_PAGE,
   LOAD_MORE_PHOTOS_SUCCESS,
   LOAD_MORE_PHOTOS_PENDING,
   LOAD_MORE_PHOTOS_ERROR,
} from "./types";

export const loadInitialPhotos = (searchTerm) => async (dispatch, getState) => {
   try {
      dispatch({ type: LOAD_PHOTOS_PENDING });
      const res = await axios(searchPhotos(searchTerm, 1));
      const { data } = res;
      dispatch({
         type: LOAD_PHOTOS_SUCCESS,
         payload: data,
      });
   } catch (err) {
      dispatch({
         type: LOAD_PHOTOS_ERROR,
         payload: err,
      });
   }
};

export const changePage = () => {
   console.log("paged changed");
   return {
      type: CHANGE_PAGE,
   };
};

export const loadMorePhotos = (searchTerm) => async (dispatch, getState) => {
   const state = getState();
   const page = state.searchResults.page;
   try {
      dispatch({ type: LOAD_MORE_PHOTOS_PENDING });
      const res = await axios(searchPhotos(searchTerm, page));
      const { data } = res;
      dispatch({
         type: LOAD_MORE_PHOTOS_SUCCESS,
         payload: data,
      });
   } catch (err) {
      dispatch({
         type: LOAD_MORE_PHOTOS_ERROR,
         payload: err,
      });
   }
};
