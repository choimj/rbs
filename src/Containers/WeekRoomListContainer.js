import React from "react";
import TimeBlock from "../Pages/Booking/Status/TimeBlock";
import styled from "styled-components";
import * as Utils from "../Utils/Date";

const Root = styled.div`
  clear: both;
  text-align: left;
  padding-top: 5px;

  & > ul > li > span:first-child {
    display: block;
    font-size: 15px;
    width: 15%;
    text-align: center;
    float: left;
    padding: 8px 0;
  }
  & > ul > li > span:nth-child(2) {
    border: 1px solid #cfd3dc;
    display: block;
    width: 80%;
    height: 100%;
    border-radius: 20px / 20px;
    float: left;
  }
`;
const WeekSpan = styled.span`
  background-color: ${props =>
    props.istoday === 1 ? "rgb(251, 247, 209)" : ""};
`;
const DayColor = styled.span`
  display: block;
  border-radius: 20px / 20px;
  background-color: ${props => {
    switch (props.dayofweek) {
      case 0:
      case 6:
        return "#ffffff";
      default:
        return "#1C90FB";
    }
  }};
  color: ${props => {
    switch (props.dayofweek) {
      case 0:
        return "#A81515";
      case 6:
        return "blue";
      default:
        return "#ffffff";
    }
  }};
  border: ${props => {
    switch (props.dayofweek) {
      case 0:
      case 6:
        return "1px solid #1C90FB";
      default:
        return "none";
    }
  }};
  font-size: 15px;
  width: 15%;
  text-align: center;
  float: left;
  padding: 8px 0;
`;

class WeekRoomListContainer extends React.Component {
  // roomCode, thisWeek 가지고 데이터 가져오기
  // query
  // 각 회의실의 일자에 예약된 내용이 있는가
  /**
   * select *
   * from bookingTable
   * where roomCode="r1"
   * and (bookDate >= 2019-08-18 and bookDate <= 2019-08-24)
   * order by bookDate, startTime
   */
  bookingListGlobal = {
    r1: [
      // {bookDate: "2019-08-19", bookTitle: "Title1", bookDept: "UI/UX Core", bookName: "홍길동", startHour: 9, startMinute: 0, endHour: 10, endMinute: 0},
      {
        bookDate: "2019-08-20",
        bookTitle: "Title2",
        bookDept: "Cell6",
        bookName: "최민지",
        startHour: 13,
        startMinute: 0,
        endHour: 15,
        endMinute: 0
      },
      {
        bookDate: "2019-08-20",
        bookTitle: "Title3",
        bookDept: "경영관리",
        bookName: "홍길동",
        startHour: 16,
        startMinute: 0,
        endHour: 16,
        endMinute: 30
      }
    ]
  };
  thisWeek = [];
  bookingList = [];

  createTag = props => {
    const resultTag = [];
    const { openTime, closeTime, roomCode } = props;

    this.thisWeek = Utils.getWeek();
    this.bookingList = this.bookingListGlobal[roomCode];

    this.thisWeek.map((tItem, i) => {
      const thisWeekBookingList = [];
      if (this.bookingList) {
        this.bookingList.map((bItem, i) => {
          if (Utils.isSameDate(tItem.day, bItem.bookDate)) {
            thisWeekBookingList.push(bItem);
          }
          return thisWeekBookingList;
        });
      }

      return resultTag.push(
        <Root key={i}>
          <ul>
            <li>
              <DayColor dayofweek={tItem.dayOfWeek}>{tItem.day}</DayColor>
              <WeekSpan istoday={tItem.isToday}>
                <TimeBlock
                  openTime={openTime}
                  closeTime={closeTime}
                  day={tItem.day}
                  bookingList={thisWeekBookingList}
                />
              </WeekSpan>
            </li>
          </ul>
        </Root>
      );
    });

    // resultTag.push(<TimeBlock openTime={openTime} closeTime={closeTime}/> )
    // 일자에 해당되는 예약이 있는 경우에만 비어있지 않은 배열이 넘어와야함
    return resultTag;
  };
  render() {
    return this.createTag(this.props);
  }
}

export default WeekRoomListContainer;
