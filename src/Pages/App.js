import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Landing/Home";
// import LandingContainer from "../Containers/LandingContainer";
import AuthContainer from "../Containers/AuthContainer";
import Join from "./Join";
import NotFound from "./NotFound";
// import BookingContainer from "./Booking/BookingContainer";
import Booking from "./Booking";

// Landing
import Landing from "./Landing";

const App = props => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={AuthContainer} />
          <Route path="/join" component={Join} />
          <Route path="/landing/:path?" component={Landing} />
          <Route path="/book/:path?" component={Booking} />
          <Route component={NotFound} />
        </Switch>
        {/* <LandingContainer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
