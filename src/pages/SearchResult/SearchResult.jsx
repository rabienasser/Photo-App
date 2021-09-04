import React, { useState, useEffect } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroll-component";
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

   let searchTerm = props.match.params.searchId;

   const loadInitialPhotos = async () => {
      try {
         const res = await axios(searchPhotos(searchTerm, 1));
         const { data } = res;
         setPhotoData(data.results);
         setTotal(data.total);
      } catch (err) {
         console.log(err);
      }
   };

   const loadMorePhotos = async () => {
      try {
         const res = await axios(searchPhotos(searchTerm, page));
         const { data } = res;
         setPhotoData([...photoData, ...data.results]);
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
