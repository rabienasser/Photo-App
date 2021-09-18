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
