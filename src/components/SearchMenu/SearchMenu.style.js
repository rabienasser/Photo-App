import styled from "styled-components";

export const StyledMenu = styled.ul`
   width: 100%;
   display: flex;
   padding: 25px 0 35px;

   div {
      width: 33.33%;
      text-align: center;
   }

   li {
      font-size: 32px;
      text-align: center;
      color: var(--greyText);

      &:hover {
         color: ${(props) => props.theme.secondary};
         transition: color 1s ease-out;
      }

      @media (max-width: 650px) {
         font-size: 25px;
      }
      @media (max-width: 450px) {
         font-size: 20px;
      }
   }

   .active {
      color: ${(props) => props.theme.secondary};
      border-bottom: 5px solid var(--purple);

      @media (max-width: 650px) {
         border-bottom: 3px solid var(--purple);
      }
   }
`;
