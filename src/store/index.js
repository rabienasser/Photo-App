import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import homePhotosReducer from "./homePhotos/homePhotosReducer";
import photoReducer from "./photo/photoReducer";
import searchResultsReducer from "./searchResults/searchResultsReducer";
import usersReducer from "./users/usersReducer";
import collectionsReducer from "./collections/collectionsReducer";

const rootReducer = combineReducers({
   homePhotos: homePhotosReducer,
   photo: photoReducer,
   searchResults: searchResultsReducer,
   users: usersReducer,
   collections: collectionsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
