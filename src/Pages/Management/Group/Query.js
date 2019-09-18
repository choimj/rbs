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
  query getGroup($id: ID) {
    group(id: $id) {
      id
      name
      groupParticipants {
        userId {
          value: id
          label: name
        }
      }
    }
  }
`;

export const GET_USERS = gql`
  query getUsers {
    users {
      value: id
      label: name
    }
  }
`;

export const CREATE_GROUP = gql`
  mutation createGroup($data: GroupCreateInput!) {
    createGroup(data: $data) {
      id
      name
    }
  }
`;

// export const CREATE_GROUP_PARTICIPANT = gql`
//   mutation
// `;
