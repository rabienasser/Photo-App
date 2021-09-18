import axios from "axios";
import { searchCollections } from "utils/api";

import {
   LOAD_PHOTOS_SUCCESS,
   LOAD_PHOTOS_PENDING,
   LOAD_PHOTOS_ERROR,
   CHANGE_SEARCH_PAGE,
   CAPTURE_SEARCH_TERM,
   NEW_SEARCH_SUCCESS,
} from "./types";

export const loadCollections =
   (searchTerm, source) => async (dispatch, getState) => {
      const state = getState();
      const { page } = state.collections;

      dispatch({
         type: CAPTURE_SEARCH_TERM,
         payload: searchTerm,
      });

      try {
         const { data } = await axios(searchCollections(searchTerm, page), {
            cancelToken: source.token,
         });
         console.log("got response SEARCH");
         dispatch({ type: LOAD_PHOTOS_PENDING });

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
   dispatch(loadCollections(searchTerm));
};

export const newSearch = (searchTerm, source) => async (dispatch, getState) => {
   // const res = await axios(searchPhotos(searchTerm, 1));
   // const { data } = res;
   dispatch({
      type: CAPTURE_SEARCH_TERM,
      payload: searchTerm,
   });

   try {
      const { data } = await axios(searchCollections(searchTerm, 1), {
         cancelToken: source.token,
      });
      console.log("got response SEARCH");
      dispatch({ type: LOAD_PHOTOS_PENDING });

      dispatch({
         type: NEW_SEARCH_SUCCESS,
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
