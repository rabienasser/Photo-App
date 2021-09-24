import React, { useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";
import useLoadingBar from "utils/loadingBar";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { slideBottomAnim } from "animation";
import { SearchedPhoto, SearchMenu } from "components";
import { Container, SearchResults } from "GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import {
   loadSearchPagePhotos,
   changePage,
   newSearch,
} from "store/searchResults/actions";

const SearchResult = (props) => {
   const { photoData, isLoading, total, error } = useSelector(
      (state) => state.searchResults
   );
   const dispatch = useDispatch();

   let searchTerm = props.match.params.searchTerm;

   const loadingBar = useRef();
   useLoadingBar(isLoading, loadingBar);

   useEffect(() => {
      dispatch(loadSearchPagePhotos(searchTerm));
   }, []);

   useEffect(() => {
      dispatch(newSearch(searchTerm));
   }, [searchTerm]);

   return (
      <div>
         <LoadingBar color="#6958f2" ref={loadingBar} />
         <Container>
            <InfiniteScroll
               dataLength={photoData.length}
               next={() => dispatch(changePage())}
               hasMore={true}
            >
               <SearchResults>
                  <SearchMenu total={total} />
                  <motion.div
                     variants={slideBottomAnim}
                     initial="hidden"
                     animate="show"
                  >
                     <Masonry
                        breakpointCols={3}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                     >
                        {photoData?.map((photo) => (
                           <SearchedPhoto photo={photo} key={photo.id} />
                        ))}
                     </Masonry>
                  </motion.div>
               </SearchResults>
            </InfiniteScroll>
         </Container>
      </div>
   );
};

export default SearchResult;
