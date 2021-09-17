import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import homePhotosReducer from "store/homePhotos/homePhotosReducer";
import photoReducer from "store/photo/photoReducer";
import searchResultsReducer from "store/searchResults/searchResultsReducer";
import usersReducer from "store/users/usersReducer";

const rootReducer = combineReducers({
   homePhotos: homePhotosReducer,
   photo: photoReducer,
   searchResults: searchResultsReducer,
   users: usersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
