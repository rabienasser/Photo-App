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
   height: 100vh;
`;

export const Modal = styled(motion.div)`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   text-align: left;
   height: 98%;
   width: 35%;
   padding: 30px;
   background: ${(props) => props.theme.main};

   .purpose {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid var(--greyText);
      background: #f5f5f5;
      border-radius: 5px;
      margin-top: 5px;
      p {
         color: black;
      }
   }
`;

export const TopHalf = styled.div`
   height: 48%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

export const User = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;

   div {
      display: flex;
      align-items: center;
      h2 {
         font-weight: 600;
      }
   }

   img:first-child {
      border-radius: 50%;
      height: 64px;
      width: 64px;
      margin-right: 10px;
   }
`;

export const Guidelines = styled.ul`
   span {
      color: var(--greyText);
      text-decoration: underline;
      cursor: pointer;
   }

   .checkIcon {
      margin-right: 10px;
      color: var(--greyText);
   }
`;

export const BottomHalf = styled.div`
   height: 48%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   button {
      padding: 15px;
      background: ${(props) => (props.disabled ? "#f5f5f5" : "var(--purple)")};
      align-self: flex-end;
      border-radius: 5px;
      color: ${(props) =>
         props.disabled ? "var(--greyText)" : "var(--white)"};
      cursor: ${(props) => props.disabled && "not-allowed"};
   }
`;

export const TextArea = styled.div`
   height: 70%;

   p {
      margin-bottom: 5px;
   }

   textarea {
      width: 100%;
      height: 100%;
      padding: 5px 10px;
      font-family: "Poppins", sans-serif;
   }
`;
