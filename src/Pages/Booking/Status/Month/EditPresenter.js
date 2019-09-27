import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputChip from "../../../../Components/InputChip";
import TitleBar from "../../../../Components/TitleBar";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2)
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
  }
}));

const EditPresenter = ({
  editValues,
  selectedDate,
  handleDateChange,
  handleChange
}) => {
  const classes = useStyles();
  console.log(editValues);
  return (
    <React.Fragment>
      <TitleBar title="시간 선택" />
      <Paper className={classes.paper}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="yyyy/MM/dd"
              margin="normal"
              label="일자"
              value={selectedDate.date}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              label="시작시간"
              value={selectedDate.startTime}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time"
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              label="종료시간"
              value={selectedDate.endTime}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time"
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </Paper>
      <TitleBar title="예약폼 작성" />
      <Paper className={classes.paper}>
        <TextField
          label="회의제목"
          fullWidth
          required
          className={classes.title}
          name="bookingTitle"
          value={editValues.bookingTitle}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="부서명"
          fullWidth
          required
          className={classes.title}
          name="bookingDepartment"
          value={editValues.bookingDepartment}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="이름"
          fullWidth
          required
          className={classes.title}
          name="bookingName"
          value={editValues.bookingName}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <div className={classes.particiBox}>
          <label>참석자*</label>
          {/* <InputChip /> */}
        </div>
      </Paper>
    </React.Fragment>
  );
};

export default EditPresenter;
