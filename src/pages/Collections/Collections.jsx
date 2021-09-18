import React, { useEffect, useRef } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";
import useLoadingBar from "utils/loadingBar";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { slideLeftAnim } from "animation";
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
      let source = axios.CancelToken.source();
      dispatch(loadSearchPagePhotos(searchTerm, source));

      return () => {
         console.log("search unmounting");
         source.cancel();
      };
   }, []);

   useEffect(() => {
      let source = axios.CancelToken.source();

      dispatch(newSearch(searchTerm, source));

      return () => {
         console.log("search unmounting");
         source.cancel();
      };
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
                  <SearchMenu total={total} />
                  <Masonry
                     breakpointCols={3}
                     className="my-masonry-grid"
                     columnClassName="my-masonry-grid_column"
                  >
                     {photoData?.map(
                        (photo) => (
                           <SearchedPhoto photo={photo} key={photo.id} />
                        ),
                        console.log(photoData)
                     )}
                  </Masonry>
               </SearchResults>
            </InfiniteScroll>
         </Container>
      </motion.div>
   );
};

export default SearchResult;
