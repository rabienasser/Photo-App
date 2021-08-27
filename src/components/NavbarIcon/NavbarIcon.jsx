import React from "react";
import { StyledNavbarIcon, Icon } from "./NavbarIcon.styles";

const NavbarIcon = ({ text, photo }) => {
   return (
      <StyledNavbarIcon>
         <Icon src={photo} alt={text} />
         <p>{text}</p>
      </StyledNavbarIcon>
   );
};

export default NavbarIcon;
