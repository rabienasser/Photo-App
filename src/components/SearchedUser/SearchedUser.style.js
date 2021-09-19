import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   border: 1px solid rgb(209, 209, 209);
   border-radius: 5px;
   padding: 15px;
   width: 100%;
   cursor: pointer;
   transition: border 0.4s ease;

   &:hover {
      border: 1px solid black;
   }
`;

export const TopRow = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-bottom: 10px;

   button {
      border: 1px solid rgb(209, 209, 209);
      cursor: pointer;
      border-radius: 5px;
      height: fit-content;
      padding: 10px 12px;
      transition: border 0.4s ease;

      &:hover {
         border: 1px solid black;
      }
   }

   .add-user {
      color: black;
      height: 100%;
   }

   .user-added {
      color: #999999;
   }
`;

export const User = styled.div`
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
         border: 1px solid black;
      }
   }
`;
