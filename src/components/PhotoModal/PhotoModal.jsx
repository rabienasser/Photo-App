/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import close from "assets/close.png";
import star from "assets/star.png";
import heart from "assets/heart.png";
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
   StyledImage,
   BottomRow,
} from "./PhotoModal.style";
import { motion } from "framer-motion";
import { openModal, displayModalContent, fadePhoto } from "../../animation";
import { useDispatch } from "react-redux";
import {
   closePhoto,
   clickNextPhoto,
   clickPreviousPhoto,
} from "store/photo/actions";

const PhotoModal = ({ photos, photoIndex, changePage }) => {
   const dispatch = useDispatch();
   const photo = photos[photoIndex];

   return (
      <Overlay>
         <Modal variants={openModal} initial="hidden" animate="visible">
            <ContentContainer variants={displayModalContent}>
               <ModalContent>
                  <TopRow>
                     <RightMarg>
                        <Link to={`/user/${photo?.user.username}`}>
                           <img
                              src={photo?.user.profile_image.small}
                              alt={photo?.user.name}
                           />
                           <p>{photo?.user.name}</p>
                        </Link>
                     </RightMarg>
                     <button onClick={() => dispatch(closePhoto())}>
                        <img className="icon" src={close} alt="close" />
                     </button>
                  </TopRow>

                  <MiddleRow>
                     <motion.button
                        onClick={() => {
                           dispatch(clickPreviousPhoto());
                           if (photoIndex === 0) {
                              dispatch(changePage());
                           }
                        }}
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
                     <StyledImage
                        variants={fadePhoto}
                        initial="hidden"
                        animate="visible"
                        key={photo?.id}
                        src={photo?.urls.small}
                        alt={photo?.description}
                     />
                     <motion.button
                        onClick={() => {
                           dispatch(clickNextPhoto());
                           if (photoIndex + 2 === photos.length - 1) {
                              dispatch(changePage());
                           }
                        }}
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
                        <p>{photo?.likes}</p>
                     </RightMarg>
                     <img className="icon" src={star} alt="Save to favorites" />
                  </BottomRow>
               </ModalContent>
            </ContentContainer>
         </Modal>
      </Overlay>
   );
};

export default PhotoModal;
