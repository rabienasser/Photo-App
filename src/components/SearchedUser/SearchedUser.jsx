import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import {
   Container,
   TopRow,
   MiddleRow,
   BottomRow,
   User,
} from "./SearchedUser.style";

const SearchedUser = ({ user: { name, profile_image, photos, username } }) => {
   const [userAdded, setUserAdded] = useState(false);

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
            <button onClick={() => setUserAdded(!userAdded)}>
               <FontAwesomeIcon
                  icon={userAdded ? faUserCheck : faUserPlus}
                  className={userAdded ? "user-added" : "add-user"}
               />
            </button>
         </TopRow>
         <MiddleRow>
            {photos?.map((photo) => (
               <div key={photo.id}>
                  <img src={photo.urls.thumb} alt={photo.id} />
               </div>
            ))}
         </MiddleRow>
         <BottomRow>
            <button>View Profile</button>
         </BottomRow>
      </Container>
   );
};

export default SearchedUser;
