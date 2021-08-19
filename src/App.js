import React from "react";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
   render() {
      return (
         <div className="App">
            <Switch>
               <Route path="/" exact />
               <Route path="/favorites" />
               <Route path="/search/searchId" />
               <Route path="/photo/:photoId" />
               <Route path="/user/:userId" exact />
               <Route path="/user/:userId/collections" />
               <Route path="/user/:userId/users" />
            </Switch>
         </div>
      );
   }
}

export default App;
