import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import LoadingBar from "react-top-loading-bar";
import { pageAnimation } from "animation";
import { motion } from "framer-motion";
import { fetchHomePhotos } from "utils/api";
import { Photo } from "components";
import { Container } from "GlobalStyle";

const Home = () => {
   const [photoData, setPhotoData] = useState(null);
   const [page, setPage] = useState(1);
   const [progress, setProgress] = useState(0);

   const loadInitialPhotos = async () => {
      try {
         const res = await axios(fetchHomePhotos(1));
         const { data } = res;
         setPhotoData(data);
      } catch (err) {
         console.log(err);
      }
   };

   const loadMorePhotos = async () => {
      try {
         const res = await axios(fetchHomePhotos(page));
         const { data } = res;
         setPhotoData([...photoData, ...data]);
         setProgress(100);
      } catch (err) {
         console.log(err);
      }
   };

   const changePage = () => {
      setPage(page + 1);
   };

   useEffect(() => {
      loadInitialPhotos();
   }, []);

   useEffect(() => {
      loadMorePhotos();
   }, [page]);

   return (
      <motion.div
         variants={pageAnimation}
         initial="hidden"
         animate="show"
         exit="exit"
      >
         <LoadingBar
            color="#6958F2"
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
            loaderSpeed="1000"
         />
         <Container>
            {photoData && (
               <InfiniteScroll
                  dataLength={photoData.length}
                  next={() => changePage()}
                  hasMore={true}
                  loader={<h4>Loading...</h4>}
               >
                  <Masonry
                     breakpointCols={3}
                     className="my-masonry-grid"
                     columnClassName="my-masonry-grid_column"
                  >
                     {photoData &&
                        photoData.map((photo, idx, photoArr) => (
                           <Photo
                              photo={photo}
                              key={photo.id}
                              photoArr={photoArr}
                              changePage={changePage}
                              loadMorePhotos={loadMorePhotos}
                           />
                        ))}
                  </Masonry>
               </InfiniteScroll>
            )}
         </Container>
      </motion.div>
   );
};

// class Home extends React.Component {
//    state = {
//       photoData: null,
//       page: 1,
//       progress: 0,
//    };

//    loadInitialPhotos = async () => {
//       try {
//          const res = await axios(fetchHomePhotos(1));
//          const { data } = res;
//          this.setState({ photoData: data });
//       } catch (err) {
//          console.log(err);
//       }
//    };

//    loadMorePhotos = async () => {
//       try {
//          const res = await axios(fetchHomePhotos(this.state.page));
//          const { data } = res;
//          this.setState({
//             photoData: [...this.state.photoData, ...data],
//             progress: 100,
//          });
//       } catch (err) {
//          console.log(err);
//       }
//    };

//    changePage = () => {
//       this.setState({ page: this.state.page + 1 });
//    };

//    componentDidMount() {
//       this.loadInitialPhotos();
//    }

//    componentDidUpdate(prevProps, prevState) {
//       if (prevState.page !== this.state.page) this.loadMorePhotos();
//    }

//    render() {
//       const { photoData } = this.state;
//       return (
//          <motion.div
//             variants={pageAnimation}
//             initial="hidden"
//             animate="show"
//             exit="exit"
//          >
//             <LoadingBar
//                color="#6958F2"
//                progress={this.state.progress}
//                onLoaderFinished={() => this.setState({ progress: 0 })}
//                loaderSpeed="1000"
//             />
//             <Container>
//                {photoData && (
//                   <InfiniteScroll
//                      dataLength={photoData.length}
//                      next={() => this.changePage()}
//                      hasMore={true}
//                      loader={<h4>Loading...</h4>}
//                   >
//                      <Masonry
//                         breakpointCols={3}
//                         className="my-masonry-grid"
//                         columnClassName="my-masonry-grid_column"
//                      >
//                         {photoData &&
//                            photoData.map((photo, idx, photoArr) => (
//                               <Photo
//                                  photo={photo}
//                                  key={photo.id}
//                                  photoArr={photoArr}
//                                  changePage={this.changePage}
//                                  loadMorePhotos={this.loadMorePhotos}
//                               />
//                            ))}
//                      </Masonry>
//                   </InfiniteScroll>
//                )}
//             </Container>
//          </motion.div>
//       );
//    }
// }

export default Home;
