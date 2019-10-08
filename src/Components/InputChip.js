import React, { useMemo } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import PropTypes from "prop-types";

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
    if (participants) {
      participants.forEach(element => {
        participantTmp = [...participantTmp, element.userId];
      });
      setSelectParticipantOption(participantTmp);
    }
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

InputChip.propTypes = {
  participants: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  selectParticipantOption: PropTypes.array.isRequired
};

export default InputChip;
