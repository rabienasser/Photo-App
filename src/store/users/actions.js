import axios from "axios";
import { searchUsers } from "utils/api";

import {
   LOAD_USERS_SUCCESS,
   LOAD_USERS_PENDING,
   LOAD_USERS_ERROR,
   CHANGE_USERS_PAGE,
   CAPTURE_SEARCH_TERM,
   NEW_SEARCH_SUCCESS,
} from "./types";

export const loadUsers = (searchTerm) => async (dispatch, getState) => {
   const state = getState();
   const { page } = state.users;

   dispatch({
      type: CAPTURE_SEARCH_TERM,
      payload: searchTerm,
   });

   try {
      dispatch({ type: LOAD_USERS_PENDING });

      const { data } = await axios(searchUsers(searchTerm, page));

      dispatch({
         type: LOAD_USERS_SUCCESS,
         payload: data,
      });
   } catch (err) {
      dispatch({
         type: LOAD_USERS_ERROR,
      });
   }
};

export const changePage = () => (dispatch, getState) => {
   const state = getState();
   const { searchTerm } = state.users;
   dispatch({
      type: CHANGE_USERS_PAGE,
   });
   dispatch(loadUsers(searchTerm));
};

export const newSearch = (searchTerm, source) => async (dispatch, getState) => {
   dispatch({
      type: CAPTURE_SEARCH_TERM,
      payload: searchTerm,
   });

   try {
      dispatch({ type: LOAD_USERS_PENDING });

      const { data } = await axios(searchUsers(searchTerm, 1));

      dispatch({
         type: NEW_SEARCH_SUCCESS,
         payload: data,
      });
   } catch (err) {
      dispatch({
         type: LOAD_USERS_ERROR,
      });
   }
};
