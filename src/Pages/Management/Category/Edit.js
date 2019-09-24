import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputChip from "../../../Components/InputChip";

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
    fontSize: "20px",
    position: "absolute",
    bottom: "0",
    left: "0"
  }
}));

const Edit = ({ editValues, setEditValues }) => {
  const classes = useStyles();

  const handleChange = e => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-name"
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
      <Button
        variant="contained"
        className={classes.button}
        type="submit"
        color="primary"
      >
        Submit
      </Button>
      <InputChip />
    </form>
  );
};

export default Edit;
