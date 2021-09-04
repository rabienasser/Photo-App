import React, { useState } from "react";
import { FocusedPhoto } from "components";
import { StyledPhoto } from "./Photo.styles";

const Photo = ({
   photo,
   photo: { urls, description },
   photoArr,
   changePage,
   loadMorePhotos,
}) => {
   const [active, setActive] = useState(false);
   const [activePhoto, setActivePhoto] = useState("");

   const handleClick = (photo) => {
      setActive(true);
      setActivePhoto(photo);
   };

   const handleNextPhoto = (photo) => {
      const idx = photoArr.indexOf(photo) + 1;
      let nextPhoto = photoArr.find((el) => photoArr.indexOf(el) === idx);

      if (photoArr.indexOf(nextPhoto) === photoArr.length - 1) {
         changePage();
      }
      setActivePhoto(nextPhoto);
   };

   const handlePreviousPhoto = (photo) => {
      const idx =
         photoArr.indexOf(photo) === 0
            ? photoArr.length - 1
            : photoArr.indexOf(photo) - 1;
      let prevPhoto = photoArr.find((el) => photoArr.indexOf(el) === idx);
      setActivePhoto(prevPhoto);
   };

   const closePhoto = () => {
      setActive(false);
   };

   return (
      <>
         <StyledPhoto onClick={() => handleClick(photo)}>
            <img src={urls.small} alt={description} />
         </StyledPhoto>

         {active && (
            <FocusedPhoto
               activePhoto={activePhoto}
               closePhoto={closePhoto}
               handleNextPhoto={handleNextPhoto}
               handlePreviousPhoto={handlePreviousPhoto}
            />
         )}
      </>
   );
};

export default Photo;
