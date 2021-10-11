import styled from "styled-components";

export const StyledNav = styled.nav`
   position: sticky;
   top: 0;
   width: 100%;
   margin-bottom: 20px;
   background: ${(props) => props.theme.nav};
   z-index: 10;
`;

export const NavContent = styled.div`
   width: 65%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: auto;
   padding: 7px 0;

   @media (max-width: 1000px) {
      width: 85%;
   }

   @media (max-width: 650px) {
      width: 95%;
      padding: 15px 0;
   }
`;

export const NavIcons = styled.ul`
   display: flex;

   .photos {
      border-radius: 10px;
      background: #a2c8fa;
   }

   .favorites {
      border-radius: 10px;
      background: #ffea75;
   }
`;

export const HomeIcon = styled.img`
   height: 49px;
   width: 49px;
   border-radius: 5px;
   cursor: pointer;
   @media (max-width: 650px) {
      display: none;
   }
`;

export const SearchInput = styled.div`
   display: flex;
   align-items: center;
   width: 50%;

   form {
      background: var(--white);
      width: 100%;
      display: flex;
      align-items: center;
      margin-left: 35px;
      border-radius: 5px;
      @media (max-width: 650px) {
         margin-left: 10px;
         height: 100%;
      }

      img {
         height: 23px;
         width: 27px;
         margin: 5px 0;
         padding-left: 5px;
         border-bottom-left-radius: 5px;
         border-top-left-radius: 5px;
         @media (max-width: 500px) {
            height: 15px;
            width: 20px;
         }
      }

      input {
         width: 100%;
         padding: 10px;
         margin: 5px 35px 5px 0;
         font-size: 16px;
         color: var(--greyText);
         outline: none;
         border: none;
         border-bottom-right-radius: 5px;
         border-top-right-radius: 5px;
         @media (max-width: 650px) {
            margin: 0;
         }
      }
   }
`;
