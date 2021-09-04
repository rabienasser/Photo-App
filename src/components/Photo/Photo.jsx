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

   // useEffect(() => {
   //    loadMorePhotos();
   // }, [changePage]);

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

// class Photo extends React.Component {
//    state = {
//       active: false,
//       activePhoto: "",
//    };

//    handleClick = (photo) => {
//       this.setState({ active: true, activePhoto: photo });
//    };

//    handleNextPhoto = (photo) => {
//       const idx = this.props.photoArr.indexOf(photo) + 1;
//       let nextPhoto = this.props.photoArr.find(
//          (el) => this.props.photoArr.indexOf(el) === idx
//       );

//       if (
//          this.props.photoArr.indexOf(nextPhoto) ===
//          this.props.photoArr.length - 1
//       ) {
//          this.props.changePage();
//       }
//       this.setState({ activePhoto: nextPhoto });
//    };

//    handlePreviousPhoto = (photo) => {
//       const idx =
//          this.props.photoArr.indexOf(photo) === 0
//             ? this.props.photoArr.length - 1
//             : this.props.photoArr.indexOf(photo) - 1;
//       let prevPhoto = this.props.photoArr.find(
//          (el) => this.props.photoArr.indexOf(el) === idx
//       );
//       this.setState({ activePhoto: prevPhoto });
//    };

//    closePhoto = () => {
//       this.setState({ active: false });
//    };

//    componentDidUpdate(prevProps, prevState) {
//       if (prevProps.changePage !== this.props.changePage) this.loadMorePhotos();
//    }

//    render() {
//       const {
//          photo,
//          photo: { urls, description },
//       } = this.props;
//       const { active, activePhoto } = this.state;
//       return (
//          <>
//             <StyledPhoto onClick={() => this.handleClick(photo)}>
//                <img src={urls.small} alt={description} />
//             </StyledPhoto>

//             {active && (
//                <FocusedPhoto
//                   activePhoto={activePhoto}
//                   closePhoto={this.closePhoto}
//                   handleNextPhoto={this.handleNextPhoto}
//                   handlePreviousPhoto={this.handlePreviousPhoto}
//                />
//             )}
//          </>
//       );
//    }
// }

export default Photo;
