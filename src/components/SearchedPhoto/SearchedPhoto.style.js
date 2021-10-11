import styled from "styled-components";

export const StyledPhoto = styled.div`
   position: relative;
   height: 265px;
   width: 265px;
   margin: 20px 0;
   cursor: pointer;
   @media (max-width: 600px) {
      height: 220px;
      width: 220px;
   }
   @media (max-width: 500px) {
      height: 180px;
      width: 180px;
   }
   @media (max-width: 400px) {
      height: 265px;
      width: 265px;
   }

   img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
   }

   div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(5px);
      border-radius: 10px;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.25s;

      &:hover {
         opacity: 1;
         transition: all 0.25s ease;

         > p {
            transform: translateY(0px);
         }
      }
   }

   p {
      font-size: 32px;
      transform: translateY(30px);
      transition: transform 0.25s;
   }
`;
