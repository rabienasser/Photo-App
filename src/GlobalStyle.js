import { createGlobalStyle } from "styled-components";

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
   }
`;
