import axios from "axios";
import { searchCollection, searchCollectionPhotos } from "utils/api";

import {
   LOAD_COLLECTION_PENDING,
   LOAD_COLLECTION_DATA_SUCCESS,
   LOAD_COLLECTION_PHOTOS_SUCCESS,
   LOAD_COLLECTION_ERROR,
   CHANGE_PAGE,
   COLLECT_ID,
   CLEAR_PHOTOS,
} from "./types";

export const loadCollection = (collectionId) => async (dispatch, getState) => {
   dispatch({
      type: COLLECT_ID,
      payload: collectionId,
   });

   try {
      dispatch({ type: LOAD_COLLECTION_PENDING });

      const { data } = await axios(searchCollection(collectionId));

      dispatch({
         type: LOAD_COLLECTION_DATA_SUCCESS,
         payload: data,
      });
   } catch (err) {
      dispatch({
         type: LOAD_COLLECTION_ERROR,
      });
   }
};

export const loadCollectionPhotos =
   (collectionId) => async (dispatch, getState) => {
      const state = getState();
      const { page } = state.collectionPage;

      try {
         const { data } = await axios(
            searchCollectionPhotos(collectionId, page)
         );

         dispatch({
            type: LOAD_COLLECTION_PHOTOS_SUCCESS,
            payload: data,
         });
      } catch (err) {
         dispatch({
            type: LOAD_COLLECTION_ERROR,
         });
      }
   };

export const changePage = () => async (dispatch, getState) => {
   const state = getState();
   const { collectionId } = state.collectionPage;

   dispatch({ type: CHANGE_PAGE });
   dispatch(loadCollectionPhotos(collectionId));
};

export const clearPhotos = () => {
   return {
      type: CLEAR_PHOTOS,
   };
};
