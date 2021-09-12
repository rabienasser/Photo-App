import React, { useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";
import useLoadingBar from "utils/loadingBar";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { slideLeftAnim } from "animation";
import { SearchedPhoto, SearchMenu } from "components";
import { Container } from "GlobalStyle";
import { SearchResults } from "./SearchResult.style";
import { useDispatch, useSelector } from "react-redux";
import {
   loadSearchPagePhotos,
   changePage,
   newSearch,
} from "store/searchResults/actions";

const SearchResult = (props) => {
   const photoData = useSelector((state) => state.searchResults.photoData);
   const isLoading = useSelector((state) => state.searchResults.isLoading);
   const error = useSelector((state) => state.searchResults.error);
   const dispatch = useDispatch();

   const loadingBar = useRef();
   let searchTerm = props.match.params.searchTerm;

   useLoadingBar(isLoading, loadingBar);

   useEffect(() => {
      dispatch(loadSearchPagePhotos(searchTerm));
   }, []);

   useEffect(() => {
      dispatch(newSearch(searchTerm));
   }, [searchTerm]);

   return (
      <motion.div
         variants={slideLeftAnim}
         initial="hidden"
         animate="show"
         exit="exit"
      >
         <LoadingBar color="#6958f2" ref={loadingBar} />
         <Container>
            <InfiniteScroll
               dataLength={photoData.length}
               next={() => dispatch(changePage())}
               hasMore={true}
               loader={<h4>Loading...</h4>}
            >
               <SearchResults>
                  <SearchMenu searchTerm={searchTerm} />
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
         </Container>
      </motion.div>
   );
};

export default SearchResult;
