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

export const CREATE_GROUP_PARTICIPANT = gql`
  mutation createGroupParticipant($data: GroupParticipantCreateInput!) {
    createGroupParticipant(data: $data) {
      id
      name
    }
  }
`;

export const UPDATE_GROUP = gql`
  mutation updateGroup($data: GroupUpdateInput!) {
    updateGroup(data: $data) {
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

export const DELETE_GROUP = gql`
  mutation deleteGroup($data: GroupWhereUniqueInput!) {
    deleteGroup(data: $data) {
      id
      name
    }
  }
`;
