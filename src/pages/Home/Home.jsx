import React, { useEffect, useRef } from "react";
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

const Home = () => {
   const dispatch = useDispatch();
   const homePhotos = useSelector((state) => state.homePhotos.homePhotoData);
   const isLoading = useSelector((state) => state.homePhotos.isLoading);
   const selectedPhotoIndex = useSelector((state) => state.photo.selectedPhoto);

   const loadingBar = useRef();

   useLoadingBar(isLoading, loadingBar);

   useEffect(() => {
      dispatch(loadHomePhotos());
   }, []);

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
               dataLength={homePhotos.length}
               next={() => dispatch(changePage())}
               hasMore={true}
               loader={<h4>Loading...</h4>}
            >
               <Masonry
                  breakpointCols={3}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
               >
                  {homePhotos?.map((photo, index) => (
                     <Photo photo={photo} index={index} key={photo.id} />
                  ))}
               </Masonry>
            </InfiniteScroll>
         </Container>
         {selectedPhotoIndex > -1 && (
            <PhotoModal
               photos={homePhotos}
               photoIndex={selectedPhotoIndex}
               changePage={changePage}
            />
         )}
      </motion.div>
   );
};

export default Home;
