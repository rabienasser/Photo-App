import React from "react";
import close from "../../assets/close.png";
import star from "../../assets/star.png";
import heart from "../../assets/heart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import {
   Overlay,
   Modal,
   ContentContainer,
   ModalContent,
   TopRow,
   RightMarg,
   MiddleRow,
   BottomRow,
} from "./FocusedPhoto.styles";
import { motion, AnimatePresence } from "framer-motion";
import { openModal, displayModalContent, slideAnim } from "../../animation";

class FocusedPhoto extends React.Component {
   render() {
      const {
         activePhoto: {
            user: { profile_image, name },
            likes,
            urls,
            description,
         },
         activePhoto,
         closePhoto,
         handleNextPhoto,
         handlePreviousPhoto,
      } = this.props;

      return (
         <Overlay>
            <Modal variants={openModal} initial="hidden" animate="visible">
               <ContentContainer variants={displayModalContent}>
                  <AnimatePresence initial={false}>
                     <ModalContent
                        variants={slideAnim}
                        initial="enter"
                        animate="visible"
                        exit="exit"
                        key={activePhoto.id}
                     >
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
                           <motion.button
                              onClick={() => handlePreviousPhoto(activePhoto)}
                              whileHover={{
                                 scale: 1.2,
                                 transition: { duration: 0.3 },
                              }}
                           >
                              <FontAwesomeIcon
                                 icon={faArrowAltCircleRight}
                                 className="arrow"
                                 rotation={180}
                              />
                           </motion.button>
                           <img src={urls.small} alt={description} />
                           <motion.button
                              onClick={() => handleNextPhoto(activePhoto)}
                              whileHover={{
                                 scale: 1.2,
                                 transition: { duration: 0.3 },
                              }}
                           >
                              <FontAwesomeIcon
                                 icon={faArrowAltCircleRight}
                                 className="arrow"
                              />
                           </motion.button>
                        </MiddleRow>

                        <BottomRow>
                           <RightMarg>
                              <img
                                 className="icon"
                                 src={heart}
                                 alt="Number of likes"
                              />
                              <p>{likes}</p>
                           </RightMarg>
                           <img
                              className="icon"
                              src={star}
                              alt="Save to favorites"
                           />
                        </BottomRow>
                     </ModalContent>
                  </AnimatePresence>
               </ContentContainer>
            </Modal>
         </Overlay>
      );
   }
}

export default FocusedPhoto;
