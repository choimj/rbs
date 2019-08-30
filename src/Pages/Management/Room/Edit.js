import React from "react";
import * as Utils from "../../../Utils/Date";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: "66vh"
  },
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

const Edit = () => {
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

  const handleDelete = () => {
    alert("You clicked the delete icon.");
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
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
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
          />
          <TextField
            id="standard-number"
            label="수용 인원"
            required
            value={values.minPerson}
            onChange={handleChange("minPerson")}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
          <TextField
            id="standard-name"
            label="위치"
            value={values.name}
            fullWidth
            required
            onChange={handleChange("roomTitle")}
            margin="normal"
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <Typography variant="subtitle1" gutterBottom>
        참석자
      </Typography>
      <div className={classes.root}>
        <TextField
          id="standard-name"
          label="회의실 명"
          value={values.name}
          fullWidth
          required
          onChange={handleChange("roomTitle")}
          margin="normal"
        />
        <Chip
          icon={<FaceIcon />}
          label="최민지"
          onDelete={handleDelete}
          className={classes.chip}
          color="primary"
        />
      </div>
    </form>
  );
};

export default Edit;
