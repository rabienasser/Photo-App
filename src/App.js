import React from "react";
import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router-dom";
import { Home, SearchResult, Users, Collections } from "pages";
import { Navbar } from "components";
import { GlobalStyle } from "GlobalStyle";
import { AnimatePresence } from "framer-motion";

class App extends React.Component {
   render() {
      return (
         <div className="App">
            <GlobalStyle />
            <ToastContainer />
            <Navbar />
            <AnimatePresence exitBeforeEnter>
               <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/favorites" />
                  <Route
                     path="/search/:searchTerm"
                     component={SearchResult}
                     exact
                  />
                  <Route
                     path="/search/users/:searchTerm"
                     component={Users}
                     exact
                  />
                  <Route
                     path="/search/collections/:searchTerm"
                     component={Collections}
                     exact
                  />
                  <Route path="/photo/:photoId" />
                  <Route path="/user/:userId" exact />
               </Switch>
            </AnimatePresence>
         </div>
      );
   }
}

export default App;
