import gql from "graphql-tag";

export const GET_ROOMS = gql`
  query getRooms {
    rooms {
      id
      name
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

// export const DELETE_ROOM = gql`
//   mutation deleteRoom($data: RoomWhereUniqueInput!) {
//     deleteRoom(data: $data) {
//       id
//     }
//   }
// `;

export const DELETE_ROOM = gql`
  mutation deleteRoom($id: ID!) {
    deleteRoom(id: $id) {
      id
    }
  }
`;
