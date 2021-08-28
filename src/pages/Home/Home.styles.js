import styled from "styled-components";

export const Container = styled.div`
   width: 65%;
   margin: 0 auto;

   .my-masonry-grid {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin-left: -25px;
      width: auto;
   }
   .my-masonry-grid_column {
      padding-left: 25px;
      background-clip: padding-box;
   }

   .my-masonry-grid_column > img {
      margin-bottom: 25px;
   }
`;
