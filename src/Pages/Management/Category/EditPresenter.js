import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputChip from "../../../Components/InputChip";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: "66vh",
    position: "relative"
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
    width: "100%",
    fontSize: "20px"
  },
  group: {
    color: "#3f51b5",
    fontSize: "12px",
    textAlign: "left",
    "& > div": {
      margin: "0",
      width: "90%"
    },
    "& > label": {
      verticalAlign: "middle",
      marginRight: "20px",
      display: "inline-block",
      padding: "6px 0 7px"
    },
    "& > div input": {
      width: "80%",
      color: "#999"
    },
    marginBottom: "50px"
  },
  buttonArea: {
    position: "absolute",
    bottom: "0"
  }
}));

const EditPresenter = ({
  users,
  editValues,
  handleCategorySubmit,
  handleChange,
  selectParticipantOption,
  setSelectParticipantOption,
  handleSelectChange,
  handleCategoryDeleteClick
}) => {
  const classes = useStyles();
  const disabled = editValues.categoryId !== "" ? false : true;

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div className={classes.group}>
        <label>그룹</label>
        <TextField
          name="groupName"
          value={editValues.groupName}
          onChange={handleChange}
          margin="normal"
          InputProps={{
            readOnly: true
          }}
        />
      </div>
      <TextField
        name="categoryName"
        label="카테고리 명"
        value={editValues.categoryName}
        fullWidth
        required
        onChange={handleChange}
        margin="normal"
        InputLabelProps={{ shrink: true }}
        className={classes.title}
      />
      <div className={classes.particiBox}>
        <label>카테고리 멤버*</label>
      </div>
      <InputChip
        participants={editValues.participants}
        users={users}
        selectParticipantOption={selectParticipantOption}
        setSelectParticipantOption={setSelectParticipantOption}
        handleSelectChange={handleSelectChange}
      />
      <Grid container spacing={0} className={classes.buttonArea}>
        <Grid item xs={6} sm={6}>
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            onClick={handleCategorySubmit}
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
            onClick={handleCategoryDeleteClick}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditPresenter;
