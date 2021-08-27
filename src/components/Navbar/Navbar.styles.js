import styled from "styled-components";

export const StyledNav = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 65%;
   margin: 10px auto 50px;
`;

export const NavIcons = styled.ul`
   display: flex;

   .photos {
      border-radius: 10px;
      background: #a2c8fa;
   }

   .favorites {
      border-radius: 10px;
      background: #ffb4bc;
   }
`;

export const HomeIcon = styled.img`
   height: 49px;
   width: 49px;
   border-radius: 5px;
   cursor: pointer;
`;

export const SearchInput = styled.div`
   display: flex;
   width: 50%;

   form {
      background: #ffffff;
      width: 100%;
      display: flex;
      align-items: center;
      margin-left: 35px;
      border-radius: 5px;

      img {
         height: 23px;
         width: 27px;
         margin: 5px 0;
         padding-left: 5px;
         border-bottom-left-radius: 5px;
         border-top-left-radius: 5px;
      }

      input {
         width: 100%;
         padding: 10px;
         margin: 5px 35px 5px 0;
         font-size: 16px;
         color: #999999;
         outline: none;
         border: none;
         border-bottom-right-radius: 5px;
         border-top-right-radius: 5px;
      }
   }
`;
