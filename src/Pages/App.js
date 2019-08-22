import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
// import Book from "./Book";
import BookingInitContainer from "../Containers/BookingInitContainer";
import BookStep from "./Booking/BookStep";
import Management from "./Management";
// import ManagementContainer from "../Containers/ManagementContainer";


const App = (props) => {
  return (
    <>    
      <BrowserRouter>
        <Header compInfo={props.compInfo}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/book" component={BookingInitContainer}/>
          <Route path="/bookstep" component={BookStep}/>
          {/* <Route path="/Manage" component={ManagementContainer}/> */}
          <Route path="/manage" component={Management}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
