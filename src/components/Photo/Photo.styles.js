import styled from "styled-components";

export const StyledPhoto = styled.div`
   margin: 20px 0;
   cursor: pointer;
   overflow: hidden;
   border-radius: 10px;

   img {
      width: 100%;
      height: 100%;
      transform-origin: 50% 65%;
      transition: transform 4s ease-in-out;

      &:hover {
         transform: scale(1.1);
      }
   }
`;
