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
import InputChip from "../../../Components/InputChip";

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
          fullWidth
          required
          className={classes.title}
          value={values.title}
          onChange={handleChange("title")}
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id="dept"
          label="부서명"
          fullWidth
          required
          className={classes.title}
          value={values.dept}
          onChange={handleChange("dept")}
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id="name"
          label="이름"
          fullWidth
          required
          className={classes.title}
          value={values.name}
          onChange={handleChange("name")}
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <div className={classes.particiBox}>
          <label>참석자*</label>
          <InputChip />
        </div>
      </Paper>
    </React.Fragment>
  );
};

export default Form;
