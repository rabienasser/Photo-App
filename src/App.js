import React from "react";
import Home from "./pages/Home/Home";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
   render() {
      return (
         <div className="App">
            <Switch>
               <Route path="/" component={Home} exact />
               <Route path="/favorites" />
               <Route path="/search/searchId" />
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
