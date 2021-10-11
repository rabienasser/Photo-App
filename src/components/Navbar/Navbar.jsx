import React, { useState } from "react";
import homePage from "assets/home-page.png";
import search from "assets/search.png";
import camera from "assets/camera.png";
import theme from "assets/theme.png";
import favorites from "assets/favorites.png";
import { Link, NavLink, withRouter, useLocation } from "react-router-dom";
import { NavbarIcon } from "components";
import {
   StyledNav,
   NavContent,
   NavIcons,
   HomeIcon,
   SearchInput,
} from "./Navbar.styles";

const Navbar = (props) => {
   const [inputValue, setInputValue] = useState("");
   const { pathname } = useLocation();
   const splitPathname = pathname.split("/");

   const handleChange = (e) => {
      setInputValue(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (splitPathname[2] === "users") {
         props.history.push(`/search/users/${inputValue}`);
         setInputValue("");
      } else if (splitPathname[2] === "collections") {
         props.history.push(`/search/collections/${inputValue}`);
         setInputValue("");
      } else {
         props.history.push(`/search/${inputValue}`);
         setInputValue("");
      }
   };

   return (
      <StyledNav>
         <NavContent>
            <SearchInput>
               <Link to="/">
                  <HomeIcon className="homeIcon" src={homePage} alt="Home" />
               </Link>
               <form onSubmit={(e) => handleSubmit(e, inputValue)}>
                  <img src={search} alt="Search" />
                  <input
                     type="text"
                     placeholder="Search..."
                     onChange={handleChange}
                     value={inputValue}
                  />
               </form>
            </SearchInput>
            <NavIcons>
               <NavLink to="/" exact activeClassName="photos">
                  <NavbarIcon photo={camera} text="Photos" />
               </NavLink>
               <NavLink to="/favorites" activeClassName="favorites">
                  <NavbarIcon photo={favorites} text="Saved" />
               </NavLink>
               <NavbarIcon photo={theme} text="Theme" />
            </NavIcons>
         </NavContent>
      </StyledNav>
   );
};

export default withRouter(Navbar);
