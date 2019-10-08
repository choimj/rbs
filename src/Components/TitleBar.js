import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: "relative"
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  title: {
    width: "100%",
    position: "relative",
    fontSize: "26px",
    fontWeight: "bold",
    marginTop: "16px",
    marginBottom: "16px",
    lineHeight: "46px",
    color: "#3f51b5",

    "&:before": {
      content: "''",
      width: "5px",
      height: "100%",
      position: "absolute",
      top: "0",
      left: "-30px",
      background: "#3f51b5"
    }
  }
}));

const TitleBar = ({ title }) => {
  const classes = useStyles();
  return <div className={classes.title}>{title}</div>;
};

TitleBar.propTypes = {
  title: PropTypes.string.isRequired
};

export default TitleBar;
