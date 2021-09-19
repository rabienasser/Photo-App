import React from "react";
import { StyledPhoto } from "./SearchedPhoto.style";

const SearchedPhoto = ({ photo: { urls, description, likes } }) => {
   return (
      <>
         <StyledPhoto>
            <img src={urls?.small} alt={description} />
            <div>
               <p>
                  {likes} <span>Likes</span>
               </p>
            </div>
         </StyledPhoto>
      </>
   );
};

export default SearchedPhoto;
