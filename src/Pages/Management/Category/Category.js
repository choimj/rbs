import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import ListContents from "./ListContents";
import Edit from "./Edit";
import TitleBar from "../../../Components/TitleBar";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#cfe8fc",
    padding: "10px 30px"
  },
  root: {
    flexGrow: 1,
    position: "relative",
    paddingBottom: "20px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight: "537px"
  },
  tooltip: {
    width: "46px",
    height: "46px",
    boxShadow: "none"
  }
}));

const Category = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" className={classes.container}>
          <div className={classes.root}>
            <Grid container spacing={0}>
              <TitleBar title="카테고리 관리" />
              <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>
                  <Tooltip
                    title="카테고리 등록"
                    aria-label="add"
                    className={classes.tooltip}
                  >
                    <Fab color="primary" className={classes.fab}>
                      <AddIcon />
                    </Fab>
                  </Tooltip>
                  <ListContents />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Paper className={classes.paper}>
                  <Edit />
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default Category;
