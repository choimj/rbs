import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    "& span": {
      color: "#3f51b5",
      fontWeight: "bold"
    }
  }
}));

const Nav = props => {
  const classes = useStyles();
  const { selectedDate } = props;
  return (
    <Paper className={classes.paper}>
      <Typography variant="overline" display="block" gutterBottom>
        그룹
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        더존비즈온
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        카테고리
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        부산/영남지사
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        회의실 명
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        대회의실
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        일자
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        {new Date(selectedDate.date).toLocaleDateString()}
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        시작시간
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        {new Date(selectedDate.startTime).toLocaleTimeString()}
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        종료시간
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        {new Date(selectedDate.endTime).toLocaleTimeString()}
      </Typography>
    </Paper>
  );
};

export default Nav;
