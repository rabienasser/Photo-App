/* eslint-disable no-undef */
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

export const loadUsers = (searchTerm, source) => async (dispatch, getState) => {
   const state = getState();
   const { page } = state.users;

   dispatch({
      type: CAPTURE_SEARCH_TERM,
      payload: searchTerm,
   });

   try {
      const { data } = await axios(searchUsers(searchTerm, page), {
         cancelToken: source.token,
      });
      console.log("got response USERS");
      dispatch({ type: LOAD_USERS_PENDING });

      dispatch({
         type: LOAD_USERS_SUCCESS,
         payload: data,
      });
   } catch (err) {
      if (axios.isCancel(err)) {
         console.log("caught cancel");
      } else {
         dispatch({
            type: LOAD_USERS_ERROR,
         });
      }
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
   // const res = await axios(searchUsers(searchTerm, 1));
   // const { data } = res;
   dispatch({
      type: CAPTURE_SEARCH_TERM,
      payload: searchTerm,
   });

   try {
      const res = await axios(searchUsers(searchTerm, 1), {
         cancelToken: source.token,
      });
      const { data } = res;
      console.log("got response USERS");

      dispatch({ type: LOAD_USERS_PENDING });

      dispatch({
         type: NEW_SEARCH_SUCCESS,
         payload: data,
      });
   } catch (err) {
      if (axios.isCancel(err)) {
         console.log("caught err");
      } else {
         dispatch({
            type: LOAD_USERS_ERROR,
         });
      }
   }
};
