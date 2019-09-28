import React, { useState } from "react";
import EditPresenter from "./EditPresenter";
import { useQuery, useMutation } from "react-apollo";
import { GET_BOOKING } from "./Query";

const EditContainer = ({ editValues, setEditValues }) => {  
  const [users, setUsers] = useState({});
  const [selectParticipantOption, setSelectParticipantOption] = useState([]);

  useQuery(GET_BOOKING, {
    variables: {
      id: editValues.bookingId
    },
    onCompleted: data => {
     console.log(data);
     if(data) {
       if(data.booking){
        const {groupId, categoryId, id, title, date, startTime, endTime, department, name, bookingParticipants, createUser} = data.booking;
        
        const stArr = startTime.split(":");
        const etArr = endTime.split(":");
        const startDate = new Date("", "", "", stArr[0], stArr[1]);
        const endDate = new Date("", "", "", etArr[0], etArr[1]);
        setEditValues({
          ...editValues,
          groupId: groupId.id,
          categoryId: categoryId.id,
          bookingId: id,
          bookingTitle: title,
          bookingDate: date,
          bookingStartTime: startDate,
          bookingEndTime: endDate,
          bookingDepartment: department,
          bookingName: name,
          bookingParticipants: bookingParticipants,
          bookingCreateUser: createUser
         });
         setUsers(categoryId.categoryParticipants);
       }
     }     
    },
    onError: err => {
      console.log("GET_GROUP error !!", err);
    }
  });

  const handleChange = e => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
  };

  const handleTimeChange = (date, name) => {
    setEditValues({ ...editValues, [name]: date });
  };

  const handleSelectChange = selectedOption => {
    setSelectParticipantOption(selectedOption);
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
    />
  );
};

export default EditContainer;
