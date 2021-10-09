import React from "react";
import Masonry from "react-masonry-css";
import { useSelector } from "react-redux";
import { SearchedPhoto } from "components";
import { Container, SearchResults } from "GlobalStyle";

const FavoritesPage = () => {
   const { savedPhotos } = useSelector((state) => state.savedPhotos);

   return (
      <>
         {savedPhotos.length ? (
            <Container>
               <SearchResults>
                  <Masonry
                     breakpointCols={3}
                     className="my-masonry-grid"
                     columnClassName="my-masonry-grid_column"
                  >
                     {savedPhotos?.map((photo) => (
                        <SearchedPhoto photo={photo} key={photo.id} />
                     ))}
                  </Masonry>
               </SearchResults>
            </Container>
         ) : (
            <h1 style={{ textAlign: "center", fontWeight: "600" }}>
               You have no saved photos at this time
            </h1>
         )}
      </>
   );
};

export default FavoritesPage;
