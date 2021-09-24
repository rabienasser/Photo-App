import React, { useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";
import useLoadingBar from "utils/loadingBar";
import { Container, GridContainer } from "GlobalStyle";
import { motion } from "framer-motion";
import { slideRightAnim } from "animation";
import { SearchMenu, SearchedUser } from "components";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, changePage, newSearch } from "store/users/actions";

const Users = (props) => {
   const { usersData, total, isLoading } = useSelector((state) => state.users);
   const dispatch = useDispatch();

   let searchTerm = props.match.params.searchTerm;

   const loadingBar = useRef();
   useLoadingBar(isLoading, loadingBar);

   useEffect(() => {
      dispatch(loadUsers(searchTerm));
   }, []);

   useEffect(() => {
      dispatch(newSearch(searchTerm));
   }, [searchTerm]);

   return (
      <div>
         <LoadingBar color="#6958f2" ref={loadingBar} />
         <Container>
            <InfiniteScroll
               dataLength={usersData.length}
               next={() => dispatch(changePage())}
               hasMore={true}
            >
               <SearchMenu total={total} />
               <motion.div
                  variants={slideRightAnim}
                  initial="hidden"
                  animate="show"
               >
                  <GridContainer>
                     {usersData?.map((user) => (
                        <SearchedUser user={user} key={user.id} />
                     ))}
                  </GridContainer>
               </motion.div>
            </InfiniteScroll>
         </Container>
      </div>
   );
};

export default Users;
