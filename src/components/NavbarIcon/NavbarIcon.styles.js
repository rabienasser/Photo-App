import styled from "styled-components";

export const StyledNavbarIcon = styled.li`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 49px;
   height: 70px;
   margin: 0 19px;

   @media (max-width: 650px) {
      width: 35px;
      height: 55px;
   }

   @media (max-width: 500px) {
      margin: 0 10px;
   }

   p {
      color: ${(props) => props.theme.navIcon};
      margin-top: 5px;
      cursor: pointer;
      @media (max-width: 500px) {
         font-size: 12px;
      }
   }
`;

export const Icon = styled.img`
   height: 25px;
   width: 26px;
   border-radius: 5px;
   cursor: pointer;

   @media (max-width: 650px) {
      height: 20px;
      width: 20px;
   }
`;
