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
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import PropTypes from "prop-types";

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
    minHeight: "70vh"
  },
  tooltip: {
    width: "46px",
    height: "46px",
    boxShadow: "none"
  }
}));

const GroupPresenter = ({
  groupId,
  groupItem,
  groupList,
  setGroupList,
  users,
  editValues,
  setEditValues,
  selectParticipantOption,
  setSelectParticipantOption,
  handleGroupEditClick,
  handleGroupNameChange,
  handleGroupSubmit,
  handleSelectChange,
  handleAddGroup,
  handleGroupDeleteClick
}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" className={classes.container}>
          <div className={classes.root}>
            <Grid container spacing={0}>
              <TitleBar title="그룹 관리" />
              <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>
                  <Tooltip
                    title="그룹 등록"
                    aria-label="add"
                    className={classes.tooltip}
                    onClick={handleAddGroup}
                  >
                    <Fab color="primary" className={classes.fab}>
                      <GroupAddIcon />
                    </Fab>
                  </Tooltip>
                  <ListContents
                    groupId={groupId}
                    groupList={groupList}
                    setGroupList={setGroupList}
                    handleGroupEditClick={handleGroupEditClick}
                    handleGroupDeleteClick={handleGroupDeleteClick}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Paper className={classes.paper}>
                  <Edit
                    groupId={groupId}
                    groupItem={groupItem}
                    users={users}
                    editValues={editValues}
                    setEditValues={setEditValues}
                    selectParticipantOption={selectParticipantOption}
                    setSelectParticipantOption={setSelectParticipantOption}
                    handleGroupNameChange={handleGroupNameChange}
                    handleGroupSubmit={handleGroupSubmit}
                    handleSelectChange={handleSelectChange}
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

GroupPresenter.propTypes = {
  groupId: PropTypes.string.isRequired,
  groupItem: PropTypes.object.isRequired,
  groupList: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  editValues: PropTypes.object.isRequired,
  selectParticipantOption: PropTypes.array.isRequired
};

export default GroupPresenter;
