import { StyledPhoto } from "./Photo.styles";
import { useDispatch } from "react-redux";
import { openPhoto, collectPhotos } from "store/photo/actions";

const Photo = ({ photo: { urls, description }, index, photos }) => {
   const dispatch = useDispatch();

   return (
      <>
         <StyledPhoto
            onClick={() => {
               dispatch(openPhoto(index));
               dispatch(collectPhotos(photos));
            }}
         >
            <img src={urls?.small} alt={description} />
         </StyledPhoto>
      </>
   );
};

export default Photo;
