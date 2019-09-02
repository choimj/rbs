import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Join = () => {
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

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

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
                  id="standard-required"
                  label="Email"
                  defaultValue=""
                  className={classes.textField}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="standard-required"
                  label="UserName"
                  defaultValue=""
                  className={classes.textField}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="standard-required"
                  label="Password"
                  defaultValue=""
                  className={classes.textField}
                  margin="normal"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  className={classes.button}
                  type="submit"
                  color="primary"
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
