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
        userId {
          value: id
          label: name
        }
      }
      groupId {
        id
        name
      }
      categoryId {
        id
        name
        categoryParticipants {
          userId {
            value: id
            label: name
          }
        }
      }
      roomId {
        id
        name
        startTime
        endTime
      }
      createUser {
        id
        name
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
      rooms {
        id
        name
        startTime
        endTime
      }
    }
  }
`;

export const CREATE_BOOKING = gql`
  mutation createBooking(
    $filter: BookingFilterInput
    $data: BookingCreateInput!
  ) {
    createBooking(filter: $filter, data: $data) {
      booking {
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
        roomId {
          id
          name
        }
        createUser {
          id
          name
        }
      }
      flag
    }
  }
`;
export const CREATE_BOOKING_PARTICIPANT = gql`
  mutation createBookingParticipant($data: BookingParticipantCreateInput!) {
    createBookingParticipant(data: $data) {
      id
      name
    }
  }
`;
export const UPDATE_BOOKING = gql`
  mutation updateBooking($data: BookingUpdateInput!) {
    updateBooking(data: $data) {
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

export const DELETE_BOOKING = gql`
  mutation deleteBooking($id: ID!) {
    deleteBooking(id: $id) {
      id
    }
  }
`;
