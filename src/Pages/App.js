import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
// import Book from "./Book";
import BookingInitContainer from "../Containers/BookingInitContainer";
import BookStep from "./Booking/BookStep";
import Management from "./Management";


const App = (props) => {
  return (
    <>    
      <BrowserRouter>
        <Header compInfo={props.compInfo}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Book" component={BookingInitContainer}/>
          <Route path="/BookStep" component={BookStep}/>
          <Route path="/Manage" component={Management}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
