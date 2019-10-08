import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import HeaderContainer from "../Pages/Header";
import LoginContainer from "../Pages/Login";
import Logout from "./Logout";
import NotFound from "./NotFound";
import Booking from "./Booking";
import Management from "./Management";
import Home from "./Landing/Home";
import MainContainer from "./Main";
import JoinContainer from "../Pages/Join/JoinContainer";
import CallbackContainer from "../Containers/CallbackContainer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/main" component={MainContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/join" component={JoinContainer} />
          <Route exact path="/callback/:path" component={CallbackContainer} />
          <Route exact path="/book/:path?" component={Booking} />
          <Route exact path="/management/:path?" component={Management} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
