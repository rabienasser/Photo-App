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
   height: 90%;
   width: 60%;
   padding: 20px;
   background: var(--white);
   background: ${(props) => props.theme.main};

   @media (max-width: 1000px) {
      height: 90%;
      width: 65%;
   }
   @media (max-width: 769px) {
      height: 90%;
      width: 85%;
   }
   @media (max-width: 550px) {
      width: 100%;
      height: 100%;
   }
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
      color: ${(props) => props.theme.secondary};
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
      display: flex;
      align-items: center;
      justify-content: center;
   }

   .arrow {
      height: 25px;
      width: 25px;
      cursor: pointer;
      color: ${(props) => props.theme.secondary};
      @media (max-width: 650px) {
         height: 18px;
         width: 18px;
      }
   }
`;

export const ImageContainer = styled.div`
   height: 100%;
   width: 90%;
   display: flex;
   justify-content: center;
`;

export const StyledImage = styled(motion.img)`
   width: 100%;
   height: 100%;
   object-fit: contain;
   cursor: pointer;
`;

export const BottomRow = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 10%;
`;
