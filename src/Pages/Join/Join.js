import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
// import { Mutation } from "react-apollo";

const CREATE_USER = gql`
  mutation createUser($email: String!, $name: String!, $password: String!) {
    createUser(email: $email, name: $name, password: $password)
  }
`;

const Join = props => {
  const {
    email,
    name,
    password,
    // handleSubmit,
    handleChangeInput,
    handleJoinCompleted
  } = props;

  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    joinWrap: {},
    joinBox: {
      border: "1px solid #3f51b5",
      height: "89vh",
      padding: "30px"
    },
    textField: {
      width: "100%"
    },
    button: {
      width: "100%",
      fontSize: "20px"
    }
  }));

  const classes = useStyles();

  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: data => {
      handleJoinCompleted(data);
    }
  });
  const opts = {
    variables: { email, name, password }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.joinWrap}>
        <Typography component="div" className={classes.joinBox}>
          <form className={classes.container} autoComplete="off">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="email"
                  label="Email"
                  defaultValue={email}
                  className={classes.textField}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="name"
                  label="UserName"
                  defaultValue=""
                  className={classes.textField}
                  margin="normal"
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="password"
                  label="Password"
                  defaultValue=""
                  className={classes.textField}
                  margin="normal"
                  type="password"
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  className={classes.button}
                  color="primary"
                  onClick={() => createUser(opts)}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default Join;
