import React, { useState } from "react";
import EditPresenter from "./EditPresenter";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  GET_BOOKING,
  UPDATE_BOOKING,
  CREATE_BOOKING,
  CREATE_BOOKING_PARTICIPANT,
  GET_GROUPS,
  GET_GROUP,
  GET_CATEGORY,
  DELETE_BOOKING
} from "./Query";
import * as dateUtils from "../../../../Utils/Date";
import PropTypes from "prop-types";

const EditContainer = ({ editValues, setEditValues, setBooking }) => {
  const { groupId, categoryId, bookingId } = editValues;
  const [users, setUsers] = useState([]);
  const [selectParticipantOption, setSelectParticipantOption] = useState([]);
  const [groups, setGroups] = useState([]);
  const [categories, setCategories] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  // 회의실별 운영시간 state
  const [roomTime, setRoomTime] = useState(["회의실을 선택하세요"]);
  // 예약 시작, 종료 시간 state
  const [bookTime, setBookTime] = useState({
    startTime: "",
    endTime: ""
  });

  useQuery(GET_GROUPS, {
    onCompleted: data => {
      setGroups(data.groups);
    }
  });
  // 그룹 selectBox 클릭 시
  useQuery(GET_GROUP, {
    variables: {
      id: groupId
    },
    onCompleted: data => {
      if (data.group) {
        setCategories(data.group.categories);
      }
    }
  });
  // 카테고리 selectBox 클릭 시
  useQuery(GET_CATEGORY, {
    variables: {
      id: categoryId
    },
    onCompleted: data => {
      if (data.category) {
        const { categoryParticipants, rooms } = data.category;
        let tmpParticipants = [];
        if (categoryParticipants.length > 0) {
          categoryParticipants.forEach(element => {
            tmpParticipants = [...tmpParticipants, element.userId];
          });
        }
        setUsers(tmpParticipants);
        setRooms(rooms);
        if (rooms.length > 0) {
          let tmpRooms = [];
          rooms.forEach(element => {
            tmpRooms = [
              ...tmpRooms,
              {
                roomId: element.id,
                startTime: element.startTime,
                endTime: element.endTime
              }
            ];
          });
          setRoomTime(tmpRooms);
        }
      }
    }
  });
  // 캘린더의 예약 이벤트 클릭 시
  useQuery(GET_BOOKING, {
    variables: {
      id: bookingId
    },
    onCompleted: data => {
      if (data) {
        if (data.booking) {
          const {
            groupId,
            categoryId,
            id,
            title,
            date,
            startTime,
            endTime,
            department,
            name,
            bookingParticipants,
            createUser,
            roomId
          } = data.booking;

          let tmpParticipants = [];
          if (categoryId.categoryParticipants.length > 0) {
            categoryId.categoryParticipants.forEach(element => {
              tmpParticipants = [...tmpParticipants, element.userId];
            });
          }
          setUsers(tmpParticipants);
          const tmpDateArr = date.split("-");
          const stArr = startTime.split(":");
          const etArr = endTime.split(":");
          const startDate = new Date(
            tmpDateArr[0],
            tmpDateArr[1] - 1,
            tmpDateArr[2],
            stArr[0],
            stArr[1]
          );
          const endDate = new Date(
            tmpDateArr[0],
            tmpDateArr[1] - 1,
            tmpDateArr[2],
            etArr[0],
            etArr[1]
          );
          setEditValues(oldValues => ({
            ...oldValues,
            groupId: groupId.id,
            categoryId: categoryId.id,
            roomId: roomId.id,
            bookingId: id,
            bookingTitle: title,
            bookingDate: date,
            bookingStartTime: startDate,
            bookingEndTime: endDate,
            bookingDepartment: department,
            bookingName: name,
            participants: bookingParticipants,
            bookingCreateUser: createUser
          }));

          setBookTime(oldValues => ({
            ...oldValues,
            startTime: roomId.startTime,
            endTime: roomId.endTime
          }));
        }
      }
    },
    onError: err => {
      console.log("GET_GROUP error !!", err);
    }
  });

  const [createBooking] = useMutation(CREATE_BOOKING, {
    onCompleted: data => {
      // console.log(data);
      const {
        booking: { id, title },
        flag
      } = data.createBooking;

      if (flag) {
        alert(title + " 생성되었습니다.");
        setEditValues(oldValues => ({
          ...oldValues,
          bookingId: id
        }));

        setBooking(data.createBooking);

        selectParticipantOption.forEach(element => {
          const opt = {
            variables: {
              data: {
                bookingId: id,
                userId: element.value,
                name: element.label
              }
            }
          };
          createBookingParticipant(opt);
        });
      }
    }
  });
  const [createBookingParticipant] = useMutation(CREATE_BOOKING_PARTICIPANT, {
    onCompleted: data => {},
    onError: err => {
      alert("참석자 등록에 실패했습니다. 다시 시도해주세요.");
      console.log("createGroupParticipant error!! ", err);
    }
  });
  const [updateBooking] = useMutation(UPDATE_BOOKING, {
    onCompleted: data => {
      alert("수정되었습니다.");
    }
  });
  const [deleteBooking] = useMutation(DELETE_BOOKING, {
    onCompleted: data => {
      alert("삭제되었습니다.");
      setBooking({});
      setBookTime({});
      setInputEdit();
    }
  });

  const setInputEdit = () => {
    const curDate = new Date();
    const afterHourDate = dateUtils.getAfterDate("h", new Date(), 1);
    setEditValues(oldValues => ({
      ...oldValues,
      groupId: "",
      groupName: "",
      categoryId: "",
      categoryName: "",
      roomId: "",
      roomName: "",
      bookingId: "",
      bookingTitle: "",
      bookingDate: curDate,
      bookingStartTime: curDate,
      bookingEndTime: afterHourDate,
      bookingDepartment: "",
      bookingName: "",
      participants: [],
      bookingCreateUser: ""
    }));
  };

  const handleChange = e => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
  };

  const handleTimeChange = (selDate, name) => {
    if (selDate.toTimeString() !== "Invalid Date") {
      const { startTime, endTime } = bookTime;
      const { bookingStartTime, bookingEndTime } = editValues;
      if (startTime && startTime !== "") {
        const day = dateUtils.getDateString(selDate, "-").split("-");
        const stArr = startTime.split(":");
        const etArr = endTime.split(":");
        const startDate = new Date(
          day[0],
          day[1] - 1,
          day[2],
          stArr[0],
          stArr[1],
          0
        );
        const endDate = new Date(
          day[0],
          day[1] - 1,
          day[2],
          etArr[0],
          etArr[1],
          0
        );
        if (startDate <= selDate && endDate >= selDate) {
          // console.log(bookingStartTime);
          if (name === "bookingEndTime") {
            if (bookingStartTime > selDate) {
              alert("시작시간은 종료시간보다 클 수 없습니다.");
              return false;
            }
          } else if (name === "bookingStartTime") {
            if (bookingEndTime < selDate) {
              alert("시작시간은 종료시간보다 클 수 없습니다.");
              return false;
            }
          }
          setEditValues(oldValues => ({
            ...oldValues,
            [name]: selDate
          }));
        } else {
          alert("운영시간 내로 선택해주세요");
        }
      } else {
        alert("회의실을 먼저 선택하세요");
      }
    }
  };

  const handleSelectChange = selectedOption => {
    setSelectParticipantOption(selectedOption);
  };

  const handleBookingNewClick = e => {
    setInputEdit();
    setUsers([]);
    setRooms([]);
    setCategories([]);
    setBookTime({});
  };
  const handleBookingSubmit = async e => {
    const {
      bookingId,
      bookingDate,
      bookingStartTime,
      bookingEndTime,
      bookingTitle,
      bookingDepartment,
      bookingName,
      groupId,
      categoryId,
      roomId
    } = editValues;
    const opts = {};
    let tmpParticipants = [];

    if (selectParticipantOption) {
      selectParticipantOption.forEach(element => {
        tmpParticipants = [
          ...tmpParticipants,
          {
            bookingId: bookingId,
            userId: element.value,
            name: element.label
          }
        ];
      });
    }
    const tmpDate = new Date(bookingDate);
    const year = tmpDate.getFullYear();
    const month =
      (Number(tmpDate.getMonth()) < 9 ? "0" : "") + (tmpDate.getMonth() + 1);
    const date =
      (Number(tmpDate.getDate()) < 10 ? "0" : "") + tmpDate.getDate();
    const startTime = new Date(bookingStartTime).toTimeString().substring(0, 5);
    const endTime = new Date(bookingEndTime).toTimeString().substring(0, 5);
    opts.variables = {
      data: {
        date: year + "-" + month + "-" + date,
        startTime: startTime,
        endTime: endTime,
        title: bookingTitle,
        department: bookingDepartment,
        name: bookingName
      }
    };

    if (bookingId && bookingId !== "") {
      //수정
      opts.variables.data.id = bookingId;
      opts.variables.data.bookingParticipants = tmpParticipants;
      await updateBooking(opts);
    } else {
      // 생성

      if (!groupId || groupId === "") {
        alert("그룹을 선택하세요.");
      } else if (!categoryId || categoryId === "") {
        alert("카테고리를 선택하세요.");
      } else if (!roomId || roomId === "") {
        alert("회의실을 선택하세요.");
      } else if (!bookingTitle || bookingTitle === "") {
        alert("회의제목을 입력하세요.");
      } else if (!bookingDepartment || bookingDepartment === "") {
        alert("부서명을 입력하세요.");
      } else if (!bookingName || bookingName === "") {
        alert("이름을 입력하세요.");
      } else {
        try {
          const userId = localStorage.getItem("userId");
          opts.variables.data.groupId = groupId;
          opts.variables.data.categoryId = categoryId;
          opts.variables.data.roomId = roomId;
          opts.variables.data.userId = userId;

          opts.variables = {
            ...opts.variables,
            filter: {
              fRoomId: {
                contains: roomId
              },
              fDate: {
                contains: year + "-" + month + "-" + date
              },
              fStartTime: { time: startTime },
              fEndTime: { time: endTime }
            }
          };
          const { data } = await createBooking(opts);
          const { flag } = data.createBooking;
          if (!flag) {
            alert("예상치 못한 에러발생!!");
          }
        } catch (e) {
          alert(e.message);
        }
      }
    }
  };

  const handleBookingDeleteClick = e => {
    setDialogOpen(true);
  };

  const handleGroupChange = e => {
    if (e.target.value === "") {
      setCategories([]);
    }
    setEditValues(oldValues => ({
      ...oldValues,
      [e.target.name]: e.target.value
    }));
    setUsers([]);
    setRooms([]);
    setBookTime({});
  };

  const handleRoomChange = e => {
    setEditValues(oldValues => ({
      ...oldValues,
      [e.target.name]: e.target.value
    }));
    const selelctRoomTime = roomTime.find(
      element => element.roomId === e.target.value
    );
    if (selelctRoomTime) {
      setBookTime(oldValues => ({
        ...oldValues,
        startTime: selelctRoomTime.startTime,
        endTime: selelctRoomTime.endTime
      }));
    }
  };

  const handleConfirm = op => {
    if (op === "yes") {
      setDialogOpen(false);
      const opts = {
        variables: {
          id: bookingId
        }
      };
      deleteBooking(opts);
    } else if (op === "no") {
      setDialogOpen(false);
    }
  };

  return (
    <EditPresenter
      users={users}
      editValues={editValues}
      handleChange={handleChange}
      handleTimeChange={handleTimeChange}
      selectParticipantOption={selectParticipantOption}
      setSelectParticipantOption={setSelectParticipantOption}
      handleSelectChange={handleSelectChange}
      handleBookingSubmit={handleBookingSubmit}
      handleBookingDeleteClick={handleBookingDeleteClick}
      handleBookingNewClick={handleBookingNewClick}
      groups={groups}
      handleGroupChange={handleGroupChange}
      categories={categories}
      rooms={rooms}
      dialogOpen={dialogOpen}
      handleConfirm={handleConfirm}
      handleRoomChange={handleRoomChange}
      bookTime={bookTime}
    />
  );
};

EditContainer.propTypes = {
  editValues: PropTypes.object.isRequired
};

export default EditContainer;
