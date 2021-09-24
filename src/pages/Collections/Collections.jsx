import React, { useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";
import useLoadingBar from "utils/loadingBar";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { slideLeftAnim } from "animation";
import { SearchedCollection, SearchMenu } from "components";
import { Container, SearchResults, GridContainer } from "GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import {
   loadCollections,
   changePage,
   newSearch,
} from "store/collections/actions";

const Collections = (props) => {
   const { collectionsData, isLoading, total, error } = useSelector(
      (state) => state.collections
   );
   const dispatch = useDispatch();

   let searchTerm = props.match.params.searchTerm;

   const loadingBar = useRef();
   useLoadingBar(isLoading, loadingBar);

   useEffect(() => {
      dispatch(loadCollections(searchTerm));
   }, []);

   useEffect(() => {
      dispatch(newSearch(searchTerm));
   }, [searchTerm]);

   return (
      <div>
         <LoadingBar color="#6958f2" ref={loadingBar} />
         <Container>
            <InfiniteScroll
               dataLength={collectionsData.length}
               next={() => dispatch(changePage())}
               hasMore={true}
            >
               <SearchResults>
                  <SearchMenu total={total} />
                  <motion.div
                     variants={slideLeftAnim}
                     initial="hidden"
                     animate="show"
                  >
                     <GridContainer autoRows>
                        {collectionsData?.map((collection) => (
                           <SearchedCollection
                              collection={collection}
                              key={collection.id}
                           />
                        ))}
                     </GridContainer>
                  </motion.div>
               </SearchResults>
            </InfiniteScroll>
         </Container>
      </div>
   );
};

export default Collections;
