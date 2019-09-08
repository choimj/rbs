import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "./style";
import googleLogo from "../../Images/google/logo.png";

const Login = props => {
  const {
    handleChangeInput,
    // handleChangeCheckbox,
    // handleMoveUrl,
    handleLogin,
    googleOauthLogin
  } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.container}>
        <Typography component="div" className={classes.loginBox}>
          <div className={classes.title}>Login</div>
          <form noValidate autoComplete="off">
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
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <TextField
                id="outlined-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                name="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                onChange={handleChangeInput}
              />
            </div>
          </form>
          {/* <div>
            <label>
              <Checkbox
                // checked={state.checkedB}
                onChange={handleChangeCheckbox}
                value="checkedA"
                color="primary"
                inputProps={{
                  "aria-label": "secondary checkbox"
                }}
              />
              Remember me
            </label>
          </div> */}
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Grid>
              {/* <Grid item xs={6}>
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.button}
                  onClick={e => handleMoveUrl(e, "/join")}
                >
                  Register
                </Button>
              </Grid> */}
            </Grid>
            <Grid item xs={12}>
              <div className={classes.googleButtonArea}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.googleButton}
                  onClick={googleOauthLogin}
                >
                  <img
                    src={googleLogo}
                    style={{
                      width: "30px",
                      height: "30px"
                    }}
                    alt="googleLogo"
                  />
                  Google Login
                </Button>
              </div>
            </Grid>
          </div>
          <div>
            {/* <p>
              <Link
                href="/findPassword"
                color="inherit"
                className={classes.link}
              >
                Forgot your password?
              </Link>
            </p> */}
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default Login;
