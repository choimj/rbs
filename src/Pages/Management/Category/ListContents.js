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
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CategoryIcon from "@material-ui/icons/Category";

import { useQuery } from "react-apollo";
import { GET_CATEGORIES } from "./Query";

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

const ListContents = ({
  category,
  handleCategoryEditClick,
  handleCategoryDeleteClick
}) => {
  const classes = useStyles();

  const { data, refetch } = useQuery(GET_CATEGORIES, {
    onCompleted: data => {}
  });

  useMemo(() => {
    if (category) {
      refetch();
    }
  }, [category, refetch]);

  return (
    <Grid item xs={12}>
      <div className={classes.root}>
        <List dense={true}>
          {data ? (
            data.categories ? (
              data.categories.map(item => (
                <ListItem className={classes.listItem} key={item.id}>
                  <ListItemAvatar className={classes.avatar}>
                    <Avatar>
                      <CategoryIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.name} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="edit"
                      className={classes.button}
                      onClick={e => handleCategoryEditClick(e, item.id)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      className={classes.button}
                      onClick={e => handleCategoryDeleteClick(e, item.id)}
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
