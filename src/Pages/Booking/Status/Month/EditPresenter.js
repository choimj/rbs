import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputChip from "../../../../Components/InputChip";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import DialogBox from "../../../../Components/DialogBox";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import * as dateUtils from "../../../../Utils/Date";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    width: "100%",
    marginBottom: "10px",
    "& > div": {
      fontSize: "13px"
    }
  },
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
  },
  button: {
    width: "100%"
  },
  buttonArea: {
    paddingTop: "20px"
  },
  newButtonArea: {
    marginBottom: "10px"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
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
  handleBookingSubmit,
  handleBookingDeleteClick,
  handleBookingNewClick,
  groups,
  handleGroupChange,
  categories,
  rooms,
  dialogOpen,
  handleConfirm,
  handleRoomChange,
  bookTime
}) => {
  const classes = useStyles();
  const curDate = new Date();
  const day = dateUtils.getDateString(curDate, "-");

  const { startTime, endTime } = bookTime;
  const {
    groupId,
    categoryId,
    roomId,
    bookingDate,
    bookingStartTime,
    bookingEndTime,
    bookingDepartment,
    bookingName,
    bookingTitle,
    participants
  } = editValues;

  const disabled =
    editValues.bookingId !== "" && day <= bookingDate ? false : true;
  const updateDisabled =
    editValues.bookingId === "" || day <= bookingDate ? false : true;

  return (
    <React.Fragment>
      <form className={classes.root} autoComplete="off">
        <Grid container className={classes.newButtonArea}>
          <Grid item xs={12} sm={12}>
            <Button
              variant="contained"
              className={classes.button}
              color="primary"
              onClick={handleBookingNewClick}
            >
              New
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12}>
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="age-label-placeholder">
                그룹
              </InputLabel>
              <Select
                value={groupId}
                onChange={handleGroupChange}
                inputProps={{
                  name: "groupId",
                  readOnly: !disabled
                }}
                displayEmpty
                className={classes.selectEmpty}
              >
                <MenuItem value="">
                  <em>선택하세요</em>
                </MenuItem>
                {groups
                  ? groups.length > 0
                    ? groups.map(item => (
                        <MenuItem value={item.id} key={item.id}>
                          {item.name}
                        </MenuItem>
                      ))
                    : ""
                  : ""}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="age-label-placeholder">
                카테고리
              </InputLabel>
              <Select
                value={categoryId}
                onChange={handleGroupChange}
                inputProps={{
                  name: "categoryId",
                  readOnly: !disabled
                }}
                displayEmpty
                className={classes.selectEmpty}
              >
                {categories ? (
                  categories.length > 0 ? (
                    categories.map((item, ci) => {
                      let tag = [];
                      if (ci === 0) {
                        tag.push(
                          <MenuItem value="">
                            <em>선택하세요</em>
                          </MenuItem>
                        );
                      }
                      tag.push(
                        <MenuItem value={item.id} key={"c" + item.id}>
                          {item.name}
                        </MenuItem>
                      );
                      return tag;
                    })
                  ) : groupId || groupId !== "" ? (
                    <MenuItem value="">
                      <em>존재하지 않습니다</em>
                    </MenuItem>
                  ) : (
                    <MenuItem value="">
                      <em>그룹을 선택하세요</em>
                    </MenuItem>
                  )
                ) : (
                  ""
                )}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="age-label-placeholder">
                회의실
              </InputLabel>
              <Select
                value={roomId}
                onChange={handleRoomChange}
                inputProps={{
                  name: "roomId",
                  readOnly: !disabled
                }}
                displayEmpty
                className={classes.selectEmpty}
              >
                {rooms ? (
                  rooms.length > 0 ? (
                    rooms.map((item, ci) => {
                      let tag = [];
                      if (ci === 0) {
                        tag.push(
                          <MenuItem value="">
                            <em>선택하세요</em>
                          </MenuItem>
                        );
                      }
                      tag.push(
                        <MenuItem value={item.id} key={"c" + item.id}>
                          {item.name}
                        </MenuItem>
                      );
                      return tag;
                    })
                  ) : categoryId || categoryId !== "" ? (
                    <MenuItem value="">
                      <em>존재하지 않습니다</em>
                    </MenuItem>
                  ) : (
                    <MenuItem value="">
                      <em>카테고리를 선택하세요</em>
                    </MenuItem>
                  )
                ) : (
                  ""
                )}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography component="div" variant="body1">
              <Box color="secondary.main" textAlign="left" fontSize="12px">
                [회의실 운영시간]
              </Box>
              <Box color="text.hint" fontSize="13px">
                {startTime && startTime !== "" && (endTime && endTime !== "")
                  ? startTime + "~" + endTime
                  : "회의실을 선택하세요"}
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </form>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            fullWidth
            disableToolbar
            variant="inline"
            margin="normal"
            label="일자"
            value={bookingDate}
            name="bookingDate"
            onChange={date => handleTimeChange(date, "bookingDate")}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
            disablePast={true}
            format="yyyy-MM-dd"
            autoOk={true}
          />
          <KeyboardTimePicker
            fullWidth
            margin="normal"
            label="시작시간"
            value={bookingStartTime}
            name="bookingStartTime"
            onChange={date => handleTimeChange(date, "bookingStartTime")}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
          />
          <KeyboardTimePicker
            fullWidth
            margin="normal"
            label="종료시간"
            value={bookingEndTime}
            name="bookingEndTime"
            onChange={date => handleTimeChange(date, "bookingEndTime")}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <TextField
        label="회의제목"
        fullWidth
        required
        className={classes.title}
        name="bookingTitle"
        value={bookingTitle}
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
        value={bookingDepartment}
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
        value={bookingName}
        onChange={handleChange}
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <div className={classes.particiBox}>
        <label>참석자</label>
        <InputChip
          users={users}
          participants={participants}
          selectParticipantOption={selectParticipantOption}
          setSelectParticipantOption={setSelectParticipantOption}
          handleSelectChange={handleSelectChange}
        />
      </div>
      <Grid container spacing={0} className={classes.buttonArea}>
        <Grid item xs={6} sm={6}>
          <Button
            disabled={updateDisabled}
            variant="contained"
            className={classes.button}
            color="primary"
            onClick={handleBookingSubmit}
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
            onClick={handleBookingDeleteClick}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
      <DialogBox
        open={dialogOpen}
        title="정말로 삭제하시겠습니까?"
        text="삭제 시 복구가 불가합니다."
        handleConfirm={handleConfirm}
      />
    </React.Fragment>
  );
};

EditPresenter.propTypes = {
  users: PropTypes.array.isRequired,
  editValues: PropTypes.object.isRequired,
  selectParticipantOption: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  rooms: PropTypes.array.isRequired,
  dialogOpen: PropTypes.bool.isRequired,
  bookTime: PropTypes.object.isRequired
};

export default EditPresenter;
