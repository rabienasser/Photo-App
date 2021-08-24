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
   height: 300px;
   width: 300px;
   background: greenyellow;
   color: black;
   text-align: center;
`;
