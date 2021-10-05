/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState, useRef } from "react";
import star from "assets/star.png";
import heart from "assets/heart.png";
import LoadingBar from "react-top-loading-bar";
import useLoadingBar from "utils/loadingBar";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadPhoto } from "store/photoPage/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Container } from "GlobalStyle";
import { StyledImage, User, PhotoDetails, Tags } from "./PhotoPage.style";

const PhotoPage = () => {
   const [zoom, setZoom] = useState(false);

   const { data, isLoading } = useSelector((state) => state.photoPage);
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

   const { user, description, urls, tags, likes, downloads } = data;

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
                     <img src={heart} alt="likes" className="icon" />
                     {likes?.toLocaleString()}
                  </li>
                  <li>
                     <FontAwesomeIcon icon={faDownload} className="icon" />
                     {downloads?.toLocaleString()}
                  </li>
                  <li>
                     <img src={star} alt="favorite" className="icon" />
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
