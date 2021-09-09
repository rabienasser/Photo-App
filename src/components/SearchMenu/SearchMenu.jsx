import React from "react";
import { Link } from "react-router-dom";
import { StyledMenu } from "./SearchMenu.style";
import { useSelector } from "react-redux";

const SearchMenu = ({ searchTerm }) => {
   const total = useSelector((state) => state.searchResults.total);
   const active = useSelector((state) => state.searchResults.active);
   return (
      <>
         <h2>
            Search Results for{" "}
            <em style={{ color: "#6958f2" }}>{searchTerm}</em>
         </h2>
         <p>{total} results found</p>
         <StyledMenu>
            <div>
               <Link to="/user/:userId" exact>
                  <li>Users</li>
               </Link>
            </div>
            <div>
               <Link to={`/search/${searchTerm}`} exact>
                  <li className={`${active && "active"}`}>Photos</li>
               </Link>
            </div>
            <div>
               <Link to="/user/collections/:userId" exact>
                  <li>Collections</li>
               </Link>
            </div>
         </StyledMenu>
      </>
   );
};

export default SearchMenu;
