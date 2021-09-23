import axios from "axios";
import { searchUserProfile, searchUserPhotos } from "utils/api";

import {
   LOAD_PROFILE_SUCCESS,
   LOAD_PROFILE_PENDING,
   LOAD_PROFILE_ERROR,
   LOAD_USER_PHOTOS_SUCCESS,
   CAPTURE_USERNAME,
   CHANGE_PAGE,
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
   const { page } = state.userProfile;

   dispatch({
      type: CAPTURE_USERNAME,
      payload: user,
   });

   try {
      const { data } = await axios(searchUserPhotos(user, page));
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

export const changePage = () => (dispatch, getState) => {
   const state = getState();
   const { user } = state.userProfile;
   dispatch({
      type: CHANGE_PAGE,
   });

   dispatch({
      type: LOAD_PROFILE_PENDING,
   });
   dispatch(loadUserPhotos(user));
};

export const clearPhotos = () => {
   return {
      type: CLEAR_PHOTOS,
   };
};
