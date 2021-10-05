import styled from "styled-components";

export const User = styled.div`
   margin-bottom: 20px;

   a {
      display: flex;
      justify-content: center;
   }

   h3 {
      font-size: 20px;
      padding-left: 15px;
      font-weight: 600;
      margin: auto 0;
   }
`;

export const StyledImage = styled.img`
   margin-bottom: 20px;

   &:hover {
      cursor: ${(props) => props.cursor};
   }
`;

export const PhotoDetails = styled.ul`
   display: flex;
   justify-content: space-evenly;
   margin: 0 auto 20px;
   width: 50%;

   li {
      display: flex;
      justify-content: center;
      align-items: center;

      .icon {
         margin-right: 10px;
      }
   }
`;

export const Tags = styled.ul`
   margin-bottom: 20px;
`;
