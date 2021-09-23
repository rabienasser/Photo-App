import { StyledPhoto } from "./Photo.styles";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openPhoto } from "store/photo/actions";

const Photo = ({ photo: { urls, description }, index }) => {
   const dispatch = useDispatch();

   const location = useLocation();
   const { pathname } = location;
   return (
      <>
         <StyledPhoto
            onClick={() => pathname === "/" && dispatch(openPhoto(index))}
         >
            <img src={urls.small} alt={description} />
         </StyledPhoto>
      </>
   );
};

export default Photo;
