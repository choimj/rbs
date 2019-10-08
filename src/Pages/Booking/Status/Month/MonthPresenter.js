import React from "react";
import BigCalendar from "./BigCalendar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TitleBar from "../../../../Components/TitleBar";
import Paper from "@material-ui/core/Paper";
import EditContainer from "./EditContainer";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#cfe8fc",
    padding: "10px 30px"
  },
  root: {
    flexGrow: 1,
    position: "relative",
    marginBottom: "15px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight: "75vh",
    fontSize: "13px"
  }
}));

const MonthPresenter = ({
  booking,
  setBooking,
  state,
  setState,
  editValues,
  setEditValues,
  handleSelect,
  handleClickEvent
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" className={classes.container}>
          <div className={classes.root}>
            <Grid container spacing={0}>
              <TitleBar title="예약 현황" />
              <Grid item xs={12} sm={9} lg={10}>
                <Paper className={classes.paper}>
                  <BigCalendar
                    booking={booking}
                    state={state}
                    setState={setState}
                    handleSelect={handleSelect}
                    handleClickEvent={handleClickEvent}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3} lg={2}>
                <Paper className={classes.paper}>
                  <EditContainer
                    setBooking={setBooking}
                    editValues={editValues}
                    setEditValues={setEditValues}
                  />
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default MonthPresenter;
