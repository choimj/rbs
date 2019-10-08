import gql from "graphql-tag";

export const COMPARE_PASSWORD = gql`
  mutation comparePassword($email: String!, $password: String!) {
    comparePassword(email: $email, password: $password) {
      id
      email
      message
      flag
    }
  }
`;
