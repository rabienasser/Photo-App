import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   border: 1px solid rgb(209, 209, 209);
   border-radius: 5px;
   padding: 15px;
   width: 100%;
   transition: border 0.4s ease;

   @media (max-width: 900px) {
      width: 75%;
      margin: auto;
   }
   @media (max-width: 650px) {
      width: 100%;
   }

   &:hover {
      border: 1px solid ${(props) => props.theme.secondary};
   }
`;

export const TopRow = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-bottom: 10px;

   div {
      display: flex;
   }

   button {
      margin: 0 3px;
   }
`;

export const User = styled(Link)`
   display: flex;
   align-items: center;

   img {
      height: 64px;
      width: 64px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 12px;
   }

   div {
      display: flex;
      flex-direction: column;
      text-align: left;
      color: ${(props) => props.theme.secondary};

      h5 {
         font-size: 16px;
      }
   }
`;

export const MiddleRow = styled.div`
   display: flex;
   justify-content: space-between;
   padding-bottom: 10px;

   div {
      width: 32%;

      img {
         border-radius: 0px;
         width: 100%;
         height: 100px;
         object-fit: cover;
      }
   }
`;

export const BottomRow = styled.div`
   width: 100%;
   padding-bottom: 5px;

   button {
      border: 1px solid rgb(209, 209, 209);
      padding: 6px;
      width: 100%;
      cursor: pointer;
      transition: border 0.4s ease;

      &:hover {
         border: 1px solid ${(props) => props.theme.secondary};
      }
   }
`;
