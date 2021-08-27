import React from "react";
import styled from "styled-components";

class SearchResult extends React.Component {
   render() {
      return (
         <div>
            <Result>{this.props.match.params.searchId}</Result>
         </div>
      );
   }
}

const Result = styled.h1`
   text-align: center;
`;

export default SearchResult;
