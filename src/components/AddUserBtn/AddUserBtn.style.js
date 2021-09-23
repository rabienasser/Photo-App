import styled from "styled-components";

export const StyledButton = styled.button`
   border: 1px solid rgb(209, 209, 209);
   cursor: pointer;
   border-radius: 5px;
   height: fit-content;
   padding: 10px 12px;
   transition: border 0.4s ease;

   &:hover {
      border: 1px solid black;
   }

   .add-user {
      color: black;
      height: 100%;
   }

   .user-added {
      color: #999999;
   }
`;
