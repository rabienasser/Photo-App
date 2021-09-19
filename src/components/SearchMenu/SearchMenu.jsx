import React from "react";
import { Link, useLocation } from "react-router-dom";
import { StyledMenu } from "./SearchMenu.style";

const SearchMenu = (props) => {
   const location = useLocation();
   const { pathname } = location;
   const splitLocation = pathname.split("/");

   const searchTerm = splitLocation.slice(-1)[0];
   return (
      <>
         <h2>
            Search Results for{" "}
            <em style={{ color: "#6958f2" }}>{searchTerm}</em>
         </h2>
         <p>{props.total} results found</p>
         <StyledMenu>
            <div>
               <Link to={`/search/users/${searchTerm}`}>
                  <li className={splitLocation[2] === "users" ? "active" : ""}>
                     Users
                  </li>
               </Link>
            </div>
            <div>
               <Link to={`/search/${searchTerm}`}>
                  <li
                     className={
                        splitLocation[2] === `${searchTerm}` ? "active" : ""
                     }
                  >
                     Photos
                  </li>
               </Link>
            </div>
            <div>
               <Link to={`/search/collections/${searchTerm}`}>
                  <li
                     className={
                        splitLocation[2] === "collections" ? "active" : ""
                     }
                  >
                     Collections
                  </li>
               </Link>
            </div>
         </StyledMenu>
      </>
   );
};

export default SearchMenu;
