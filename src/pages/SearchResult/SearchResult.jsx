import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";
import useLoadingBar from "utils/loadingBar";
import { motion } from "framer-motion";
import { slideLeftAnim } from "animation";
import { searchPhotos } from "utils/api";
import { SearchedPhoto, SearchMenu } from "components";
import { Container } from "GlobalStyle";
import { SearchResults } from "./SearchResult.style";

const SearchResult = (props) => {
   const [photoData, setPhotoData] = useState(null);
   const [page, setPage] = useState(1);
   const [total, setTotal] = useState(null);
   const [active, setActive] = useState(true);
   const [isLoading, setIsLoading] = useState(false);

   const loadingBar = useRef();
   let searchTerm = props.match.params.searchId;

   useLoadingBar(isLoading, loadingBar);

   const loadInitialPhotos = async () => {
      setIsLoading(true);
      try {
         const res = await axios(searchPhotos(searchTerm, 1));
         const { data } = res;
         setPhotoData(data.results);
         setTotal(data.total);
         setIsLoading(false);
      } catch (err) {
         console.log(err);
      }
   };

   const loadMorePhotos = async () => {
      setIsLoading(true);
      try {
         const res = await axios(searchPhotos(searchTerm, page));
         const { data } = res;
         setPhotoData([...photoData, ...data.results]);
         setIsLoading(false);
      } catch (err) {
         console.log(err);
      }
   };

   const changePage = () => {
      setPage(page + 1);
   };

   useEffect(() => {
      loadInitialPhotos();
   }, []);

   useEffect(() => {
      loadMorePhotos();
   }, [page]);

   useEffect(() => {
      searchTerm = props.match.params.searchId;
      loadInitialPhotos();
   }, [props.match.params.searchId]);

   return (
      <motion.div
         variants={slideLeftAnim}
         initial="hidden"
         animate="show"
         exit="exit"
      >
         <LoadingBar color="#6958f2" ref={loadingBar} />
         <Container>
            {photoData && (
               <InfiniteScroll
                  dataLength={photoData.length}
                  next={() => changePage()}
                  hasMore={true}
                  loader={<h4>Loading...</h4>}
               >
                  <SearchResults>
                     <SearchMenu
                        searchTerm={searchTerm}
                        total={total}
                        active={active}
                     />
                     <Masonry
                        breakpointCols={3}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                     >
                        {photoData &&
                           photoData.map((photo) => (
                              <SearchedPhoto photo={photo} key={photo.id} />
                           ))}
                     </Masonry>
                  </SearchResults>
               </InfiniteScroll>
            )}
         </Container>
      </motion.div>
   );
};

export default SearchResult;
