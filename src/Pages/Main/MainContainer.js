import React, { useState, useEffect } from "react";
import MainPresenter from "./MainPresenter";
import { useQuery } from "react-apollo";
import {
  GET_USER_BOOKINGS,
  GET_ROOMS_GROUPBY,
  GET_TODAY_BOOKINGS
} from "./Query";

const MainContainer = () => {
  const [userId, setUserId] = useState("");
  const [bookingCount, setBookingCount] = useState({
    prev: 0,
    next: 0,
    all: 0
  });
  const [nextBookings, setNextBookings] = useState([]);
  const [bookingGroupByData, setBookingGroupByData] = useState([
    ["Task", "Hours per Day"]
  ]);
  const today = new Date();
  const year = today.getFullYear();
  const month =
    today.getMonth() < 9 ? "0" + (today.getMonth() + 1) : today.getMonth() + 1;
  const date = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
  const [todayBookings, setTodayBookings] = useState([]);

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
  }, [userId]);

  useQuery(GET_ROOMS_GROUPBY, {
    onCompleted: data => {
      const tmpData = [["Task", "Hours per Day"]];
      if (data.rooms) {
        data.rooms.forEach(element => {
          tmpData.push([element.name, element.bookingCount.count]);
        });
        setBookingGroupByData(tmpData);
      }
    }
  });

  useQuery(GET_USER_BOOKINGS, {
    variables: {
      id: userId
    },
    onCompleted: data => {
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

  useQuery(GET_TODAY_BOOKINGS, {
    variables: {
      filter: {
        fDate: { contains: year + "-" + month + "-" + date }
      }
    },
    onCompleted: data => {
      if (data.todayBookings) {
        setTodayBookings(data.todayBookings);
      }
    }
  });
  return (
    <MainPresenter
      bookingCount={bookingCount}
      nextBookings={nextBookings}
      bookingGroupByData={bookingGroupByData}
      todayBookings={todayBookings}
    />
  );
};

export default MainContainer;
