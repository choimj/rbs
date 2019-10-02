import gql from "graphql-tag";

export const GET_ROOMS = gql`
  query getRooms {
    groups {
      id
      name
      categories {
        id
        name
        rooms {
          id
          name
        }
      }
    }
  }
`;
export const GET_ROOM = gql`
  query getRoom($id: ID) {
    room(id: $id) {
      id
      name
      startTime
      endTime
      minPerson
      location
      groupId {
        id
        name
      }
      categoryId {
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
      groupId {
        id
        name
      }
    }
  }
`;
export const CREATE_ROOM = gql`
  mutation createRoom($data: RoomCreateInput!) {
    createRoom(data: $data) {
      id
      name
    }
  }
`;

export const UPDATE_ROOM = gql`
  mutation updateRoom($data: RoomUpdateInput!) {
    updateRoom(data: $data) {
      id
      name
      startTime
      endTime
      minPerson
      location
    }
  }
`;

export const DELETE_ROOM = gql`
  mutation deleteRoom($id: ID!) {
    deleteRoom(id: $id) {
      id
    }
  }
`;
