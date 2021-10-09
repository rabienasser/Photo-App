import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AddUserBtn, MessageModal } from "components";
import { StyledButton } from "GlobalStyle";
import {
   Container,
   TopRow,
   MiddleRow,
   BottomRow,
   User,
} from "./SearchedUser.style";

const SearchedUser = ({
   user: { name, first_name, profile_image, photos, username, for_hire },
}) => {
   const [hireModal, setHireModal] = useState(false);

   const modalContent = {
      purpose: "Say Thanks",
      placeholder: `Hey ${first_name}, we'd like to hire you to shoot __ and __.`,
   };

   const closeModal = () => {
      setHireModal(false);
   };

   return (
      <Container>
         <TopRow>
            <User>
               <img src={profile_image?.medium} alt={username} />
               <div>
                  <h5>{name}</h5>
                  <p>@{username}</p>
               </div>
            </User>
            <div>
               <AddUserBtn />
               {for_hire && (
                  <StyledButton onClick={() => setHireModal(true)} hire>
                     Hire
                  </StyledButton>
               )}
            </div>
         </TopRow>
         <MiddleRow>
            {photos?.map((photo) => (
               <div key={photo.id}>
                  <img src={photo.urls.thumb} alt={photo.id} />
               </div>
            ))}
         </MiddleRow>
         <BottomRow>
            <Link to={`/user/${username}`}>
               <button>View Profile</button>
            </Link>
         </BottomRow>
         {hireModal && (
            <MessageModal
               profileImage={profile_image}
               name={first_name}
               purpose={modalContent.purpose}
               placeholder={modalContent.placeholder}
               closeModal={closeModal}
            />
         )}
      </Container>
   );
};

export default SearchedUser;
