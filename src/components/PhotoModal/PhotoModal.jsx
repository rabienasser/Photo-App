/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import close from "assets/close.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
   faHeart as fasFaHeart,
   faStar as fasFaStar,
   faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
   faHeart as farFaHeart,
   faStar as farFaStar,
} from "@fortawesome/free-regular-svg-icons";
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
import { useDispatch, useSelector } from "react-redux";
import {
   closePhoto,
   clickNextPhoto,
   clickPreviousPhoto,
} from "store/photo/actions";
import { heartPhoto, unHeartPhoto } from "store/heartedPhotos/actions";
import { savePhoto, unSavePhoto } from "store/favoritesPage/actions";
library.add(fasFaHeart, farFaHeart, fasFaStar, farFaStar);

const PhotoModal = ({ photos, photoIndex, changePage }) => {
   const { heartedPhotos } = useSelector((state) => state.heartedPhotos);
   const { savedPhotos } = useSelector((state) => state.savedPhotos);
   const dispatch = useDispatch();

   const photo = photos[photoIndex];

   const savedPhotoIDs = savedPhotos.map((photo) => photo.id);

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
                        <img className="closeBtn" src={close} alt="close" />
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
                     <Link to={`/photo/${photo?.id}`}>
                        <StyledImage
                           variants={fadePhoto}
                           initial="hidden"
                           animate="visible"
                           key={photo?.id}
                           src={photo?.urls.small}
                           alt={photo?.description}
                        />
                     </Link>
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
                        <FontAwesomeIcon
                           icon={
                              heartedPhotos.includes(photo?.id)
                                 ? fasFaHeart
                                 : farFaHeart
                           }
                           className="icon heart-icon"
                           onClick={() => {
                              heartedPhotos.includes(photo?.id)
                                 ? dispatch(unHeartPhoto(photo))
                                 : dispatch(heartPhoto(photo));
                           }}
                        />
                        <p>
                           {heartedPhotos.includes(photo?.id)
                              ? photo?.likes + 1
                              : photo?.likes}
                        </p>
                     </RightMarg>
                     <FontAwesomeIcon
                        icon={
                           savedPhotoIDs.includes(photo?.id)
                              ? fasFaStar
                              : farFaStar
                        }
                        className="icon star-icon"
                        onClick={() => {
                           savedPhotoIDs.includes(photo?.id)
                              ? dispatch(unSavePhoto(photo))
                              : dispatch(savePhoto(photo));
                        }}
                     />
                  </BottomRow>
               </ModalContent>
            </ContentContainer>
         </Modal>
      </Overlay>
   );
};

export default PhotoModal;
