import React from "react";
import Home from "./pages/Home/Home";
import SearchResult from "./pages/SearchResult/SearchResult";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";

class App extends React.Component {
   render() {
      return (
         <div className="App">
            <GlobalStyle />
            <Navbar />
            <Switch>
               <Route path="/" component={Home} exact />
               <Route path="/favorites" />
               <Route path="/search/:searchId" component={SearchResult} />
               <Route path="/photo/:photoId" />
               <Route path="/user/:userId" exact />
               <Route path="/user/collections/:userId" />
               <Route path="/user/users/:userId" />
            </Switch>
         </div>
      );
   }
}

export default App;
