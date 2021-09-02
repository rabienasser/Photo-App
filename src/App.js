import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, SearchResult } from "pages";
import { Navbar } from "components";
import { GlobalStyle } from "GlobalStyle";
import { AnimatePresence } from "framer-motion";

class App extends React.Component {
   render() {
      return (
         <div className="App">
            <GlobalStyle />
            <Navbar />
            <AnimatePresence exitBeforeEnter>
               <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/favorites" />
                  <Route path="/search/:searchId" component={SearchResult} />
                  <Route path="/photo/:photoId" />
                  <Route path="/user/:userId" exact />
                  <Route path="/user/collections/:userId" />
                  <Route path="/user/users/:userId" />
               </Switch>
            </AnimatePresence>
         </div>
      );
   }
}

export default App;
