import axios from "axios";
import { searchPhotos } from "utils/api";

import {
   LOAD_PHOTOS_SUCCESS,
   LOAD_PHOTOS_PENDING,
   LOAD_PHOTOS_ERROR,
   CHANGE_SEARCH_PAGE,
   ADD_PHOTOS_SUCCESS,
   CAPTURE_SEARCH_TERM,
   NEW_SEARCH_SUCCESS,
} from "./types";

// const searchPhotoApi = async (searchTerm, page) => {
//    const res = await axios(searchPhotos(searchTerm, page));
//    const { data } = res;
//    return data;
// };

export const loadSearchPagePhotos =
   (searchTerm) => async (dispatch, getState) => {
      const res = await axios(searchPhotos(searchTerm, 1));
      const { data } = res;
      // const data = searchPhotoApi(searchTerm, 1);
      try {
         dispatch({ type: LOAD_PHOTOS_PENDING });

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

export const addPhotos = (searchTerm) => async (dispatch, getState) => {
   const state = getState();
   const page = state.searchResults.page;
   const res = await axios(searchPhotos(searchTerm, page));
   const { data } = res;
   try {
      dispatch({ type: LOAD_PHOTOS_PENDING });

      dispatch({
         type: ADD_PHOTOS_SUCCESS,
         payload: data,
      });
   } catch (err) {
      dispatch({
         type: LOAD_PHOTOS_ERROR,
         payload: err,
      });
   }
};

export const changeSearchPage = () => (dispatch, getState) => {
   const state = getState();
   const searchTerm = state.searchResults.searchTerm;
   dispatch({
      type: CHANGE_SEARCH_PAGE,
   });
   dispatch(addPhotos(searchTerm));
};

export const newSearch = (searchTerm) => async (dispatch, getState) => {
   const res = await axios(searchPhotos(searchTerm, 1));
   const { data } = res;
   try {
      dispatch({
         type: CAPTURE_SEARCH_TERM,
         payload: searchTerm,
      });

      dispatch({ type: LOAD_PHOTOS_PENDING });

      dispatch({
         type: NEW_SEARCH_SUCCESS,
         payload: data,
      });
   } catch (err) {
      dispatch({
         type: LOAD_PHOTOS_ERROR,
         payload: err,
      });
   }
};
