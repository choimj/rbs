import React from "react";
import { Provider } from "react-redux";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import client from "./Apollo/Config/ApolloClient";
import GlobalStyles from "./Styles/GlobalStyles";
import App from "./Pages/App";
import store from "./Store";

const Root = () => {
  return (
    <ApolloHooksProvider client={client}>
      <Provider store={store}>
        <>
          <GlobalStyles />
          <App />
        </>
      </Provider>
    </ApolloHooksProvider>
  );
};

export default Root;
