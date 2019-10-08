import gql from "graphql-tag";

export const CREATE_USER = gql`
  mutation createUser($email: String!, $name: String!, $password: String!) {
    createUser(email: $email, name: $name, password: $password)
  }
`;
