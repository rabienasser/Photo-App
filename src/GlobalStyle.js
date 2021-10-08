import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
   :root {
      --purple: #6958f2;
      --greyText: #767676;
      --white: #ffffff;
   }

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

   .icon {
      font-size: 30px;
      cursor: pointer;
   }

   .heart-icon {
      color: red;
   }

   .star-icon {
      color: #ffd300;
   }

   .tag {
      padding: 0 8px;
         margin-right: 10px;
         background: rgb(238, 238, 238);
         cursor: pointer;
   }
`;

export const Container = styled.div`
   width: 75%;
   margin: 0 auto;
   text-align: center;

   @media (max-width: 1300px) {
      width: 80%;
   }

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

export const SearchResults = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   overflow: hidden;
`;

export const GridContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-auto-rows: ${(props) => props.autoRows && "400px"};
   grid-gap: 30px;
   padding: 20px;

   @media (max-width: 900px) {
      grid-template-columns: repeat(1, 1fr);
   }
`;

export const StyledButton = styled.button`
   border: 1px solid rgb(209, 209, 209);
   cursor: pointer;
   border-radius: 5px;
   height: fit-content;
   padding: 10px 12px;
   transition: border 0.4s ease;

   &:hover {
      border: 1px solid black;
   }

   .add-user {
      color: black;
      height: 100%;
   }

   .user-added {
      color: #999999;
   }
`;
