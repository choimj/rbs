import React from "react";
import * as Utils from "../../../Utils/Date";
import BookLeft from "./Form";
import BookRight from "./Nav";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#cfe8fc",
    padding: "10px 30px",
    marginBottom: "10px"
  },
  submitButton: {
    width: "100%",
    fontSize: "20px",
    marginTop: "20px",
    marginBottom: "20px"
  }
}));

const Step = props => {
  const classes = useStyles();
  const curDate = new Date();
  const [selectedDate, setSelectedDate] = React.useState({
    date: curDate,
    startTime: curDate,
    endTime: Utils.getAfterDate("h", new Date(), 1)
  });

  const handleDateChange = date => {
    const afterHoursTime = new Date(date);
    setSelectedDate({
      date: date,
      startTime: date,
      endTime: Utils.getAfterDate("h", afterHoursTime, 1)
    });
  };

  const [values, setValues] = React.useState({
    title: "",
    dept: "",
    name: "",
    participants: []
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <form noValidate autoComplete="off">
                <BookLeft
                  selectedDate={selectedDate}
                  values={values}
                  setSelectedDate={setSelectedDate}
                  handleDateChange={handleDateChange}
                  handleChange={handleChange}
                />
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.submitButton}
                  // onClick={handleLogin}
                >
                  Submit
                </Button>
              </form>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.container}>
              <BookRight selectedDate={selectedDate} />
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default Step;
