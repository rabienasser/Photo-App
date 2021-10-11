import styled from "styled-components";

export const StyledOverview = styled.div`
   display: flex;
   margin-bottom: 150px;
   @media (max-width: 900px) {
      margin-bottom: 120px;
   }
`;

export const ProfileImage = styled.div`
   width: 25%;
   height: 100%;
   padding: 10px;
   padding: 10px 15px 0 0;
   display: flex;
   justify-content: flex-end;
   align-items: start;
   @media (max-width: 600px) {
      padding: 10px 10px 0 0;
   }
   @media (max-width: 400px) {
      padding: 0;
   }

   img {
      border-radius: 50%;
      height: 150px;
      width: 150px;
      object-fit: cover;
      @media (max-width: 700px) {
         height: 120px;
         width: 120px;
      }
      @media (max-width: 600px) {
         height: 100px;
         width: 100px;
      }
   }
`;

export const ProfileDetails = styled.div`
   width: 75%;
   text-align: left;
   padding: 10px 0 24px 24px;
   @media (max-width: 600px) {
      padding: 10px 0 10px 10px;
   }

   .interests {
      padding-bottom: 10px;
   }
`;

export const Username = styled.div`
   display: flex;
   align-items: center;
   padding-bottom: 15px;
   @media (max-width: 500px) {
      flex-direction: column;
      align-items: flex-start;
   }

   div {
      display: flex;
   }

   h1 {
      font-size: 40px;
      font-weight: 600;
      margin-right: 25px;
      @media (max-width: 600px) {
         font-size: 30px;
      }
      @media (max-width: 500px) {
         margin-right: 0px;
      }
   }

   button {
      margin: auto 8px auto 0;
      @media (max-width: 500px) {
         margin: auto 5px auto 0;
      }
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
   @media (max-width: 900px) {
      width: 75%;
   }
   @media (max-width: 700px) {
      width: 85%;
   }
   @media (max-width: 600px) {
      width: 100%;
   }
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

export const Tags = styled.ul`
   display: flex;
   flex-wrap: wrap;
`;
