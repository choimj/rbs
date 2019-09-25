import gql from "graphql-tag";

export const GET_ROOMS = gql`
  query getRooms {
    rooms {
      id
      name
      startTime
      endTime
      standardNum
      location
    }
  }
`;
