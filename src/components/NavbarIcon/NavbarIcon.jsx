import React from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "store/theme/actions";
import { StyledNavbarIcon, Icon } from "./NavbarIcon.styles";

const NavbarIcon = ({ text, photo, theme }) => {
   const dispatch = useDispatch();
   return (
      <StyledNavbarIcon onClick={() => theme && dispatch(changeTheme())}>
         <Icon src={photo} alt={text} />
         <p>{text}</p>
      </StyledNavbarIcon>
   );
};

export default NavbarIcon;
