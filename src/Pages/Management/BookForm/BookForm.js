import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ComposeFieldBox from "./ComposeFieldBox";
import CreateFieldBox from "./CreatFieldBox";
import TitleBar from "../../../Components/TitleBar";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#cfe8fc",
    padding: "10px 30px"
  },
  root: {
    flexGrow: 1,
    position: "relative"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  tooltip: {
    width: "46px",
    height: "46px",
    boxShadow: "none"
  }
}));

const BookForm = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" className={classes.container}>
          <div className={classes.root}>
            <Grid container spacing={0}>
              <TitleBar title="예약폼 관리" />
              <Grid item xs={12} sm={8}>
                <Paper className={classes.paper}>
                  <ComposeFieldBox />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>
                  <CreateFieldBox />
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default BookForm;
