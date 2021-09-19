import axios from "axios";
import { searchPhotos } from "utils/api";

import {
   LOAD_PHOTOS_SUCCESS,
   LOAD_PHOTOS_PENDING,
   LOAD_PHOTOS_ERROR,
   CHANGE_SEARCH_PAGE,
   CAPTURE_SEARCH_TERM,
   NEW_SEARCH_SUCCESS,
} from "./types";

export const loadSearchPagePhotos =
   (searchTerm) => async (dispatch, getState) => {
      const state = getState();
      const { page } = state.searchResults;

      dispatch({
         type: CAPTURE_SEARCH_TERM,
         payload: searchTerm,
      });

      try {
         dispatch({ type: LOAD_PHOTOS_PENDING });

         const { data } = await axios(searchPhotos(searchTerm, page));

         dispatch({
            type: LOAD_PHOTOS_SUCCESS,
            payload: data,
         });
      } catch (err) {
         if (axios.isCancel(err)) {
            console.log("caught cancel");
         } else {
            dispatch({
               type: LOAD_PHOTOS_ERROR,
            });
         }
      }
   };

export const changePage = () => (dispatch, getState) => {
   const state = getState();
   const { searchTerm } = state.searchResults;
   dispatch({
      type: CHANGE_SEARCH_PAGE,
   });
   dispatch(loadSearchPagePhotos(searchTerm));
};

export const newSearch = (searchTerm) => async (dispatch, getState) => {
   dispatch({
      type: CAPTURE_SEARCH_TERM,
      payload: searchTerm,
   });

   try {
      dispatch({ type: LOAD_PHOTOS_PENDING });

      const { data } = await axios(searchPhotos(searchTerm, 1));

      dispatch({
         type: NEW_SEARCH_SUCCESS,
         payload: data,
      });
   } catch (err) {
      dispatch({
         type: LOAD_PHOTOS_ERROR,
      });
   }
};
