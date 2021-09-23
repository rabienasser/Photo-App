import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { StyledButton } from "./AddUserBtn.style";

const AddUserBtn = () => {
   const [userAdded, setUserAdded] = useState(false);

   return (
      <StyledButton onClick={() => setUserAdded(!userAdded)} className="button">
         <FontAwesomeIcon
            icon={userAdded ? faUserCheck : faUserPlus}
            className={userAdded ? "user-added" : "add-user"}
         />
      </StyledButton>
   );
};

export default AddUserBtn;
