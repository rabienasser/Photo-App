import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import LoadingBar from "react-top-loading-bar";
import useLoadingBar from "utils/loadingBar";
import { useSelector, useDispatch } from "react-redux";
import { Photo, ProfileOverview, SearchedCollection } from "components";
import {
   loadProfile,
   loadUserPhotos,
   loadUserLikes,
   loadUserCollections,
   changePhotosPage,
   changeLikesPage,
   changeCollectionsPage,
   clearPhotos,
} from "store/userProfile/actions";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Container, GridContainer } from "GlobalStyle";
import { HorizontalBreak } from "./UserProfile.style";
library.add(fab);

const UserProfile = (props) => {
   const { isLoading, userPhotos, userLikes, userCollections } = useSelector(
      (state) => state.userProfile
   );
   const dispatch = useDispatch();

   const { pathname } = useLocation();
   const splitPathname = pathname.split("/").pop();

   let username = props.match.params.userId;

   const loadingBar = useRef();
   useLoadingBar(isLoading, loadingBar);

   useEffect(() => {
      dispatch(loadProfile(username));
      dispatch(loadUserPhotos(username));
      return function cleanup() {
         dispatch(clearPhotos());
      };
   }, []);

   useEffect(() => {
      if (splitPathname === `${username}`) {
         dispatch(loadUserPhotos(username));
      } else if (splitPathname === "likes") {
         dispatch(loadUserLikes(username));
      } else {
         dispatch(loadUserCollections(username));
      }
      return function cleanup() {
         dispatch(clearPhotos());
      };
   }, [splitPathname]);

   // useEffect(() => {
   //    if (splitPathname === "likes") {
   // dispatch(loadUserLikes(username));
   //    }
   //    return function cleanup() {
   //       dispatch(clearPhotos());
   //    };
   // }, [splitPathname]);

   // useEffect(() => {
   //    if (splitPathname === "collections") {
   // dispatch(loadUserCollections(username));
   //    }
   //    return function cleanup() {
   //       dispatch(clearPhotos());
   //    };
   // }, [splitPathname]);

   return (
      <div>
         <ProfileOverview />
         <LoadingBar color="#6958f2" ref={loadingBar} />

         <HorizontalBreak />
         <Container>
            <InfiniteScroll
               dataLength={userPhotos.length}
               next={() => {
                  if (splitPathname === `${username}`) {
                     dispatch(changePhotosPage());
                  } else if (splitPathname === "likes") {
                     dispatch(changeLikesPage());
                  } else {
                     dispatch(changeCollectionsPage());
                  }
               }}
               hasMore={true}
            >
               {/* WHY THIS NOT WORKING?? */}

               {/* {splitPathname === (`${username}` || "likes") && (
                  <Masonry
                     breakpointCols={3}
                     className="my-masonry-grid"
                     columnClassName="my-masonry-grid_column"
                  >
                     {splitPathname === `${username}`
                        ? userPhotos?.map((photo, index) => (
                             <Photo
                                photo={photo}
                                index={index}
                                key={photo.id}
                             />
                          ))
                        : userLikes?.map((photo, index) => (
                             <Photo
                                photo={photo}
                                index={index}
                                key={photo.id}
                             />
                          ))}
                  </Masonry>
               )} */}

               {splitPathname === `${username}` && (
                  <Masonry
                     breakpointCols={3}
                     className="my-masonry-grid"
                     columnClassName="my-masonry-grid_column"
                  >
                     {userPhotos?.map((photo, index) => (
                        <Photo photo={photo} index={index} key={photo.id} />
                     ))}
                  </Masonry>
               )}
               {splitPathname === "likes" && (
                  <Masonry
                     breakpointCols={3}
                     className="my-masonry-grid"
                     columnClassName="my-masonry-grid_column"
                  >
                     {userLikes?.map((photo, index) => (
                        <Photo photo={photo} index={index} key={photo.id} />
                     ))}
                  </Masonry>
               )}
               {splitPathname === "collections" && (
                  <GridContainer autoRows>
                     {userCollections?.map((collection) => (
                        <SearchedCollection
                           collection={collection}
                           key={collection.id}
                        />
                     ))}
                  </GridContainer>
               )}
            </InfiniteScroll>
         </Container>
      </div>
   );
};

export default UserProfile;
