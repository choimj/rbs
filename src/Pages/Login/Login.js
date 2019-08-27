import React from "react";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

// import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
// import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  textField: {
    margin: "auto",
    width: "100%"
  },
  menu: {
    width: 200
  },
  loginBox: {
    backgroundColor: "#cfe8fc",
    height: "60vh",
    padding: "30px",
    "& > div": {
      // marginBottom: "20px"
      paddingBottom: "2%"
    },

    "& > div label": {
      color: "#3f51b5",
      lineHeight: "15px"
    }
  },
  title: {
    width: "100%",
    position: "relative",
    fontSize: "34px",
    fontWeight: "bold",
    marginTop: "16px",
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
  button: {
    width: "100%",
    fontSize: "20px",
    lineHeight: "44px"
  },
  link: {
    fontSize: "13px",
    color: "gray"
  }
}));

const Login = props => {
  const { history } = props;
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: ""
  });

  const handleChangeInput = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const [state, setState] = React.useState({
    checkedA: true
  });

  const handleChangeCheckbox = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.container}>
        <Typography component="div" className={classes.loginBox}>
          <div className={classes.title}>Login</div>
          <div>
            <TextField
              id="outlined-email-input"
              label="Email"
              className={classes.textField}
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              onChange={handleChangeInput("email")}
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <label>
              <Checkbox
                checked={state.checkedB}
                onChange={handleChangeCheckbox("checkedA")}
                value="checkedA"
                color="primary"
                inputProps={{
                  "aria-label": "secondary checkbox"
                }}
              />{" "}
              Remember me
            </label>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.button}
                  onClick={() => {
                    history.push("/join");
                  }}
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </div>
          <div>
            <p>
              <Link
                href="/findPassword"
                color="inherit"
                className={classes.link}
              >
                Forgot your password?
              </Link>
            </p>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default withRouter(Login);
