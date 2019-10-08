import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ListContents from "./ListContents";
import EditContainer from "./EditContainer";
import TitleBar from "../../../Components/TitleBar";
import DialogBox from "../../../Components/DialogBox";
import PropTypes from "prop-types";

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
    minHeight: "73vh"
  },
  tooltip: {
    width: "46px",
    height: "46px",
    boxShadow: "none"
  }
}));

const CategoryPresenter = ({
  category,
  setCategory,
  editValues,
  setEditValues,
  handleCategoryEditClick,
  handleCategoryDeleteClick,
  handleConfirm,
  dialogOpen,
  handleGroupClick
}) => {
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
                  <ListContents
                    category={category}
                    handleCategoryEditClick={handleCategoryEditClick}
                    handleGroupClick={handleGroupClick}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Paper className={classes.paper}>
                  <EditContainer
                    category={category}
                    editValues={editValues}
                    setEditValues={setEditValues}
                    setCategory={setCategory}
                    handleCategoryDeleteClick={handleCategoryDeleteClick}
                  />
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Typography>
      </Container>
      <DialogBox
        open={dialogOpen}
        title="정말로 삭제하시겠습니까?"
        text="삭제 시 복구가 불가합니다."
        handleConfirm={handleConfirm}
      />
    </React.Fragment>
  );
};

CategoryPresenter.propTypes = {
  category: PropTypes.object.isRequired,
  editValues: PropTypes.object.isRequired,
  dialogOpen: PropTypes.bool.isRequired
};

export default CategoryPresenter;
