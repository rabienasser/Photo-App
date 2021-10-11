import styled from "styled-components";

export const PreviewPhotos = styled.div`
   display: flex;
   border-radius: 10px;
   cursor: pointer;
   height: 75%;
   transition: opacity 0.2s ease;

   @media (max-width: 500px) {
      height: 60%;
   }

   &:hover {
      opacity: 0.8;
   }
`;

export const LargePhoto = styled.div`
   width: 70%;
   padding: 0 2px;

   img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-radius: 0px;
   }
`;

export const SmallPhotos = styled.div`
   width: 30%;
   display: flex;
   flex-direction: column;
   padding: 0 2px;

   div {
      height: 50%;
      width: 100%;
   }

   img {
      object-fit: cover;
      padding: 2px 0;
      height: 100%;
      width: 100%;
      border-radius: 0px;
   }
`;

export const CollectionDescription = styled.div`
   text-align: left;
   padding: 8px;
   color: #999999;

   > * {
      padding-bottom: 5px;
   }

   ul {
      display: flex;
   }
`;
