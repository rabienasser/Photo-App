import React from "react";
import FocusedPhoto from "../FocusedPhoto/FocusedPhoto";
import { StyledPhoto } from "./Photo.styles";

class Photo extends React.Component {
   state = {
      active: false,
   };

   handleClick = () => {
      this.setState({ active: true });
      console.log(this.props.photo);
   };

   closePhoto = () => {
      this.setState({ active: false });
   };

   render() {
      const {
         photo,
         photo: { urls, description },
      } = this.props;
      const { active } = this.state;
      return (
         <>
            <StyledPhoto
               onClick={this.handleClick}
               src={urls.small}
               alt={description}
            />

            {active && (
               <FocusedPhoto
                  photo={photo}
                  urls={urls}
                  description={description}
                  closePhoto={this.closePhoto}
               />
            )}
         </>
      );
   }
}

export default Photo;
