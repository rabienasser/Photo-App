import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Photo from "../../components/Photo/Photo";

class Home extends React.Component {
   state = {
      photoData: null,
      page: 2,
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
            photoData: this.state.photoData.concat(data),
            page: this.state.page + 1,
         });
      } catch (err) {
         console.log(err);
      }
   };

   componentDidMount() {
      this.loadInitialPhotos();
   }

   render() {
      const { photoData } = this.state;
      return (
         <div>
            {photoData && (
               <InfiniteScroll
                  dataLength={photoData.length}
                  next={() => this.loadMorePhotos()}
                  hasMore={true}
                  loader={<h4>Loading...</h4>}
               >
                  {photoData &&
                     photoData.map((photo) => (
                        <Photo photo={photo} key={photo.id} />
                     ))}
               </InfiniteScroll>
            )}
         </div>
      );
   }
}

export default Home;
