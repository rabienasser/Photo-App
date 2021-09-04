import React, { useState } from "react";
import homePage from "assets/home-page.png";
import search from "assets/search.png";
import camera from "assets/camera.png";
import favorites from "assets/favorites.png";
import theme from "assets/theme.png";
import { Link, NavLink, withRouter } from "react-router-dom";
import { NavbarIcon } from "components";
import { StyledNav, NavIcons, HomeIcon, SearchInput } from "./Navbar.styles";

const Navbar = (props) => {
   const [inputValue, setInputValue] = useState("");

   const handleChange = (e) => {
      setInputValue(e.target.value);
   };

   const handleSubmit = (e, inputValue) => {
      e.preventDefault();

      props.history.push(`/search/${inputValue}`);
      setInputValue("");
   };

   return (
      <StyledNav>
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
      </StyledNav>
   );
};

export default withRouter(Navbar);
