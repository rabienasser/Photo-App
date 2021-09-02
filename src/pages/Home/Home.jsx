import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import Photo from "../../components/Photo/Photo";
import LoadingBar from "react-top-loading-bar";
import { Container } from "./Home.styles";
import { pageAnimation } from "../../animation";
import { motion } from "framer-motion";

class Home extends React.Component {
   state = {
      photoData: null,
      page: 1,
      progress: 0,
   };

   loadInitialPhotos = async () => {
      try {
         const res = await axios(
            `https://api.unsplash.com/photos?order_by=latest&page=1&client_id=${process.env.REACT_APP_API_KEY}`
         );
         const { data } = res;
         this.setState({ photoData: data });
      } catch (err) {
         console.log(err);
      }
   };

   loadMorePhotos = async () => {
      try {
         const res = await axios(
            `https://api.unsplash.com/photos?order_by=latest&page=${this.state.page}&client_id=${process.env.REACT_APP_API_KEY}`
         );
         const { data } = res;
         this.setState({
            photoData: [...this.state.photoData, ...data],
            progress: 100,
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
   }

   render() {
      const { photoData } = this.state;
      return (
         <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
         >
            <LoadingBar
               color="#6958F2"
               progress={this.state.progress}
               onLoaderFinished={() => this.setState({ progress: 0 })}
               loaderSpeed="1000"
            />
            <Container>
               {photoData && (
                  <InfiniteScroll
                     dataLength={photoData.length}
                     next={() => this.changePage()}
                     hasMore={true}
                     loader={<h4>Loading...</h4>}
                  >
                     <Masonry
                        breakpointCols={3}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                     >
                        {photoData &&
                           photoData.map((photo, inx, photoArr) => (
                              <Photo
                                 photo={photo}
                                 key={photo.id}
                                 photoArr={photoArr}
                                 changePage={this.changePage}
                                 loadMorePhotos={this.loadMorePhotos}
                              />
                           ))}
                     </Masonry>
                  </InfiniteScroll>
               )}
            </Container>
         </motion.div>
      );
   }
}

export default Home;
