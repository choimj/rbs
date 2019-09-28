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
export const GET_BOOKING = gql`
  query getBooking($id: ID) {
    booking(id: $id) {
      id
      title
      date
      startTime
      endTime
      department
      name
      bookingParticipants {
        value: id
        label: name
      }
      groupId {
        id
        name
      }
      categoryId {
        id
        name
        categoryParticipants {
          value: id
          label: name
        }       
      }
      createUser {
        id
        name
      }
    }
  }
`;

