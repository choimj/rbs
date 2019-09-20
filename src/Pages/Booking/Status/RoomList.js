import React from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import WeekRoomList from "./WeekRoomList";
import * as Utils from "../../../Utils/Date";

const useStyles = makeStyles(theme => ({
  button: {
    margin: "0",
    padding: "0",
    fontWeight: "normal",
    fontSize: "12px",
    color: "#ffffff"
  },
  alignRightGrid: {
    textAlign: "right"
  }
}));

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "#3f51b5",
    color: "#ffffff",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiExpansionPanelDetails);

const RoomList = ({ compRoomList }) => {
  const thisMonth = Utils.getMonth();
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {compRoomList.map((item, i) => (
        <ExpansionPanel
          square
          expanded={expanded === "panel" + i}
          onChange={handleChange("panel" + i)}
          key={i}
        >
          <ExpansionPanelSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Grid container spacing={0}>
              <Grid item xs={12} sm={8}>
                <Typography>{item.roomTitle}</Typography>
              </Grid>
              <Grid item xs={12} sm={4} className={classes.alignRightGrid}>
                <Button className={classes.button}>회의실 자세히보기</Button>
              </Grid>
            </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Typography>{thisMonth}월</Typography>
                <WeekRoomList
                  openTime={item.roomOpenTime}
                  closeTime={item.roomCloseTime}
                  roomCode={item.roomCode}
                />
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
};

export default RoomList;
