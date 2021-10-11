import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist"; //Redux local storage
import storage from "redux-persist/lib/storage";

import homePhotosReducer from "./homePhotos/homePhotosReducer";
import photoReducer from "./photo/photoReducer";
import searchResultsReducer from "./searchResults/searchResultsReducer";
import usersReducer from "./users/usersReducer";
import collectionsReducer from "./collections/collectionsReducer";
import userProfileReducer from "./userProfile/userProfileReducer";
import photoPageReducer from "./photoPage/photoPageReducer";
import collectionPageReducer from "./collectionPage/collectionPageReducer";
import heartedPhotosReducer from "./heartedPhotos/heartedPhotosReducer";
import favoritesPageReducer from "./favoritesPage/favoritesPageReducer";
import themeReducer from "./theme/themeReducer";

const rootReducer = combineReducers({
   homePhotos: homePhotosReducer,
   photo: photoReducer,
   searchResults: searchResultsReducer,
   users: usersReducer,
   collections: collectionsReducer,
   userProfile: userProfileReducer,
   photoPage: photoPageReducer,
   collectionPage: collectionPageReducer,
   heartedPhotos: heartedPhotosReducer,
   savedPhotos: favoritesPageReducer,
   themeReducer,
});

const persistConfig = {
   key: "root",
   storage,
   whitelist: ["themeReducer", "heartedPhotos", "savedPhotos"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
