import React, { useRef, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import LoadingBar from "react-top-loading-bar";
import useLoadingBar from "utils/loadingBar";
import { useSelector, useDispatch } from "react-redux";
import { Photo, ProfileOverview } from "components";
import {
   loadProfile,
   loadUserPhotos,
   changePage,
   clearPhotos,
} from "store/userProfile/actions";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Container } from "GlobalStyle";
import { HorizontalBreak } from "./UserProfile.style";
library.add(fab);

const UserProfile = (props) => {
   const { isLoading, userPhotos } = useSelector((state) => state.userProfile);
   const dispatch = useDispatch();

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

   return (
      <div>
         <ProfileOverview />
         <LoadingBar color="#6958f2" ref={loadingBar} />

         <HorizontalBreak />
         <Container>
            <InfiniteScroll
               dataLength={userPhotos.length}
               next={() => dispatch(changePage())}
               hasMore={true}
               loader={<h4>Loading...</h4>}
               endMessage={<h4>You have reached the end</h4>}
            >
               <Masonry
                  breakpointCols={3}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
               >
                  {userPhotos?.map((photo, index) => (
                     <Photo photo={photo} index={index} key={photo.id} />
                  ))}
               </Masonry>
            </InfiniteScroll>
         </Container>
      </div>
   );
};

export default UserProfile;
