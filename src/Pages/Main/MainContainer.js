import React, { useState } from "react";
import MainPresenter from "./MainPresenter";
import { useQuery } from "react-apollo";
import { GET_USER_BOOKINGS } from "./Query";

const MainContainer = () => {
  const userId = localStorage.getItem("userId");
  const [bookingCount, setBookingCount] = useState({
    prev: 0,
    next: 0,
    all: 0
  });
  const [nextBookings, setNextBookings] = useState({});

  useQuery(GET_USER_BOOKINGS, {
    variables: {
      id: userId
    },
    onCompleted: data => {
      // console.log(data);
      const { allBookings, nextBookings, prevBookings } = data.user;
      setBookingCount(oldValue => ({
        ...oldValue,
        prev: prevBookings.length,
        next: nextBookings.length,
        all: allBookings.length
      }));

      if (nextBookings) {
        setNextBookings(nextBookings);
      }
    }
  });

  return (
    <MainPresenter bookingCount={bookingCount} nextBookings={nextBookings} />
  );
};

export default MainContainer;
