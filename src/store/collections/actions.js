import axios from "axios";
import { searchCollections } from "utils/api";

import {
   LOAD_COLLECTIONS_PENDING,
   LOAD_COLLECTIONS_SUCCESS,
   LOAD_COLLECTIONS_ERROR,
   CHANGE_PAGE,
   CAPTURE_SEARCH_TERM,
   NEW_SEARCH_SUCCESS,
} from "./types";

export const loadCollections = (searchTerm) => async (dispatch, getState) => {
   const state = getState();
   const { page } = state.collections;

   dispatch({
      type: CAPTURE_SEARCH_TERM,
      payload: searchTerm,
   });

   try {
      dispatch({ type: LOAD_COLLECTIONS_PENDING });

      const { data } = await axios(searchCollections(searchTerm, page));

      dispatch({
         type: LOAD_COLLECTIONS_SUCCESS,
         payload: data,
      });
   } catch (err) {
      dispatch({
         type: LOAD_COLLECTIONS_ERROR,
      });
   }
};

export const changePage = () => (dispatch, getState) => {
   const state = getState();
   const { searchTerm } = state.collections;
   dispatch({
      type: CHANGE_PAGE,
   });
   dispatch(loadCollections(searchTerm));
};

export const newSearch = (searchTerm, source) => async (dispatch, getState) => {
   dispatch({
      type: CAPTURE_SEARCH_TERM,
      payload: searchTerm,
   });

   try {
      dispatch({ type: LOAD_COLLECTIONS_PENDING });

      const { data } = await axios(searchCollections(searchTerm, 1));

      dispatch({
         type: NEW_SEARCH_SUCCESS,
         payload: data,
      });
   } catch (err) {
      dispatch({
         type: LOAD_COLLECTIONS_ERROR,
      });
   }
};
