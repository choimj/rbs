import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const Join = props => {
  const { email, name, password, handleSubmit, handelChangeInput } = props;
  // console.log(props);

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

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.joinWrap}>
        <Typography component="div" className={classes.joinBox}>
          <form
            className={classes.container}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
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
                  onChange={handelChangeInput}
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
                  onChange={handelChangeInput}
                />
              </Grid>
              <Grid item xs={12}>
                <Mutation
                  mutation={CREATE_USER}
                  variables={{ email, name, password }}
                >
                  {createUser => (
                    <Button
                      variant="outlined"
                      className={classes.button}
                      color="primary"
                      onClick={createUser}
                    >
                      Submit
                    </Button>
                  )}
                </Mutation>
              </Grid>
            </Grid>
          </form>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

const CREATE_USER = gql`
  mutation createUser($email: String!, $name: String!, $password: String!) {
    createUser(email: $email, name: $name, password: $password)
  }
`;
export default Join;
