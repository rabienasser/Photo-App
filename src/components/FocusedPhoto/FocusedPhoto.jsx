import React from "react";
import close from "../../assets/close.png";
import star from "../../assets/star.png";
import heart from "../../assets/heart.png";
import rightArrow from "../../assets/right-arrow.png";
import {
   Overlay,
   Container,
   TopRow,
   RightMarg,
   MiddleRow,
   BottomRow,
} from "./FocusedPhoto.styles";

class FocusedPhoto extends React.Component {
   render() {
      const {
         photo: {
            user: { profile_image, name },
            likes,
         },
         urls,
         description,
         closePhoto,
      } = this.props;
      return (
         <Overlay>
            <Container>
               <TopRow>
                  <RightMarg>
                     <img src={profile_image.small} alt={name} />
                     <p>{name}</p>
                  </RightMarg>
                  <button onClick={() => closePhoto()}>
                     <img className="icon" src={close} alt="close" />
                  </button>
               </TopRow>

               <MiddleRow>
                  <button>
                     <img
                        className="arrow left"
                        src={rightArrow}
                        alt="Previous"
                     />
                  </button>
                  <img src={urls.small} alt={description} />
                  <button>
                     <img className="arrow" src={rightArrow} alt="Next" />
                  </button>
               </MiddleRow>

               <BottomRow>
                  <RightMarg>
                     <img className="icon" src={heart} alt="Number of likes" />
                     <p>{likes}</p>
                  </RightMarg>
                  <img className="icon" src={star} alt="Save to favorites" />
               </BottomRow>
            </Container>
         </Overlay>
      );
   }
}

export default FocusedPhoto;
