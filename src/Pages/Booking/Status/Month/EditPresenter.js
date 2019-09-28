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
  users,
  editValues,
  handleChange,
  handleTimeChange,
  selectParticipantOption,
  setSelectParticipantOption,
  handleSelectChange,
}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="yyyy/MM/dd"
              margin="normal"
              label="일자"
              value={editValues.bookingDate}
              name="bookingDate"
              onChange={date => handleTimeChange(date, "bookingDate")}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              label="시작시간"
              value={editValues.bookingStartTime}
              name="bookingStartTime"
              onChange={date => handleTimeChange(date, "bookingStartTime")}
              KeyboardButtonProps={{
                "aria-label": "change time"
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              label="종료시간"
              value={editValues.bookingEndTime}
              name="bookingEndTime"
              onChange={date => handleTimeChange(date, "bookingEndTime")}
              KeyboardButtonProps={{
                "aria-label": "change time"
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </Paper>
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
          <InputChip users={users} participants={editValues.participants} selectParticipantOption={selectParticipantOption}
        setSelectParticipantOption={setSelectParticipantOption}
        handleSelectChange={handleSelectChange}/>
        </div>
      </Paper>
    </React.Fragment>
  );
};

export default EditPresenter;
