/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import useLoadingBar from "utils/loadingBar";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadPhoto } from "store/photoPage/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
   faHeart as fasFaHeart,
   faStar as fasFaStar,
   faDownload,
} from "@fortawesome/free-solid-svg-icons";
import {
   faHeart as farFaHeart,
   faStar as farFaStar,
} from "@fortawesome/free-regular-svg-icons";
import { Container } from "GlobalStyle";
import { StyledImage, User, PhotoDetails, Tags } from "./PhotoPage.style";
import { heartPhoto, unHeartPhoto } from "store/heartedPhotos/actions";
import { savePhoto, unSavePhoto } from "store/favoritesPage/actions";
library.add(fasFaHeart, farFaHeart, fasFaStar, farFaStar);

const PhotoPage = () => {
   const [zoom, setZoom] = useState(false);

   const { data, isLoading } = useSelector((state) => state.photoPage);
   const { heartedPhotos } = useSelector((state) => state.heartedPhotos);
   const { savedPhotos } = useSelector((state) => state.savedPhotos);
   const dispatch = useDispatch();

   const loadingBar = useRef();
   useLoadingBar(isLoading, loadingBar);

   const { pathname } = useLocation();
   const photoId = pathname.split("/").pop();

   const zoomPhoto = () => {
      setZoom(!zoom);
   };

   useEffect(() => {
      dispatch(loadPhoto(photoId));
   }, []);

   const { user, description, urls, tags, downloads } = data;

   const savedPhotoIDs = savedPhotos.map((photo) => photo.id);

   return (
      <>
         {data && (
            <Container>
               <LoadingBar color="#6958f2" ref={loadingBar} />
               <User>
                  <Link to={`/user/${user?.username}`}>
                     <img
                        src={user?.profile_image.medium}
                        alt={user?.first_name}
                     />
                     <h3>{user?.name}</h3>
                  </Link>
               </User>
               <StyledImage
                  src={zoom ? urls?.regular : urls?.small}
                  alt={description}
                  onClick={() => zoomPhoto()}
                  cursor={zoom ? "zoom-out" : "zoom-in"}
               />
               <PhotoDetails>
                  <li>
                     <FontAwesomeIcon
                        icon={
                           heartedPhotos.includes(data?.id)
                              ? fasFaHeart
                              : farFaHeart
                        }
                        className="icon heart-icon"
                        onClick={() => {
                           heartedPhotos.includes(data?.id)
                              ? dispatch(unHeartPhoto(data))
                              : dispatch(heartPhoto(data));
                        }}
                     />
                     {heartedPhotos.includes(data?.id)
                        ? data?.likes + 1
                        : data?.likes}
                  </li>
                  <li>
                     <FontAwesomeIcon icon={faDownload} className="icon" />
                     {downloads?.toLocaleString()}
                  </li>
                  <li>
                     <FontAwesomeIcon
                        icon={
                           savedPhotoIDs.includes(data?.id)
                              ? fasFaStar
                              : farFaStar
                        }
                        className="icon star-icon"
                        onClick={() => {
                           savedPhotoIDs.includes(data?.id)
                              ? dispatch(unSavePhoto(data))
                              : dispatch(savePhoto(data));
                        }}
                     />
                  </li>
               </PhotoDetails>
               <Tags>
                  {tags
                     ?.filter((tag) => tags?.indexOf(tag) <= 5)
                     ?.map((tag) => (
                        <Link
                           to={`/search/${tag.title}`}
                           key={tags?.indexOf(tag)}
                           className="tag"
                        >
                           {tag.title}
                        </Link>
                     ))}
               </Tags>
            </Container>
         )}
      </>
   );
};

export default PhotoPage;
