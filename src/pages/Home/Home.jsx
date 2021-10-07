import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import LoadingBar from "react-top-loading-bar";
import useLoadingBar from "utils/loadingBar";
import { pageAnimation } from "animation";
import { motion } from "framer-motion";
import { Photo, PhotoModal } from "components";
import { Container } from "GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import { loadHomePhotos, changePage } from "store/homePhotos/actions";
import { closePhoto } from "store/photo/actions";

const Home = () => {
   const { homePhotoData, isLoading } = useSelector(
      (state) => state.homePhotos
   );
   const selectedPhotoIndex = useSelector((state) => state.photo.selectedPhoto);
   const dispatch = useDispatch();

   const loadingBar = useRef();
   useLoadingBar(isLoading, loadingBar);

   const { pathname } = useLocation();

   useEffect(() => {
      dispatch(loadHomePhotos());
   }, []);

   useEffect(() => {
      dispatch(closePhoto());
   }, [pathname]);

   return (
      <motion.div
         variants={pageAnimation}
         initial="hidden"
         animate="show"
         exit="exit"
      >
         <LoadingBar color="#6958f2" ref={loadingBar} />
         <Container>
            <InfiniteScroll
               dataLength={homePhotoData.length}
               next={() => dispatch(changePage())}
               hasMore={true}
               loader={<h4>Loading...</h4>}
            >
               <Masonry
                  breakpointCols={3}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
               >
                  {homePhotoData?.map((photo, index) => (
                     <Photo
                        photo={photo}
                        index={index}
                        photos={homePhotoData}
                        key={photo.id}
                     />
                  ))}
               </Masonry>
            </InfiniteScroll>
         </Container>
         {selectedPhotoIndex > -1 && (
            <PhotoModal
               photos={homePhotoData}
               photoIndex={selectedPhotoIndex}
               changePage={changePage}
            />
         )}
      </motion.div>
   );
};

export default Home;
