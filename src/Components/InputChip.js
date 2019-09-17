import React, { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const InputChip = ({ participants, users }) => {
  const [selectOption, setSelectOption] = useState([]);
  const handleSelectChange = selectedOption => {
    setSelectOption(selectedOption);
  };

  useEffect(() => {
    let participantTmp = [];
    participants.forEach(element => {
      participantTmp = [...participantTmp, element.userId];
    });
    setSelectOption(participantTmp);
  }, [participants]);

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      value={selectOption}
      isMulti
      options={users}
      onChange={handleSelectChange}
    />
  );
};

export default InputChip;
