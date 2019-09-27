import gql from "graphql-tag";

export const GET_BOOKINGS = gql`
  query getBookings {
    bookings {
      id
      title
      date
      startTime
      endTime
      groupId {
        id
        name
      }
      categoryId {
        id
        name
      }
      createUser {
        id
        name
      }
    }
  }
`;
