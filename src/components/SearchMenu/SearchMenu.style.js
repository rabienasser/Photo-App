import styled from "styled-components";

export const StyledMenu = styled.ul`
   width: 100%;
   display: flex;
   padding: 25px 0 35px;

   div {
      width: 33.33%;
   }

   li {
      font-size: 32px;
      text-align: center;
      margin-left: -25px;
      color: #999999;

      &:hover {
         color: black;
         transition: color 1s ease-out;
      }

      @media (max-width: 768px) {
         font-size: 16px;
      }
   }

   .active {
      color: black;
      border-bottom: 5px solid #6958f2;

      @media (max-width: 768px) {
         border-bottom: 3px solid #6958f2;
      }
   }
`;
