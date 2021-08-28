import React from "react";
import FocusedPhoto from "../FocusedPhoto/FocusedPhoto";
import { StyledPhoto } from "./Photo.styles";

class Photo extends React.Component {
   state = {
      active: false,
      activePhoto: "",
   };

   handleClick = (photo) => {
      this.setState({ active: true, activePhoto: photo });
   };

   handleNextPhoto = (photo) => {
      const idx = this.props.photoArr.indexOf(photo) + 1;
      let nextPhoto = this.props.photoArr.filter(
         (el) => this.props.photoArr.indexOf(el) === idx
      );
      nextPhoto = nextPhoto[0];

      if (
         this.props.photoArr.indexOf(nextPhoto) ===
         this.props.photoArr.length - 1
      ) {
         this.props.changePage();
      }
      this.setState({ activePhoto: nextPhoto });
   };

   handlePreviousPhoto = (photo) => {
      const idx =
         this.props.photoArr.indexOf(photo) === 0
            ? this.props.photoArr.length - 1
            : this.props.photoArr.indexOf(photo) - 1;
      let prevPhoto = this.props.photoArr.filter(
         (el) => this.props.photoArr.indexOf(el) === idx
      );
      prevPhoto = prevPhoto[0];
      this.setState({ activePhoto: prevPhoto });
   };

   closePhoto = () => {
      this.setState({ active: false });
   };

   componentDidUpdate(prevProps, prevState) {
      if (prevProps.changePage !== this.props.changePage) this.loadMorePhotos();
   }

   render() {
      const {
         photo,
         photo: { urls, description },
      } = this.props;
      const { active, activePhoto } = this.state;
      return (
         <>
            <StyledPhoto
               onClick={() => this.handleClick(photo)}
               src={urls.small}
               alt={description}
            />

            {active && (
               <FocusedPhoto
                  activePhoto={activePhoto}
                  closePhoto={this.closePhoto}
                  handleNextPhoto={this.handleNextPhoto}
                  handlePreviousPhoto={this.handlePreviousPhoto}
               />
            )}
         </>
      );
   }
}

export default Photo;
