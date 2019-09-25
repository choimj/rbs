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

const EditPresenter = () => {
  const classes = useStyles();
  const curDate = new Date();
  const [selectedDate, setSelectedDate] = React.useState({
    startTime: curDate,
    endTime: curDate
  });

  const handleStartTimeChange = date => {
    setSelectedDate({ ...selectedDate, startTime: date });
  };
  const handleEndTimeChange = date => {
    setSelectedDate({ ...selectedDate, endTime: date });
  };

  const [values, setValues] = React.useState({
    roomTitle: "",
    startTime: "",
    endTime: "",
    minPerson: 0,
    location: "",
    participants: []
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-name"
        label="회의실 명"
        value={values.name}
        fullWidth
        required
        onChange={handleChange("roomTitle")}
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
          id="startTime"
          label="운영 시작 시간"
          required
          value={selectedDate.startTime}
          onChange={handleStartTimeChange}
          KeyboardButtonProps={{
            "aria-label": "change time"
          }}
          className={classes.title}
        />
        <KeyboardTimePicker
          margin="normal"
          id="endTime"
          label="운영 종료 시간"
          required
          value={selectedDate.endTime}
          onChange={handleEndTimeChange}
          KeyboardButtonProps={{
            "aria-label": "change time"
          }}
          className={classes.title}
        />
      </MuiPickersUtilsProvider>
      <TextField
        id="standard-number"
        label="수용 인원"
        required
        value={values.minPerson}
        onChange={handleChange("minPerson")}
        type="number"
        InputLabelProps={{
          shrink: true
        }}
        margin="normal"
        className={classes.title}
      />
      <TextField
        id="standard-name"
        label="위치"
        value={values.name}
        fullWidth
        required
        onChange={handleChange("roomTitle")}
        margin="normal"
        InputLabelProps={{ shrink: true }}
        className={classes.title}
      />
      <Button
        variant="contained"
        className={classes.button}
        type="submit"
        color="primary"
      >
        Submit
      </Button>
    </form>
  );
};

export default EditPresenter;
