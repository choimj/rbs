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

// import { Mutation, Query } from "react-apollo";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const COMPARE_PASSWORD = gql`
  mutation comparePassword($email: String!, $password: String!) {
    comparePassword(email: $email, password: $password) {
      id
      email
      message
    }
  }
`;

const Login = props => {
  const {
    email,
    password,
    handleChangeInput,
    // handleLogin,
    handleComparePassword,
    googleOauthLogin
  } = props;
  const classes = useStyles();

  const [comparePassword] = useMutation(COMPARE_PASSWORD, {
    onCompleted: data => {
      handleComparePassword(data);
    },
    onError: err => {
      console.log(err);
    }
  });

  const opts = {
    variables: { email, password }
  };

  const loginFormCheck = (email, password, opts) => {
    // const { email, password } = this.state;
    if (email === "") {
      alert("Email을 입력하세요.");
      return false;
    } else if (password === "") {
      alert("Password를 입력하세요.");
      return false;
    }
    comparePassword(opts);
  };
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

          <div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={() => loginFormCheck(email, password, opts)}
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

export default Login;
