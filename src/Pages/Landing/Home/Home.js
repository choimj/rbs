import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Img from "../../../Images/Landing/landingBg.jpg";

const Home = () => {
  const useStyles = makeStyles(theme => ({
    container: {
      background: "url(" + `${Img}` + ") no-repeat top center",
      backgroundSize: "cover",
      backgroundColor: "#cfe8fc",
      height: "90vh"
    }
  }));
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Container maxWidth="xl" className={classes.container}>
        <Typography component="div" />
      </Container>
    </React.Fragment>
  );
};

export default Home;
