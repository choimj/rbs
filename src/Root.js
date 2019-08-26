import React from "react";
import { Provider } from "react-redux";
import GlobalStyles from "./Styles/GlobalStyles";
import App from './Pages/App';
// import InitContainer from "./Containers/InitContainer";
import store from "./Store";

const Root = () => {
  return (
    <Provider store={store}>
      <>
        <GlobalStyles />      
        <App/>      
      </> 
    </Provider>
  );
}

export default Root;