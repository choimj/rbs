import React from "react";
import CategoryComboBox from "./CategoryComboBox";
import RoomList from "./RoomList";
import RoomInfo from "./RoomInfo";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  }
}));

const Status = props => {
  const { compCategoryList } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <CategoryComboBox compCategoryList={compCategoryList} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <RoomList compRoomList={props.compRoomList} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <RoomInfo />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Status;
