import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputChip from "../../../Components/InputChip";
// import { useMutation } from "@apollo/react-hooks";
// import { CREATE_GROUP } from "./Query";

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: "66vh",
    position: "relative"
  },
  title: {
    "& > label": {
      color: "#3f51b5",
      fontSize: "1rem"
    }
  },
  particiBox: {
    marginTop: "16px",
    color: "#3f51b5",
    fontSize: "12px",
    textAlign: "left",
    "& > div": {
      paddingTop: "10px"
    }
  },
  button: {
    width: "100%",
    fontSize: "20px",
    position: "absolute",
    bottom: "0",
    left: "0"
  }
}));

const Edit = ({
  groupItem,
  users,
  editValues,
  setEditValues,
  selectParticipantOption,
  setSelectParticipantOption,
  handleGroupNameChange,
  handleGroupSubmit
}) => {
  const classes = useStyles();
  // const { id, name, groupParticipants } = groupItem;
  useMemo(() => {
    if (groupItem.name) {
      setEditValues({
        groupId: groupItem.id,
        groupName: groupItem.name,
        participants: groupItem.groupParticipants
      });
    }
  }, [groupItem, setEditValues]);

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        name="groupName"
        label="그룹 명"
        value={editValues.groupName}
        fullWidth
        required
        onChange={handleGroupNameChange}
        margin="normal"
        InputLabelProps={{ shrink: true }}
        className={classes.title}
      />
      <div className={classes.particiBox}>
        <label>그룹 멤버*</label>
      </div>
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleGroupSubmit}
        color="primary"
      >
        Submit
      </Button>
      <InputChip
        participants={editValues.participants}
        users={users}
        selectParticipantOption={selectParticipantOption}
        setSelectParticipantOption={setSelectParticipantOption}
      />
    </form>
  );
};

export default Edit;
