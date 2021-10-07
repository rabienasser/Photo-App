export const fetchHomePhotos = (page) => {
   const base = process.env.REACT_APP_ENDPOINT;
   const key = process.env.REACT_APP_API_KEY;
   return `${base}/photos?order_by=latest&page=${page}&client_id=${key}`;
};

export const searchPhotos = (query, page) => {
   const base = process.env.REACT_APP_ENDPOINT;
   const key = process.env.REACT_APP_API_KEY;
   return `${base}/search/photos?query=${query}&per_page=15&page=${page}&client_id=${key}`;
};

export const searchUsers = (query, page) => {
   const base = process.env.REACT_APP_ENDPOINT;
   const key = process.env.REACT_APP_API_KEY;
   return `${base}/search/users?query=${query}&per_page=20&page=${page}&client_id=${key}`;
};

export const searchCollections = (query, page) => {
   const base = process.env.REACT_APP_ENDPOINT;
   const key = process.env.REACT_APP_API_KEY;
   return `${base}/search/collections?query=${query}&per_page=15&page=${page}&client_id=${key}`;
};

export const searchUserProfile = (username) => {
   const base = process.env.REACT_APP_ENDPOINT;
   const key = process.env.REACT_APP_API_KEY;
   return `${base}/users/${username}?&client_id=${key}`;
};

export const searchUserPhotos = (user, page) => {
   const base = process.env.REACT_APP_ENDPOINT;
   const key = process.env.REACT_APP_API_KEY;
   return `${base}/users/${user}/photos?&per_page=15&page=${page}&client_id=${key}`;
};

export const searchUserLikes = (user, page) => {
   const base = process.env.REACT_APP_ENDPOINT;
   const key = process.env.REACT_APP_API_KEY;
   return `${base}/users/${user}/likes?&per_page=15&page=${page}&client_id=${key}`;
};

export const searchUserCollections = (user, page) => {
   const base = process.env.REACT_APP_ENDPOINT;
   const key = process.env.REACT_APP_API_KEY;
   return `${base}/users/${user}/collections?&per_page=10&page=${page}&client_id=${key}`;
};

export const searchPhoto = (photoId) => {
   const base = process.env.REACT_APP_ENDPOINT;
   const key = process.env.REACT_APP_API_KEY;
   return `${base}/photos/${photoId}?&client_id=${key}`;
};

export const searchCollection = (collectionId) => {
   const base = process.env.REACT_APP_ENDPOINT;
   const key = process.env.REACT_APP_API_KEY;
   return `${base}/collections/${collectionId}?&client_id=${key}`;
};

export const searchCollectionPhotos = (collectionId, page) => {
   const base = process.env.REACT_APP_ENDPOINT;
   const key = process.env.REACT_APP_API_KEY;
   return `${base}/collections/${collectionId}/photos?&page=${page}&client_id=${key}`;
};
