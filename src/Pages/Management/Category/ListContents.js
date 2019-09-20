import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CategoryIcon from "@material-ui/icons/Category";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
    maxHeight: "60vh",
    // minHeight: "533px",
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

const ListContents = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <div className={classes.root}>
        <List dense={true}>
          <ListItem className={classes.listItem}>
            <ListItemAvatar className={classes.avatar}>
              <Avatar>
                <CategoryIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="신규사원"
              // secondary={false ? "Secondary text" : null}
            />
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
          <ListItem className={classes.listItem}>
            <ListItemAvatar className={classes.avatar}>
              <Avatar>
                <CategoryIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="스터디"
              // secondary={false ? "Secondary text" : null}
            />
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
        </List>
      </div>
    </Grid>
  );
};

export default ListContents;
