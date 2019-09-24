import ApolloClient from "apollo-boost";
import dotenv from "dotenv";
dotenv.config(); //.env 파일 로드

const client = new ApolloClient({
  uri: process.env.REACT_APP_HEROKU_URL
});

export default client;
