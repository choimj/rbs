import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { useQuery } from "react-apollo";
import { GET_ROOMS } from "./Query";

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
  button: {
    padding: "7px"
  }
}));

const ListContents = ({ room }) => {
  const classes = useStyles();

  const { data, refetch } = useQuery(GET_ROOMS, {
    onCompleted: data => {}
  });

  useMemo(() => {
    if (room) {
      refetch();
    }
  }, [room, refetch]);

  return (
    <Grid item xs={12}>
      <div className={classes.root}>
        <List dense={true}>
          {data ? (
            data.rooms ? (
              data.rooms.map(item => (
                <ListItem className={classes.listItem} key={item.id}>
                  <ListItemAvatar className={classes.avatar}>
                    <Avatar>
                      <MeetingRoomIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.name} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="edit"
                      className={classes.button}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      className={classes.button}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))
            ) : (
              ""
            )
          ) : (
            <ListItem className={classes.listItem}>No Data</ListItem>
          )}
        </List>
      </div>
    </Grid>
  );
};

export default ListContents;
