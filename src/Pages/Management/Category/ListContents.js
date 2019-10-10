import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import Label from "@material-ui/icons/Label";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import StyledTreeItem from "./StyledTreeItem";
import Grid from "@material-ui/core/Grid";
import CategoryIcon from "@material-ui/icons/Category";
import { useQuery } from "@apollo/react-hooks";
import { GET_CATEGORIES } from "./Query";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  container: {
    padding: "15px 0"
  },
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
    textAlign: "left"
  }
});

const ListContents = ({
  category,
  handleCategoryEditClick,
  handleGroupClick
}) => {
  const classes = useStyles();

  const { data, refetch } = useQuery(GET_CATEGORIES, {
    onCompleted: data => {
      // console.log(data);
    }
  });

  useMemo(() => {
    if (category) {
      refetch();
    }
  }, [category, refetch]);

  return (
    <Grid item xs={12}>
      <div className={classes.container}>
        {data ? (
          data.groups ? (
            <TreeView
              className={classes.root}
              // defaultExpanded={["0"]}
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
                    {item.categories.map((cItem, j) => (
                      <StyledTreeItem
                        key={cItem.id}
                        nodeId={"c" + j}
                        labelText={cItem.name}
                        labelIcon={CategoryIcon}
                        onClick={e => handleCategoryEditClick(e, cItem.id)}
                        color="#1a73e8"
                        bgColor="#e8f0fe"
                      ></StyledTreeItem>
                    ))}
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
  category: PropTypes.object.isRequired
};

export default ListContents;
