import React, { useMemo } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const InputChip = ({
  participants,
  users,
  selectParticipantOption,
  setSelectParticipantOption,
  handleSelectChange
}) => {
  useMemo(() => {
    let participantTmp = [];
    participants.forEach(element => {
      participantTmp = [...participantTmp, element.userId];
    });
    setSelectParticipantOption(participantTmp);
  }, [participants, setSelectParticipantOption]);

  return (
    <Select
      isMulti
      closeMenuOnSelect={false}
      components={animatedComponents}
      value={selectParticipantOption}
      options={users}
      onChange={handleSelectChange}
    />
  );
};

export default InputChip;
