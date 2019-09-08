import React from "react";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";
import client from "./Apollo/Config/ApolloClient";
import GlobalStyles from "./Styles/GlobalStyles";
import App from "./Pages/App";
import store from "./Store";

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <>
          <GlobalStyles />
          <App />
        </>
      </Provider>
    </ApolloProvider>
  );
};

export default Root;
