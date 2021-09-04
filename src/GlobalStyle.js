import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
   }

   body {
      font-family: 'Poppins', sans-serif;
      background-color: #F9FAFB;
   }

   p {
      font-size: 16px;
   }

   a {
      text-decoration: none;
      color: black;
   }

   img {
      border-radius: 10px;
   }

   button {
      background: none;
      border: none;
   }

   li {
      list-style: none;
   }
`;

export const Container = styled.div`
   width: 65%;
   margin: 0 auto;
   text-align: center;

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
