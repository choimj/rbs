import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  title: {
    "& > label": {
      color: "#3f51b5",
      fontSize: "13px"
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "100%"
  }
}));

const ComposeFieldBox = () => {
  const classes = useStyles();
  // const [values, setValues] = React.useState({
  //   // name: 'Cat in the Hat',
  // });
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Paper className={classes.paper}>
        <div>기본 구성 필드</div>
        <TextField
          id="standard-read-only-input"
          label="회의 제목"
          defaultValue=""
          fullWidth
          className={classes.title}
          margin="normal"
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          id="standard-read-only-input"
          label="부 서"
          defaultValue=""
          fullWidth
          className={classes.title}
          margin="normal"
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          id="standard-read-only-input"
          label="이 름"
          defaultValue=""
          fullWidth
          className={classes.title}
          margin="normal"
          InputProps={{
            readOnly: true
          }}
        />
      </Paper>
      <Paper className={classes.paper}>
        <div>추가 구성 필드</div>
      </Paper>
    </form>
  );
};

export default ComposeFieldBox;
