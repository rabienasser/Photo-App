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
      color: var(--greyText);

      &:hover {
         color: ${(props) => props.theme.secondary};
         transition: color 1s ease-out;
      }

      @media (max-width: 768px) {
         font-size: 16px;
      }
   }

   .active {
      color: ${(props) => props.theme.secondary};
      border-bottom: 5px solid var(--purple);

      @media (max-width: 768px) {
         border-bottom: 3px solid var(--purple);
      }
   }
`;
