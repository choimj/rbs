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
        roomId {
          name
        }
      }
      allBookings {
        id
        roomId {
          id
          name
        }
      }
    }
  }
`;

export const GET_TODAY_BOOKINGS = gql`
  query getTodayBookings($filter: BookingFilterInput) {
    todayBookings(filter: $filter) {
      title
      roomId {
        name
      }
      startTime
      endTime
      department
    }
  }
`;

export const GET_ROOMS_GROUPBY = gql`
  query getRoomsGroupBy {
    rooms {
      id
      name
      bookingCount {
        count
      }
    }
  }
`;
