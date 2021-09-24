import axios from "axios";
import {
   searchUserProfile,
   searchUserPhotos,
   searchUserLikes,
   searchUserCollections,
} from "utils/api";

import {
   LOAD_PROFILE_PENDING,
   LOAD_PROFILE_SUCCESS,
   LOAD_PROFILE_ERROR,
   LOAD_USER_PHOTOS_SUCCESS,
   LOAD_USER_LIKES_SUCCESS,
   LOAD_USER_COLLECTIONS_SUCCESS,
   CAPTURE_USERNAME,
   CHANGE_PHOTOS_PAGE,
   CHANGE_LIKES_PAGE,
   CHANGE_COLLECTIONS_PAGE,
   CLEAR_PHOTOS,
} from "./types";

export const loadProfile = (username) => async (dispatch, getState) => {
   try {
      dispatch({ type: LOAD_PROFILE_PENDING });

      const { data } = await axios(searchUserProfile(username));

      dispatch({
         type: LOAD_PROFILE_SUCCESS,
         payload: data,
      });
   } catch (err) {
      dispatch({
         type: LOAD_PROFILE_ERROR,
      });
   }
};

export const loadUserPhotos = (user) => async (dispatch, getState) => {
   const state = getState();
   const { photosPage } = state.userProfile;

   dispatch({
      type: CAPTURE_USERNAME,
      payload: user,
   });

   try {
      const { data } = await axios(searchUserPhotos(user, photosPage));
      dispatch({
         type: LOAD_USER_PHOTOS_SUCCESS,
         payload: data,
      });
   } catch (err) {
      dispatch({
         type: LOAD_PROFILE_ERROR,
         payload: err,
      });
   }
};

export const loadUserLikes = (user) => async (dispatch, getState) => {
   const state = getState();
   const { likesPage } = state.userProfile;

   try {
      dispatch({ type: LOAD_PROFILE_PENDING });

      const { data } = await axios(searchUserLikes(user, likesPage));

      dispatch({
         type: LOAD_USER_LIKES_SUCCESS,
         payload: data,
      });
   } catch (err) {
      dispatch({
         type: LOAD_PROFILE_ERROR,
         payload: err,
      });
   }
};

export const loadUserCollections = (user) => async (dispatch, getState) => {
   const state = getState();
   const { collectionsPage } = state.userProfile;

   try {
      dispatch({ type: LOAD_PROFILE_PENDING });

      const { data } = await axios(
         searchUserCollections(user, collectionsPage)
      );

      dispatch({
         type: LOAD_USER_COLLECTIONS_SUCCESS,
         payload: data,
      });
   } catch (err) {
      dispatch({
         type: LOAD_PROFILE_ERROR,
         payload: err,
      });
   }
};

export const changePhotosPage = () => (dispatch, getState) => {
   const state = getState();
   const { user } = state.userProfile;
   dispatch({
      type: CHANGE_PHOTOS_PAGE,
   });

   dispatch({
      type: LOAD_PROFILE_PENDING,
   });
   dispatch(loadUserPhotos(user));
};

export const changeLikesPage = () => (dispatch, getState) => {
   const state = getState();
   const { user } = state.userProfile;
   dispatch({
      type: CHANGE_LIKES_PAGE,
   });

   dispatch({
      type: LOAD_PROFILE_PENDING,
   });
   dispatch(loadUserLikes(user));
};

export const changeCollectionsPage = () => (dispatch, getState) => {
   const state = getState();
   const { user } = state.userProfile;
   dispatch({
      type: CHANGE_COLLECTIONS_PAGE,
   });

   dispatch({
      type: LOAD_PROFILE_PENDING,
   });
   dispatch(loadUserCollections(user));
};

export const clearPhotos = () => {
   return {
      type: CLEAR_PHOTOS,
   };
};
