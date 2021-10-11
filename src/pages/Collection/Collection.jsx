import React, { useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import LoadingBar from "react-top-loading-bar";
import useLoadingBar from "utils/loadingBar";
import { Link } from "react-router-dom";
import { Photo, PhotoModal } from "components";
import { useDispatch, useSelector } from "react-redux";
import {
   loadCollection,
   loadCollectionPhotos,
   changePage,
   clearPhotos,
} from "store/collectionPage/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { Container, StyledButton } from "GlobalStyle";
import { Heading, CollectionFlex, CollectionDetails } from "./Collection.style";

const Collection = (props) => {
   const {
      isLoading,
      collectionData: { user, title, total_photos },
      collectionPhotos,
   } = useSelector((state) => state.collectionPage);
   const { selectedPhoto } = useSelector((state) => state.photo);
   const dispatch = useDispatch();

   const collectionId = props.match.params.collectionId;

   const loadingBar = useRef();
   useLoadingBar(isLoading, loadingBar);

   useEffect(() => {
      dispatch(loadCollection(collectionId));
      dispatch(loadCollectionPhotos(collectionId));

      return function cleanup() {
         dispatch(clearPhotos());
      };
   }, []);

   return (
      <>
         <Heading
            background={`url(${collectionPhotos[0]?.urls.full}) no-repeat center center/cover`}
         >
            <Container>
               <LoadingBar color="#6958f2" ref={loadingBar} />
               <CollectionFlex>
                  <CollectionDetails>
                     <div>
                        <h1>{title}</h1>
                        <Link to={`/user/${user?.username}`}>
                           <div>
                              <img
                                 src={user?.profile_image.small}
                                 alt={user?.name}
                              />
                              <p>{user?.name}</p>
                           </div>
                        </Link>
                     </div>
                     <div>
                        <p>{total_photos} Photos</p>
                     </div>
                  </CollectionDetails>
                  <StyledButton>
                     <FontAwesomeIcon icon={faShare} className="share-icon" />
                     Share
                  </StyledButton>
               </CollectionFlex>
            </Container>
         </Heading>
         <Container>
            <InfiniteScroll
               dataLength={collectionPhotos.length}
               next={() => dispatch(changePage())}
               hasMore={true}
            >
               <Masonry
                  breakpointCols={3}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
               >
                  {collectionPhotos.map((photo, index) => (
                     <Photo
                        photo={photo}
                        index={index}
                        photos={collectionPhotos}
                        key={photo.id}
                     />
                  ))}
               </Masonry>
            </InfiniteScroll>
         </Container>

         {selectedPhoto > -1 && (
            <PhotoModal
               photos={collectionPhotos}
               photoIndex={selectedPhoto}
               changePage={changePage}
            />
         )}
      </>
   );
};

export default Collection;
