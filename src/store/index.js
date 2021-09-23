import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import homePhotosReducer from "./homePhotos/homePhotosReducer";
import photoReducer from "./photo/photoReducer";
import searchResultsReducer from "./searchResults/searchResultsReducer";
import usersReducer from "./users/usersReducer";
import collectionsReducer from "./collections/collectionsReducer";
import userProfileReducer from "./userProfile/userProfileReducer";

const rootReducer = combineReducers({
   homePhotos: homePhotosReducer,
   photo: photoReducer,
   searchResults: searchResultsReducer,
   users: usersReducer,
   collections: collectionsReducer,
   userProfile: userProfileReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
