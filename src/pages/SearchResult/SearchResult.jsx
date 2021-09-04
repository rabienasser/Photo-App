import React from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroll-component";
import { motion } from "framer-motion";
import { slideLeftAnim } from "animation";
import { searchPhotos } from "utils/api";
import { SearchedPhoto, SearchMenu } from "components";
import { Container } from "GlobalStyle";
import { SearchResults } from "./SearchResult.style";

class SearchResult extends React.Component {
   state = {
      photoData: null,
      page: 1,
      total: null,
      active: true,
   };

   searchTerm = this.props.match.params.searchId;

   loadInitialPhotos = async () => {
      try {
         const res = await axios(searchPhotos(this.searchTerm, 1));
         const { data } = res;
         this.setState({ photoData: data.results, total: data.total });
      } catch (err) {
         console.log(err);
      }
   };

   loadMorePhotos = async () => {
      try {
         const res = await axios(
            searchPhotos(this.searchTerm, this.state.page)
         );
         const { data } = res;
         this.setState({
            photoData: [...this.state.photoData, ...data.results],
         });
      } catch (err) {
         console.log(err);
      }
   };

   changePage = () => {
      this.setState({ page: this.state.page + 1 });
   };

   componentDidMount() {
      this.loadInitialPhotos();
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevState.page !== this.state.page) this.loadMorePhotos();
      if (
         prevProps.match.params.searchId !== this.props.match.params.searchId
      ) {
         this.searchTerm = this.props.match.params.searchId;
         this.loadInitialPhotos();
      }
   }

   render() {
      const { photoData, total, active } = this.state;
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
                     next={() => this.changePage()}
                     hasMore={true}
                     loader={<h4>Loading...</h4>}
                  >
                     <SearchResults>
                        <SearchMenu
                           searchTerm={this.searchTerm}
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
   }
}

export default SearchResult;
