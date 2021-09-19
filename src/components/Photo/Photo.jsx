import { StyledPhoto } from "./Photo.styles";
import { useDispatch } from "react-redux";
import { openPhoto } from "store/photo/actions";

const Photo = ({ photo: { urls, description }, index }) => {
   const dispatch = useDispatch();
   return (
      <>
         <StyledPhoto
            onClick={() => {
               dispatch(openPhoto(index));
            }}
         >
            <img src={urls.small} alt={description} />
         </StyledPhoto>
      </>
   );
};

export default Photo;
