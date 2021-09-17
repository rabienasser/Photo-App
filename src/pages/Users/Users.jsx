import React, { useEffect, useRef } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";
import useLoadingBar from "utils/loadingBar";
import { Container } from "GlobalStyle";
import { UsersContainer } from "./Users.style";
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
      let source = axios.CancelToken.source();

      dispatch(loadUsers(searchTerm, source));

      return () => {
         console.log("users unmounting");
         source.cancel();
      };
   }, []);

   useEffect(() => {
      let source = axios.CancelToken.source();

      dispatch(newSearch(searchTerm, source));

      return () => {
         console.log("users unmounting");
         source.cancel();
      };
   }, [searchTerm]);

   return (
      <div>
         <LoadingBar color="#6958f2" ref={loadingBar} />
         <Container>
            <InfiniteScroll
               dataLength={usersData.length}
               next={() => dispatch(changePage())}
               hasMore={true}
               loader={<h4>Loading...</h4>}
            >
               <SearchMenu total={total} />
               <UsersContainer>
                  {usersData?.map(
                     (user) => (
                        <SearchedUser user={user} key={user.id} />
                     ),
                     console.log(usersData)
                  )}
               </UsersContainer>
            </InfiniteScroll>
         </Container>
      </div>
   );
};

export default Users;
