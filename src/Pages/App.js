import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import HeaderContainer from "../Pages/Header/HeaderContainer";
import Home from "./Landing/Home";
import AuthContainer from "../Containers/AuthContainer";
import Logout from "./Logout";
import Join from "./Join";
import NotFound from "./NotFound";
import Booking from "./Booking";
import Management from "./Management";
import Main from "./Main";

const App = props => {
  return (
    <>
      <BrowserRouter>
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/main" component={Main} />
          {/* <Route exact path="/main" component={Home} /> */}
          <Route path="/login" component={AuthContainer} />
          <Route path="/logout" component={Logout} />
          <Route path="/join" component={Join} />
          <Route path="/book/:path?" component={Booking} />
          <Route path="/management/:path?" component={Management} />
          <Route component={NotFound} />
        </Switch>
        {/* <LandingContainer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
