import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: "66vh",
    padding: "20px",
    textAlign: "left",
    justifyContent: "left",
    position: "relative"
  },
  title: {
    "& > label": {
      color: "#3f51b5",
      fontSize: "1rem"
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

const EditPresenter = ({
  editValues,
  handleInputChange,
  handleTimeChange,
  handleRoomSubmit
}) => {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        label="회의실 명"
        fullWidth
        required
        name="roomName"
        value={editValues.roomName}
        onChange={handleInputChange}
        margin="normal"
        InputLabelProps={{ shrink: true }}
        className={classes.title}
      />
      <MuiPickersUtilsProvider
        utils={DateFnsUtils}
        style={{ justifyContent: "left" }}
      >
        <KeyboardTimePicker
          margin="normal"
          label="운영 시작 시간"
          required
          name="roomStartTime"
          value={editValues.roomStartTime}
          onChange={date => handleTimeChange(date, "roomStartTime")}
          KeyboardButtonProps={{
            "aria-label": "change time"
          }}
          className={classes.title}
        />
        <KeyboardTimePicker
          margin="normal"
          label="운영 종료 시간"
          required
          name="roomEndTime"
          value={editValues.roomEndTime}
          onChange={date => handleTimeChange(date, "roomEndTime")}
          KeyboardButtonProps={{
            "aria-label": "change time"
          }}
          className={classes.title}
        />
      </MuiPickersUtilsProvider>
      <TextField
        label="수용 인원"
        required
        name="minPerson"
        value={editValues.minPerson}
        onChange={handleInputChange}
        type="number"
        InputLabelProps={{
          shrink: true
        }}
        margin="normal"
        className={classes.title}
      />
      <TextField
        label="위치"
        fullWidth
        required
        name="location"
        value={editValues.location}
        onChange={handleInputChange}
        margin="normal"
        InputLabelProps={{ shrink: true }}
        className={classes.title}
      />
      <Button
        variant="contained"
        className={classes.button}
        color="primary"
        onClick={handleRoomSubmit}
      >
        Submit
      </Button>
    </form>
  );
};

export default EditPresenter;
