import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: "66vh",
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
  group: {
    fontSize: "12px",
    textAlign: "left",
    "& > div": {
      margin: "0"
    },
    "& > label": {
      verticalAlign: "middle",
      display: "inline-block",
      padding: "6px 0 7px",
      marginRight: "10px"
    },
    "& > div input": {
      color: "#999",
      fontSize: "10px"
    }
  },
  button: {
    width: "100%",
    fontSize: "20px"
  },
  arrowLabel: {
    margin: "0 10px"
  },
  buttonArea: {
    position: "absolute",
    bottom: "0"
  }
}));

const EditPresenter = ({
  editValues,
  handleInputChange,
  handleTimeChange,
  handleRoomSubmit,
  handleRoomDeleteClick
}) => {
  const classes = useStyles();
  const disabled = editValues.roomId !== "" ? false : true;
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div className={classes.group}>
        <label>그룹</label>
        <TextField
          name="groupName"
          value={editValues.groupName}
          margin="normal"
          InputProps={{
            readOnly: true
          }}
        />
        <label className={classes.arrowLabel}>></label>
        <label>카테고리</label>
        <TextField
          name="categoryName"
          value={editValues.categoryName}
          margin="normal"
          InputProps={{
            readOnly: true
          }}
        />
      </div>
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
        name="location"
        value={editValues.location}
        onChange={handleInputChange}
        margin="normal"
        InputLabelProps={{ shrink: true }}
        className={classes.title}
      />
      <Grid container spacing={0} className={classes.buttonArea}>
        <Grid item xs={6} sm={6}>
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            onClick={handleRoomSubmit}
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Button
            disabled={disabled}
            variant="contained"
            className={classes.button}
            color="secondary"
            onClick={handleRoomDeleteClick}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditPresenter;
