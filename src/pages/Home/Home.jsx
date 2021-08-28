import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import Photo from "../../components/Photo/Photo";
import { Container } from "./Home.styles";

class Home extends React.Component {
   state = {
      photoData: null,
      page: 1,
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
      );
   }
}

export default Home;
