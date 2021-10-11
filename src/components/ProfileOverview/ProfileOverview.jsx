import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { AddUserBtn, MessageModal } from "components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faCheckCircle,
   faMapPin,
   faLink,
   faCaretDown,
   faGlobeAmericas,
   faImage,
   faHeart,
   faLayerGroup,
   faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Container, StyledButton } from "GlobalStyle";
import {
   StyledOverview,
   ProfileImage,
   ProfileDetails,
   Username,
   SocialDropDown,
   Bio,
   Lists,
   List,
} from "./ProfileOverview.style";

library.add(fab);

const ProfileOverview = () => {
   const [socialLinks, setSocialLinks] = useState(false);
   const [messageModal, setMessageModal] = useState(false);
   const [hireModal, setHireModal] = useState(false);

   const {
      profileData: {
         name,
         first_name,
         bio,
         followers_count,
         following_count,
         for_hire,
         tags,
         total_photos,
         total_likes,
         total_collections,
         profile_image,
         social,
         location,
         downloads,
         username,
      },
   } = useSelector((state) => state.userProfile);

   const modalContent = {
      message: {
         purpose: "Say Thanks",
         placeholder: `Hey ${first_name}, I'd like to thank you for sharing your photos on this application. I've used one of them here: __`,
      },
      hire: {
         purpose: "Hiring",
         placeholder: `Hey ${first_name}, we'd like to hire you to shoot __ and __.`,
      },
   };

   const closeMessageModal = () => {
      setMessageModal(false);
   };
   const closeHireModal = () => {
      setHireModal(false);
   };

   const linkToSocial = (social, username) => {
      return `https://${social}.com/${username}`;
   };
   return (
      <Container>
         <StyledOverview>
            <ProfileImage>
               <img src={profile_image?.large} alt={name} />
            </ProfileImage>
            <ProfileDetails>
               <Username>
                  <h1>{name}</h1>
                  <AddUserBtn />
                  <StyledButton onClick={() => setMessageModal(true)}>
                     <FontAwesomeIcon icon={faEnvelope} />
                  </StyledButton>
                  {for_hire && (
                     <StyledButton onClick={() => setHireModal(true)} hire>
                        Hire
                     </StyledButton>
                  )}
               </Username>
               <Bio>
                  <p>{bio}</p>
               </Bio>
               <Lists>
                  <List>
                     {for_hire && (
                        <li className="hire">
                           <FontAwesomeIcon
                              icon={faCheckCircle}
                              className="profileIcon hire"
                           />
                           Available for hire
                        </li>
                     )}

                     {location && (
                        <Link to={`/search/${location}`}>
                           <li className="link">
                              <FontAwesomeIcon
                                 icon={faMapPin}
                                 className="profileIcon"
                              />
                              {location}
                           </li>
                        </Link>
                     )}

                     {(social?.instagram_username ||
                        social?.twitter_username) && (
                        <li
                           onClick={() => setSocialLinks(!socialLinks)}
                           className="link"
                        >
                           <FontAwesomeIcon
                              icon={faLink}
                              className="profileIcon"
                           />
                           Connect with {first_name}
                           <FontAwesomeIcon
                              icon={faCaretDown}
                              className="caret"
                           />
                        </li>
                     )}

                     {socialLinks && (
                        <SocialDropDown>
                           <div>
                              {social.portfolio_url && (
                                 <a
                                    href={social.portfolio_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link social-link"
                                 >
                                    <FontAwesomeIcon
                                       icon={faGlobeAmericas}
                                       className="profileIcon"
                                    />

                                    {social.portfolio_url}
                                 </a>
                              )}
                           </div>
                           <div>
                              {social.instagram_username && (
                                 <a
                                    href={linkToSocial(
                                       "instagram",
                                       `${social.instagram_username}`
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link social-link"
                                 >
                                    <FontAwesomeIcon
                                       icon={["fab", "instagram"]}
                                       className="profileIcon"
                                    />
                                    Instagram
                                 </a>
                              )}
                           </div>
                           <div>
                              {social.twitter_username && (
                                 <a
                                    href={linkToSocial(
                                       "twitter",
                                       `${social.twitter_username}`
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link social-link"
                                 >
                                    <FontAwesomeIcon
                                       icon={["fab", "twitter"]}
                                       className="profileIcon"
                                    />
                                    Twitter
                                 </a>
                              )}
                           </div>
                        </SocialDropDown>
                     )}
                  </List>
                  <List>
                     <li>Downloads: {downloads?.toLocaleString()}</li>
                     <li>Followers: {followers_count?.toLocaleString()}</li>
                     <li>Following: {following_count?.toLocaleString()}</li>
                  </List>
               </Lists>
               <div>
                  {tags?.length && <p className="interests">Interests</p>}
                  <ul>
                     {tags?.custom.map((tag) => (
                        <Link
                           to={`/search/${tag.title}`}
                           key={tags.custom.indexOf(tag)}
                           className="tag"
                        >
                           {tag.title}
                        </Link>
                     ))}
                  </ul>
               </div>
            </ProfileDetails>
         </StyledOverview>
         <List row>
            <NavLink
               exact
               to={`/user/${username}`}
               activeClassName="active"
               className="link"
            >
               <FontAwesomeIcon icon={faImage} className="profileIcon" />
               Photos: {total_photos?.toLocaleString()}
            </NavLink>

            <NavLink
               to={`/user/likes/${username}`}
               activeClassName="active"
               className="link"
            >
               <FontAwesomeIcon icon={faHeart} className="profileIcon" />
               Likes: {total_likes?.toLocaleString()}
            </NavLink>

            <NavLink
               to={`/user/collections/${username}`}
               activeClassName="active"
               className="link"
            >
               <FontAwesomeIcon icon={faLayerGroup} className="profileIcon" />
               Collections: {total_collections?.toLocaleString()}
            </NavLink>
         </List>
         {messageModal && (
            <MessageModal
               profileImage={profile_image}
               name={first_name}
               purpose={modalContent.message.purpose}
               placeholder={modalContent.message.placeholder}
               closeModal={closeMessageModal}
            />
         )}
         {hireModal && (
            <MessageModal
               profileImage={profile_image}
               name={first_name}
               purpose={modalContent.hire.purpose}
               placeholder={modalContent.hire.placeholder}
               closeModal={closeHireModal}
            />
         )}
      </Container>
   );
};

export default ProfileOverview;
