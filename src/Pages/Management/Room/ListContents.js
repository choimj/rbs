import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import Label from "@material-ui/icons/Label";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import StyledTreeItem from "../../../Components/StyledTreeItem";
import Grid from "@material-ui/core/Grid";
import CategoryIcon from "@material-ui/icons/Category";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { useQuery } from "react-apollo";
import { GET_ROOMS } from "./Query";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  container: {
    padding: "15px 0"
  },
  root: {
    flexGrow: 1,
    maxWidth: 752,
    maxHeight: "60vh",
    position: "relative",
    overflow: "auto",
    textAlign: "left"
  }
}));

const ListContents = ({
  room,
  handleGroupClick,
  handleCategoryClick,
  handleRoomClick
}) => {
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
      <div className={classes.container}>
        {data ? (
          data.groups ? (
            <TreeView
              className={classes.root}
              defaultCollapseIcon={<ArrowDropDownIcon />}
              defaultExpandIcon={<ArrowRightIcon />}
              defaultEndIcon={<div style={{ width: 24 }} />}
            >
              {data.groups.map((item, i) =>
                item.categories.length > 0 ? (
                  <StyledTreeItem
                    key={item.id}
                    nodeId={String(i)}
                    labelText={item.name}
                    labelIcon={Label}
                    onClick={e => handleGroupClick(e, item.id)}
                  >
                    {item.categories.map((cItem, j) =>
                      cItem.rooms.length > 0 ? (
                        <StyledTreeItem
                          key={cItem.id}
                          nodeId={"c" + j}
                          labelText={cItem.name}
                          labelIcon={CategoryIcon}
                          onClick={e => handleCategoryClick(e, cItem.id)}
                        >
                          {cItem.rooms.map((rItem, k) => (
                            <StyledTreeItem
                              key={"r" + k}
                              nodeId={"r" + k}
                              labelText={rItem.name}
                              labelIcon={MeetingRoomIcon}
                              onClick={e => handleRoomClick(e, rItem.id)}
                            />
                          ))}
                        </StyledTreeItem>
                      ) : (
                        <StyledTreeItem
                          key={cItem.id}
                          nodeId={"c" + j}
                          labelText={cItem.name}
                          labelIcon={CategoryIcon}
                          onClick={e => handleCategoryClick(e, cItem.id)}
                        />
                      )
                    )}
                  </StyledTreeItem>
                ) : (
                  <StyledTreeItem
                    key={item.id}
                    nodeId={String(i)}
                    labelText={item.name}
                    labelIcon={Label}
                    onClick={e => handleGroupClick(e, item.id)}
                  />
                )
              )}
            </TreeView>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
    </Grid>
  );
};

ListContents.propTypes = {
  room: PropTypes.object.isRequired
};

export default ListContents;
