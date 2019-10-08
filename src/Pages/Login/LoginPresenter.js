import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "./style";
import googleLogo from "../../Images/google/logo.png";
import PropTypes from "prop-types";

const LoginPresenter = ({
  email,
  password,
  handleChangeInput,
  googleOauthLogin,
  loginFormCheck
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.container}>
        <Typography component="div" className={classes.loginBox}>
          <div className={classes.title}>Login</div>
          <form noValidate autoComplete="on">
            <div>
              <TextField
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                value={email}
                autoComplete="email"
                margin="normal"
                variant="outlined"
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <TextField
                label="Password"
                className={classes.textField}
                type="password"
                name="password"
                value={password}
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                onChange={handleChangeInput}
              />
            </div>
          </form>

          <div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={loginFormCheck}
                >
                  Login
                </Button>
              </Grid>
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
        </Typography>
      </Container>
    </React.Fragment>
  );
};

LoginPresenter.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default LoginPresenter;
