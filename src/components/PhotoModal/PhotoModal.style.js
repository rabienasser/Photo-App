import styled from "styled-components";
import { motion } from "framer-motion";

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

export const Modal = styled(motion.div)`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 82%;
   width: 48%;
   padding: 20px;
   background: var(--white);
`;

export const ContentContainer = styled(motion.div)`
   height: 100%;
   width: 100%;
`;

export const ModalContent = styled.div`
   height: 100%;
`;

export const TopRow = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 10%;
`;

export const RightMarg = styled.div`
   display: flex;

   a {
      display: flex;
   }

   img {
      margin-right: 15px;
      border-radius: 5px;
   }

   p {
      margin: auto;
   }

   .icon {
      margin-right: 7px;
   }
`;

export const MiddleRow = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 20px 0;
   height: 80%;

   a {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
   }

   .arrow {
      height: 25px;
      width: 25px;
      cursor: pointer;
   }
`;

export const StyledImage = styled(motion.img)`
   max-width: 100%;
   max-height: 100%;
   object-fit: cover;
   cursor: pointer;
`;

export const BottomRow = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 10%;
`;
