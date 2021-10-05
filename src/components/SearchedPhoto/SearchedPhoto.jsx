import React from "react";
import { Link } from "react-router-dom";
import { StyledPhoto } from "./SearchedPhoto.style";

const SearchedPhoto = ({ photo: { urls, description, likes, id } }) => {
   return (
      <>
         <StyledPhoto>
            <Link to={`/photo/${id}`}>
               <img src={urls?.small} alt={description} />
               <div>
                  <p>
                     {likes} <span>Likes</span>
                  </p>
               </div>
            </Link>
         </StyledPhoto>
      </>
   );
};

export default SearchedPhoto;
