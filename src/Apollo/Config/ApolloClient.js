import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  // uri: "http://localhost:4000"
  uri: "https://heroku-rbs-backend.herokuapp.com"
});

export default client;
