import styled from "styled-components";

export const Heading = styled.div`
   position: relative;
   padding: 35px 0 8px;
   background: ${(props) => props.background};
   div {
      position: relative;
      z-index: 1;
   }

   ::after {
      content: "";
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      background: linear-gradient(
         hsla(0, 0%, 100%, 0.8),
         hsla(0, 0%, 100%, 0.9) 50%,
         #fff
      );
   }
`;

export const CollectionFlex = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   button {
      background: ${(props) => props.theme.main};
      text-align: center;

      .share-icon {
         margin-right: 5px;
      }
   }
`;

export const CollectionDetails = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;
   text-align: left;

   div:first-child {
      margin-bottom: 40px;
      h1 {
         margin-bottom: 10px;
         font-size: 40px;
         font-weight: 600;
         color: black;
      }
      div {
         display: flex;
         align-items: center;

         p {
            text-decoration: underline;
            color: #767676;
            transition: color 0.2s ease;

            &:hover {
               color: black;
            }
         }

         img {
            margin-right: 10px;
            border-radius: 5px;
         }
      }
   }
`;
