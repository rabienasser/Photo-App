import React from "react";
import homePage from "../../assets/home-page.png";
import search from "../../assets/search.png";
import camera from "../../assets/camera.png";
import favorites from "../../assets/favorites.png";
import theme from "../../assets/theme.png";
import NavbarIcon from "../NavbarIcon/NavbarIcon";
import { StyledNav, NavIcons, HomeIcon, SearchInput } from "./Navbar.styles";
import { Link, NavLink, withRouter } from "react-router-dom";

class Navbar extends React.Component {
   state = {
      inputValue: "",
   };

   handleChange = (e) => {
      this.setState({ inputValue: e.target.value });
   };

   handleSubmit = (e, inputValue) => {
      e.preventDefault();

      this.props.history.push(`/search/${inputValue}`);
      this.setState({ inputValue: "" });
   };

   render() {
      const { inputValue } = this.state;
      return (
         <StyledNav>
            <SearchInput>
               <Link to="/">
                  <HomeIcon className="homeIcon" src={homePage} alt="Home" />
               </Link>
               <form onSubmit={(e) => this.handleSubmit(e, inputValue)}>
                  <img src={search} alt="Search" />
                  <input
                     type="text"
                     placeholder="Search..."
                     onChange={this.handleChange}
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
   }
}

export default withRouter(Navbar);
