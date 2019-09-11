import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import HeaderContainer from "../Pages/Header/HeaderContainer";
import AuthContainer from "../Containers/AuthContainer";
import Logout from "./Logout";
import NotFound from "./NotFound";
import Booking from "./Booking";
import Management from "./Management";
import Home from "./Landing/Home";
import Main from "./Main";
import Landing from "../Pages/Landing";
import JoinContainer from "../Pages/Join/JoinContainer";
import CallbackContainer from "../Containers/CallbackContainer";

const App = props => {
  return (
    <>
      <BrowserRouter>
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/login" component={AuthContainer} />
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
