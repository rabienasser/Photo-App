import React, { useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import LoadingBar from "react-top-loading-bar";
import useLoadingBar from "utils/loadingBar";
import { pageAnimation } from "animation";
import { motion } from "framer-motion";
import { Photo } from "components";
import { Container } from "GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import { loadInitialPhotos, changePage } from "store/homePhotos/actions";

const Home = (props) => {
   const dispatch = useDispatch();
   const homePhotos = useSelector((state) => state.homePhotos.photoData);
   const isLoading = useSelector((state) => state.homePhotos.isLoading);

   const loadingBar = useRef();

   useLoadingBar(isLoading, loadingBar);

   // const loadInitialPhotos = async () => {
   //    setIsLoading(true);
   //    try {
   //       const res = await axios(fetchHomePhotos(1));
   //       const { data } = res;
   //       setPhotoData(data);
   //       setIsLoading(false);
   //    } catch (err) {
   //       console.log(err);
   //    }
   // };

   // const loadMorePhotos = async () => {
   //    setIsLoading(true);
   //    try {
   //       const res = await axios(fetchHomePhotos(page));
   //       const { data } = res;
   //       setPhotoData([...photoData, ...data]);
   //       setIsLoading(false);
   //    } catch (err) {
   //       console.log(err);
   //    }
   // };

   // const changePage = () => {
   //    setPage(page + 1);
   // };

   useEffect(() => {
      dispatch(loadInitialPhotos());
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
            {homePhotos && (
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
                     {homePhotos &&
                        homePhotos.map((photo, idx, photoArr) => (
                           <Photo
                              photo={photo}
                              key={photo.id}
                              photoArr={photoArr}
                              // changePage={changePage}
                              // loadMorePhotos={loadMorePhotos}
                           />
                        ))}
                  </Masonry>
               </InfiniteScroll>
            )}
         </Container>
      </motion.div>
   );
};

export default Home;
