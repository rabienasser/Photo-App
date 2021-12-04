import React from "react";
import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router-dom";
import {
   Home,
   SearchResult,
   Users,
   Collections,
   UserProfile,
   PhotoPage,
   Collection,
   FavoritesPage,
} from "pages";
import { Navbar } from "components";
import { useSelector } from "react-redux";
import { GlobalStyle } from "GlobalStyle";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";

const lightTheme = {
   main: "#F9FAFB",
   secondary: "#121212",
   nav: "#f8f8f8",
   navIcon: "var(--greyText)",
   inputBackground: "var(--white)",
   inputBoder: "none",
   inputText: "var(--greyText)",
};

const darkTheme = {
   main: "#121212",
   secondary: "#f9fafb",
   nav: "#1f1f1f",
   navIcon: "#fafafa",
   inputBackground: "#1f1f1f",
   inputBorder: "1px solid var(--greyText)",
   inputText: "#f9fafb",
};

const App = () => {
   const { light } = useSelector((state) => state.themeReducer);
   return (
      <ThemeProvider theme={light ? lightTheme : darkTheme}>
         <div className="App">
            <GlobalStyle />
            <ToastContainer />
            <Navbar />
            <AnimatePresence exitBeforeEnter>
               <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/favorites" component={FavoritesPage} />
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
                  <Route
                     path="/search/collections/:searchTerm/:collectionId"
                     component={Collection}
                  />
                  <Route path="/photo/:photoId" component={PhotoPage} />
                  <Route path="/user/:userId" component={UserProfile} exact />
                  <Route path="/user/likes/:userId" component={UserProfile} />
                  <Route
                     path="/user/collections/:userId"
                     component={UserProfile}
                  />
               </Switch>
            </AnimatePresence>
         </div>
      </ThemeProvider>
   );
};

export default App;
