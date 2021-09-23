import React from "react";
import { Link } from "react-router-dom";
import { AddUserBtn } from "components";
import {
   Container,
   TopRow,
   MiddleRow,
   BottomRow,
   User,
} from "./SearchedUser.style";

const SearchedUser = ({ user: { name, profile_image, photos, username } }) => {
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
            <AddUserBtn />
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
      </Container>
   );
};

export default SearchedUser;
