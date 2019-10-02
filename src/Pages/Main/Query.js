import gql from "graphql-tag";

export const GET_USER_BOOKINGS = gql`
  query getUserBookings($id: ID) {
    user(id: $id) {
      name
      prevBookings {
        id
        date
      }
      nextBookings {
        id
        title
        bookingParticipants {
          userId {
            name
          }
        }
        date
        startTime
        endTime
        department
        name
      }
      allBookings {
        id
      }
    }
  }
`;
