import styled from "styled-components";

export const Overlay = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: rgba(0, 0, 0, 0.3);
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 10;
`;

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 82%;
   width: 48%;
   padding: 20px;
   background: #ffffff;

   .icon {
      height: 30px;
      width: 30px;
      cursor: pointer;
   }
`;

export const TopRow = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 10%;
`;

export const RightMarg = styled.div`
   display: flex;

   img {
      margin-right: 15px;
      border-radius: 5px;
   }
`;

export const MiddleRow = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   text-align: center;
   padding: 20px;
   height: 80%;

   img {
      width: auto;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
   }

   .arrow {
      height: 30px;
      width: 30px;
      cursor: pointer;
   }

   .left {
      transform: rotate(180deg);
   }
`;

export const BottomRow = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 10%;
`;
