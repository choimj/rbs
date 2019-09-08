import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000"
  // uri: "https://rbs-a7af25ba21.herokuapp.com/rbs-backend/dev"
});

export default client;
