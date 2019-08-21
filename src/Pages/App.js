import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
// import Book from "./Book";
import BookContainer from "../Containers/BookContainer";
import BookStep from "./Book/BookStep";
import Manage from "./Manage";


const App = (props) => {
  return (
    <>    
      <BrowserRouter>
        <Header compInfo={props.compInfo}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Book" component={BookContainer}/>
          <Route path="/BookStep" component={BookStep}/>
          <Route path="/Manage" component={Manage}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
