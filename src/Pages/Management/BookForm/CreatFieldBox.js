import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    // margin: theme.spacing(3)
    width: "100%"
  },
  group: {
    // margin: theme.spacing(1, 0)
  },
  subTitle: {
    fontSize: "12px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "100%"
  },
  button: {
    // width: "100%",
    // fontSize: "20px",
    // position: "absolute",
    // bottom: "0",
    // left: "0"
  }
}));

const CreateFieldBox = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");

  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">필드 선택(* 수정불가)</FormLabel>
        <Paper className={classes.paper}>
          <RadioGroup
            aria-label="selectField"
            name="selectField"
            className={classes.group}
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="input" control={<Radio />} label="단문" />
            <FormControlLabel
              value="textarea"
              control={<Radio />}
              label="장문"
            />
            {/* <FormControlLabel
              value="radio"
              control={<Radio />}
              label="단일선택"
            />
            <FormControlLabel
              value="checkbox"
              control={<Radio />}
              label="다중선택"
            /> */}
          </RadioGroup>
          <p className={classes.subTitle}>
            (* 필드 추가는 최대 3개까지 가능합니다.)
          </p>
        </Paper>
        <Paper className={classes.paper}>
          <TextField
            id="standard-read-only-input"
            label="타이틀"
            fullWidth
            defaultValue=""
            className={classes.title}
            margin="normal"
          />



          <Button
            variant="contained"
            className={classes.button}
            type="submit"
            color="primary"
          >
            추가
          </Button>
        </Paper>
      </FormControl>
    </div>
  );
};

export default CreateFieldBox;
