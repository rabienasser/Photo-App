import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import homePhotosReducer from "store/homePhotos/homePhotosReducer";
import photoReducer from "store/photo/photoReducer";

const rootReducer = combineReducers({
   homePhotos: homePhotosReducer,
   photo: photoReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
