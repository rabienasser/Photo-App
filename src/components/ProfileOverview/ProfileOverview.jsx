import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { AddUserBtn } from "components";
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
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "GlobalStyle";
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
                              className="icon hire"
                           />
                           Available for hire
                        </li>
                     )}

                     {location && (
                        <Link to={`/search/${location}`}>
                           <li className="link">
                              <FontAwesomeIcon
                                 icon={faMapPin}
                                 className="icon"
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
                           <FontAwesomeIcon icon={faLink} className="icon" />
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
                                    className="link"
                                 >
                                    <FontAwesomeIcon
                                       icon={faGlobeAmericas}
                                       className="icon"
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
                                    className="link"
                                 >
                                    <FontAwesomeIcon
                                       icon={["fab", "instagram"]}
                                       className="icon"
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
                                    className="link"
                                 >
                                    <FontAwesomeIcon
                                       icon={["fab", "twitter"]}
                                       className="icon"
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
               <FontAwesomeIcon icon={faImage} className="icon" />
               Photos: {total_photos?.toLocaleString()}
            </NavLink>

            <NavLink
               to={`/user/likes/${username}`}
               activeClassName="active"
               className="link"
            >
               <FontAwesomeIcon icon={faHeart} className="icon" />
               Likes: {total_likes?.toLocaleString()}
            </NavLink>

            <NavLink
               to={`/user/collections/${username}`}
               activeClassName="active"
               className="link"
            >
               <FontAwesomeIcon icon={faLayerGroup} className="icon" />
               Collections: {total_collections?.toLocaleString()}
            </NavLink>
         </List>
      </Container>
   );
};

export default ProfileOverview;
