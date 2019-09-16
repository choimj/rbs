import gql from "graphql-tag";

export const GET_GROUPS = gql`
  query getGroups {
    groups {
      id
      name
    }
  }
`;

export const GET_GROUP = gql`
  query getGroup($id: String) {
    group(id: $id) {
      name
      groupParticipants {
        id
        name
      }
    }
  }
`;
