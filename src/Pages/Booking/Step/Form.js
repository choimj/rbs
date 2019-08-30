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
import TitleBar from "../../../Components/TitleBar";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2)
  },
  textField: {
    width: "100%",
    display: "flex"
  }
}));
const Form = props => {
  const classes = useStyles();
  const { selectedDate, handleDateChange, handleChange, values } = props;

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
              id="date"
              label="일자"
              value={selectedDate.date}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="startTime"
              label="시작시간"
              value={selectedDate.startTime}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time"
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="endTime"
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
          id="title"
          label="회의제목"
          className={classes.textField}
          value={values.title}
          onChange={handleChange("title")}
          margin="normal"
        />
        <TextField
          id="dept"
          label="부서명"
          className={classes.textField}
          value={values.dept}
          onChange={handleChange("dept")}
          margin="normal"
        />
        <TextField
          id="name"
          label="이름"
          className={classes.textField}
          value={values.name}
          onChange={handleChange("name")}
          margin="normal"
        />
        <TextField
          id="participants"
          label="참여자"
          className={classes.textField}
          value={values.participants}
          onChange={handleChange("participants")}
          margin="normal"
        />
      </Paper>
    </React.Fragment>
  );
};

export default Form;
