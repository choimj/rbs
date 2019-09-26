import gql from "graphql-tag";

export const GET_CATEGORIES = gql`
  query getCategories {
    groups {
      id
      name
      categories {
        id
        name
      }
    }
  }
`;
export const GET_CATEGORY = gql`
  query getCategory($id: ID) {
    category(id: $id) {
      id
      name
      categoryParticipants {
        userId {
          value: id
          label: name
        }
      }
    }
  }
`;
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
export const CREATE_CATEGORY = gql`
  mutation createCategory($data: CategoryCreateInput!) {
    createCategory(data: $data) {
      id
      name
    }
  }
`;
export const CREATE_CATEGORY_PARTICIPANT = gql`
  mutation createCategoryParticipant($data: CategoryParticipantCreateInput!) {
    createCategoryParticipant(data: $data) {
      id
      name
    }
  }
`;

export const UPDATE_CATEGORY = gql`
  mutation updateCategory($data: CategoryUpdateInput!) {
    updateCategory(data: $data) {
      id
      name
      categoryParticipants {
        userId {
          value: id
          label: name
        }
      }
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation deleteCategory($id: ID!) {
    deleteCategory(id: $id) {
      id
      name
    }
  }
`;
