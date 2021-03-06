import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import LoadingBar from "react-top-loading-bar";
import useLoadingBar from "utils/loadingBar";
import { masonryColumnBreakPoints } from "utils/masonryBreakPoints";
import { useSelector, useDispatch } from "react-redux";
import {
   Photo,
   ProfileOverview,
   SearchedCollection,
   PhotoModal,
} from "components";
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
import { closePhoto } from "store/photo/actions";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Container, GridContainer } from "GlobalStyle";
import { HorizontalBreak } from "./UserProfile.style";
library.add(fab);

const UserProfile = (props) => {
   const { isLoading, userPhotos, userLikes, userCollections } = useSelector(
      (state) => state.userProfile
   );
   const selectedPhotoIndex = useSelector((state) => state.photo.selectedPhoto);

   const dispatch = useDispatch();

   const { pathname } = useLocation();
   const splitPathname = pathname.split("/")[2];

   let username = props.match.params.userId;

   const loadingBar = useRef();
   useLoadingBar(isLoading, loadingBar);

   useEffect(() => {
      dispatch(loadProfile(username));
      dispatch(closePhoto());
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

   const photos = splitPathname === username ? userPhotos : userLikes;

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
               <Masonry
                  breakpointCols={masonryColumnBreakPoints}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
               >
                  {photos.map((photo, index) => (
                     <Photo
                        photo={photo}
                        index={index}
                        photos={photos}
                        key={photo.id}
                     />
                  ))}
               </Masonry>

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

         {selectedPhotoIndex > -1 && (
            <PhotoModal
               photos={splitPathname === username ? userPhotos : userLikes}
               photoIndex={selectedPhotoIndex}
               changePage={changePhotosPage}
            />
         )}
      </div>
   );
};

export default UserProfile;
