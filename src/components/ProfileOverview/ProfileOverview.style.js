import styled from "styled-components";

export const StyledOverview = styled.div`
   display: flex;
   height: 65vh;
`;

export const ProfileImage = styled.div`
   width: 25%;
   height: 100%;
   padding: 10px;
   padding: 10px 15px 0 0;
   display: flex;
   justify-content: flex-end;
   align-items: start;

   img {
      border-radius: 50%;
      height: 150px;
      width: 150px;
      object-fit: cover;
   }
`;

export const ProfileDetails = styled.div`
   width: 75%;
   text-align: left;
   padding: 10px 0 24px 24px;

   .interests {
      padding-bottom: 15px;
   }
`;

export const Username = styled.div`
   display: flex;
   padding-bottom: 15px;

   h1 {
      font-size: 40px;
      font-weight: 600;
      margin-right: 25px;
   }

   button {
      margin: auto 5px auto 0;
   }
`;

export const Bio = styled.div`
   padding-bottom: 15px;
   p {
      font-size: 15px;
   }
`;

export const Lists = styled.ul`
   display: flex;
   justify-content: space-between;
   padding-bottom: 15px;
   width: 65%;
`;

export const List = styled.ul`
   display: flex;
   flex-direction: ${(props) => (props.row ? "row" : "column")};

   li,
   a {
      padding-bottom: 8px;
      font-size: 14px;
      color: var(--greyText);
      transition: color 0.3s ease;
   }

   a {
      margin-right: ${(props) => props.row && "20px"};
   }

   .link {
      cursor: pointer;

      &:hover {
         color: ${(props) => props.theme.secondary};
      }
   }

   .hire,
   .active {
      color: var(--purple);

      &:hover {
         color: var(--purple);
         cursor: text;
      }
   }

   .profileIcon {
      margin-right: 10px;
   }

   .caret {
      margin-left: 5px;
   }
`;

export const SocialDropDown = styled.ul`
   display: flex;
   flex-direction: column;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

   div {
      padding: 8px;
      transition: background-color 0.1s ease;

      &:hover {
         background: #f0f0f0;
      }
   }

   a {
      font-size: 14px;
      color: var(--greyText);
      transition: color 0.3s ease;
   }

   .social-link {
      &:hover {
         color: black;
      }
   }
`;
