import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import GroupIcon from "@material-ui/icons/Group";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useQuery } from "@apollo/react-hooks";
import { GET_GROUPS } from "./Query";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
    maxHeight: "60vh",
    position: "relative",
    overflow: "auto"
  },
  avatar: {
    minWidth: "50px"
  },
  listItem: {
    paddingRight: "70px"
  },
  listItemText: {
    // cursor: "pointer"
  },
  button: {
    padding: "7px"
  }
}));

const ListContents = ({
  groupId,
  groupList,
  setGroupList,
  handleGroupEditClick,
  handleGroupDeleteClick
}) => {
  const { refetch } = useQuery(GET_GROUPS, {
    onCompleted: data => {
      if (data) {
        setGroupList(data);
      }
    }
  });
  useMemo(() => {
    if (groupId) {
      refetch();
    }
  }, [groupId, refetch]);

  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <div className={classes.root}>
        <List dense={true}>
          {groupList.groups ? (
            groupList.groups.map(item => (
              <ListItem className={classes.listItem} key={item.id}>
                <ListItemAvatar className={classes.avatar}>
                  <Avatar>
                    <GroupIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  className={classes.listItemText}
                  primary={item.name}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    className={classes.button}
                    onClick={e => handleGroupEditClick(e, item.id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    className={classes.button}
                    onClick={e => handleGroupDeleteClick(e, item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))
          ) : (
            <ListItem className={classes.listItem}>No Data</ListItem>
          )}
        </List>
      </div>
    </Grid>
  );
};

export default ListContents;
