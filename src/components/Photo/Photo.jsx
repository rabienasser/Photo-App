import { StyledPhoto } from "./Photo.styles";
import { useDispatch } from "react-redux";
import { openPhoto } from "store/photo/actions";

const Photo = ({
   photo: { urls, description },
   index,
   // changePage,
   // loadMorePhotos,
}) => {
   const dispatch = useDispatch();
   // const collectPhotoData = useSelector((state) => state.photo.photoData);

   // const [active, setActive] = useState(false);
   // const [activePhoto, setActivePhoto] = useState("");

   // const dispatch = useDispatch();
   // const active = useSelector((state) => state.photo.active);
   // const activePhoto = useSelector((state) => state.photo.activePhoto);

   // const openPhoto = (photo) => {
   //    // setActive(true);
   //    // setActivePhoto(photo);

   //    // dispatch(openPhoto(photo));
   //    props.openPhoto(photo);
   // };

   // const handleNextPhoto = (photo) => {
   //    const idx = photoArr.indexOf(photo) + 1;
   //    let nextPhoto = photoArr.find((el) => photoArr.indexOf(el) === idx);

   //    if (photoArr.indexOf(nextPhoto) === photoArr.length - 1) {
   //       changePage();
   //    }
   //    setActivePhoto(nextPhoto);
   // };

   // const handlePreviousPhoto = (photo) => {
   //    const idx =
   //       photoArr.indexOf(photo) === 0
   //          ? photoArr.length - 1
   //          : photoArr.indexOf(photo) - 1;
   //    let prevPhoto = photoArr.find((el) => photoArr.indexOf(el) === idx);
   //    setActivePhoto(prevPhoto);
   // };

   // const closePhoto = () => {
   //    // dispatch(closePhoto());
   //    props.closePhoto();
   // };

   return (
      <>
         <StyledPhoto
            onClick={() => {
               dispatch(openPhoto(index));
            }}
         >
            <img src={urls.small} alt={description} />
         </StyledPhoto>

         {/* {props.active && (
            <FocusedPhoto
               activePhoto={props.activePhoto}
               // closePhoto={closePhoto}
               // handleNextPhoto={handleNextPhoto}
               // handlePreviousPhoto={handlePreviousPhoto}
            />
         )} */}
      </>
   );
};

// const mapStateToProps = (state) => {
//    return {
//       selectedPhoto: state.photo.selectedPhoto,
//    };
// };

// const mapDispatchToProps = {
//    openPhoto,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Photo);
export default Photo;
