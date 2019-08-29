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

const useStyles = makeStyles(theme => ({
  title: {
    width: "100%",
    position: "relative",
    fontSize: "26px",
    fontWeight: "bold",
    marginTop: "16px",
    marginBottom: "16px",
    lineHeight: "46px",
    color: "#3f51b5",

    "&:before": {
      content: "''",
      width: "5px",
      height: "100%",
      position: "absolute",
      top: "0",
      left: "-30px",
      background: "#3f51b5"
    }
  },
  paper: {
    padding: theme.spacing(2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));
const BookLeft = props => {
  const classes = useStyles();
  const { selectedDate, handleDateChange, handleChange, values } = props;

  return (
    <React.Fragment>
      <div className={classes.title}>시간 선택</div>
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
      <div className={classes.title}>예약</div>
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

export default BookLeft;
