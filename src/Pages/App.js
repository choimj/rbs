import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import LandingContainer from "../Containers/LandingContainer";
import Login from "./Login";
import Join from "./Join";
import NotFound from "./NotFound";

const App = props => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/join" component={Join} />
          <Route component={NotFound} />
        </Switch>
        {/* <LandingContainer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
