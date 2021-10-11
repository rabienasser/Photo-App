import styled from "styled-components";

export const StyledNavbarIcon = styled.li`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 49px;
   height: 70px;
   margin: 0 19px;

   p {
      color: ${(props) => props.theme.navIcon};
      margin-top: 5px;
      cursor: pointer;
   }
`;

export const Icon = styled.img`
   height: 25px;
   width: 26px;
   border-radius: 5px;
   cursor: pointer;
`;
