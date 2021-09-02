import React from "react";
import styled from "styled-components";
import { pageAnimation } from "animation";
import { motion } from "framer-motion";

class SearchResult extends React.Component {
   render() {
      return (
         <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
         >
            <Result>{this.props.match.params.searchId}</Result>
         </motion.div>
      );
   }
}

const Result = styled.h1`
   text-align: center;
`;

export default SearchResult;
