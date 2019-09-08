import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  textField: {
    margin: "auto",
    width: "100%"
  },
  menu: {
    width: 200
  },
  loginBox: {
    backgroundColor: "#cfe8fc",
    // height: "60vh",
    padding: "30px",
    "& > form > div": {
      paddingBottom: "2%"
    },

    "& > form > div label": {
      color: "#3f51b5",
      lineHeight: "15px"
    }
  },
  title: {
    width: "100%",
    position: "relative",
    fontSize: "34px",
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
  },
  button: {
    width: "100%",
    fontSize: "20px",
    lineHeight: "44px"
  },
  link: {
    fontSize: "13px",
    color: "gray"
  },
  googleButton: {
    backgroundColor: "#DE3E33",
    "&:hover": {
      backgroundColor: "#DE3E33"
    },
    "& img": {
      marginRight: "10px"
    }
  },
  googleButtonArea: {
    textAlign: "center",
    paddingTop: "30px"
  }
}));
